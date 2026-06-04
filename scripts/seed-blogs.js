import dns from 'node:dns';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');
  const env = {};

  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;

      const idx = trimmed.indexOf('=');
      if (idx === -1) return;

      const key = trimmed.slice(0, idx);
      const value = trimmed.slice(idx + 1).replace(/\\\$/g, '$');
      env[key] = value;
    });

  return env;
}

function srvToStandardUri(srvUri) {
  const match = srvUri.match(/^mongodb\+srv:\/\/([^@]+)@([^/]+)\/([^?]+)(\?.*)?$/);
  if (!match) return null;

  const [, credentials, host, database, query = ''] = match;
  const params = new URLSearchParams(query.replace(/^\?/, ''));
  params.set('ssl', 'true');
  params.set('authSource', 'admin');

  const clusterPrefix = host.split('.')[0];
  const domain = host.substring(clusterPrefix.length + 1);
  const shards = [0, 1, 2]
    .map((n) => `${clusterPrefix}-shard-00-0${n}.${domain}:27017`)
    .join(',');

  return `mongodb://${credentials}@${shards}/${database}?${params.toString()}`;
}

async function connect(uri) {
  const options = { serverSelectionTimeoutMS: 15000 };

  try {
    await mongoose.connect(uri, options);
    return;
  } catch (error) {
    if (uri.startsWith('mongodb+srv://')) {
      const fallback = srvToStandardUri(uri);
      if (fallback) {
        await mongoose.connect(fallback, options);
        return;
      }
    }
    throw error;
  }
}

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    description: String,
    content: String,
    author: String,
    image: String,
    published: Boolean,
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

const blogs = [
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

async function seed() {
  const env = loadEnv();
  const uri = env.MONGODB_URI;

  if (!uri) {
    console.error('MONGODB_URI not found in .env.local');
    process.exit(1);
  }

  await connect(uri);

  for (const blog of blogs) {
    await Blog.findOneAndUpdate({ slug: blog.slug }, blog, { upsert: true, new: true });
    console.log('Seeded:', blog.slug);
  }

  const count = await Blog.countDocuments({ published: true });
  console.log(`Done. ${count} published blog(s) in database.`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
