import express from 'express';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { connectDB, tryConnectDB, getAdminPasswordHash } from '../lib/mongodb.js';
import Blog from '../models/blog.js';
import { slugify } from '../lib/slugify.js';
import { verifyAdmin } from '../lib/adminAuth.js';

const router = express.Router();

const sampleBlogs = [
  {
    title: 'Master Email Deliverability in 2026',
    slug: 'master-email-deliverability-2026',
    description:
      'Learn the core principles that keep your campaigns landing in the inbox, not spam.',
    content: `Deliverability is the result of infrastructure, reputation, and sending behavior working together.

Authenticate every domain with SPF, DKIM, and DMARC before scaling volume. Warm mailboxes gradually and monitor engagement signals daily.

Inbox Expertise helps teams build and maintain deliverability-ready infrastructure with expert setup and ongoing support.`,
    author: 'Inbox Expertise',
    image: '/email-infrastructure-icon.svg',
    published: true,
  },
  {
    title: 'Google Workspace Setup for Outbound Teams',
    slug: 'google-workspace-setup-outbound-teams',
    description:
      'A practical guide to provisioning Workspace mailboxes built for cold outreach.',
    content: `Google Workspace remains a top choice for B2B outbound because of strong provider trust.

Successful setup includes domain verification, mailbox provisioning, DNS alignment, and controlled send ramp-up.

Standardize your process across clients or campaigns to reduce errors and protect domain reputation over time.`,
    author: 'Inbox Expertise',
    image: '/technical-setup-icon.svg',
    published: true,
  },
  {
    title: '7 Deliverability Metrics You Should Track Weekly',
    slug: 'deliverability-metrics-track-weekly',
    description:
      'The weekly metrics that reveal whether your email infrastructure is healthy.',
    content: `Track bounce rate, spam complaint rate, open trends, reply rate, and domain-level placement.

Sudden changes often indicate DNS issues, list quality problems, or mailboxes sending too aggressively.

Weekly reviews help you fix issues before they become costly campaign failures.`,
    author: 'Inbox Expertise',
    image: '/account-management-icon.svg',
    published: true,
  },
  {
    title: 'How to Protect Domain Reputation While Scaling',
    slug: 'protect-domain-reputation-while-scaling',
    description:
      'Scale outbound volume safely without burning your sending domains.',
    content: `Reputation protection starts with volume discipline and domain segmentation.

Use multiple domains, rotate mailboxes intelligently, and pause underperforming assets quickly.

With the right infrastructure partner, teams can grow outbound programs while keeping inbox placement stable.`,
    author: 'Inbox Expertise',
    image: '/secure-icon.svg',
    published: true,
  },
];

router.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminEmail = process.env.ADMIN_EMAIL?.trim();
    const adminPasswordHash = getAdminPasswordHash();

    if (!adminEmail || !adminPasswordHash) {
      return res.status(500).json({ error: 'Server configuration error' });
    }

    if (email?.trim() !== adminEmail) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(password, adminPasswordHash);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');
    const token = await new SignJWT({ email: adminEmail })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(secret);

    res.cookie('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400000,
      path: '/',
    });

    return res.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Authentication failed' });
  }
});

router.get('/blogs', async (_req, res) => {
  try {
    if (!(await tryConnectDB())) {
      return res.status(503).json({
        error: 'Unable to load blog posts right now. Please try again in a moment.',
      });
    }
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
    return res.json({ success: true, data: blogs });
  } catch (error) {
    console.warn('Blog fetch error:', error instanceof Error ? error.message : error);
    return res.status(500).json({ error: 'Failed to fetch blogs.' });
  }
});

router.get('/blogs/admin', verifyAdmin, async (_req, res) => {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: blogs });
  } catch (error) {
    console.error('Admin blog fetch error:', error);
    return res.status(500).json({ error: 'Failed to fetch blogs.' });
  }
});

router.get('/blogs/:slug', async (req, res) => {
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug: req.params.slug, published: true });
    if (!blog) return res.status(404).json({ error: 'Blog not found.' });
    return res.json({ success: true, data: blog });
  } catch (error) {
    console.error('Blog fetch error:', error);
    return res.status(500).json({ error: 'Failed to fetch blog.' });
  }
});

router.post('/blogs', verifyAdmin, async (req, res) => {
  try {
    await connectDB();
    const { title, description, content, author, image, published, slug } = req.body;

    if (!title || !description || !content || !image) {
      return res.status(400).json({ error: 'Title, description, content, and image are required.' });
    }

    const blogSlug = slug || slugify(title);
    const existing = await Blog.findOne({ slug: blogSlug });
    if (existing) {
      return res.status(409).json({ error: 'A blog with this slug already exists.' });
    }

    const blog = await Blog.create({
      title,
      slug: blogSlug,
      description,
      content,
      author: author || 'Inbox Expertise',
      image,
      published: published !== false,
    });

    return res.status(201).json({ success: true, data: blog });
  } catch (error) {
    console.error('Blog create error:', error);
    return res.status(500).json({ error: 'Failed to create blog.' });
  }
});

router.delete('/blogs/:slug', verifyAdmin, async (req, res) => {
  try {
    await connectDB();
    const blog = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ error: 'Blog not found.' });
    return res.json({ success: true, message: 'Blog deleted.' });
  } catch (error) {
    console.error('Blog delete error:', error);
    return res.status(500).json({ error: 'Failed to delete blog.' });
  }
});

router.post('/blogs/seed', verifyAdmin, async (_req, res) => {
  try {
    await connectDB();
    const results = [];

    for (const blog of sampleBlogs) {
      const saved = await Blog.findOneAndUpdate({ slug: blog.slug }, blog, {
        upsert: true,
        new: true,
      });
      results.push(saved.slug);
    }

    return res.json({
      success: true,
      message: '4 blogs uploaded successfully.',
      slugs: results,
    });
  } catch (error) {
    console.error('Seed blogs error:', error);
    return res.status(500).json({ error: 'Failed to seed blogs.' });
  }
});

export default router;
