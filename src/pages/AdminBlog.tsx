import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { slugify } from "@/lib/slugify";

type BlogPost = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  published: boolean;
};

const emptyForm = {
  title: "",
  slug: "",
  description: "",
  content: "",
  author: "Inbox Expertise",
  image: "",
  published: true,
};

const AdminBlog = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchBlogs = async () => {
    const res = await fetch("/api/blogs/admin", { credentials: "include" });
    const data = await res.json();
    if (res.ok) setBlogs(data.data || []);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Invalid credentials");

      setIsAuthed(true);
      await fetchBlogs();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = "checked" in e.target ? e.target.checked : false;
    const nextValue = type === "checkbox" ? checked : value;

    setForm((prev) => {
      const updated = { ...prev, [name]: nextValue };
      if (name === "title" && typeof nextValue === "string") {
        updated.slug = slugify(nextValue);
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create blog");

      setMessage("Blog published successfully.");
      setForm(emptyForm);
      await fetchBlogs();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Delete this blog post?")) return;

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete blog");

      setMessage("Blog deleted.");
      await fetchBlogs();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to delete blog");
    } finally {
      setLoading(false);
    }
  };

  const handleSeed = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/blogs/seed", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to upload sample blogs");

      setMessage("4 sample blogs uploaded successfully.");
      await fetchBlogs();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Seed failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 lg:px-16 pt-28 pb-16 max-w-4xl">
        {!isAuthed ? (
          <form onSubmit={handleLogin} className="max-w-md mx-auto border rounded-2xl p-8 bg-card space-y-4">
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-sm text-muted-foreground">Sign in to manage blog posts.</p>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@inboxexpertise.local"
              required
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {message && <p className="text-sm text-red-600">{message}</p>}
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Signing in..." : "Login"}
            </Button>
          </form>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-2">Admin Blog Panel</h1>
            <p className="text-muted-foreground mb-8">Create and manage blog posts.</p>

            <form onSubmit={handleSubmit} className="border rounded-2xl p-6 bg-card space-y-4 mb-12">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input name="title" value={form.title} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug</label>
                <Input name="slug" value={form.slug} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea name="description" value={form.description} onChange={handleChange} required rows={2} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <Textarea name="content" value={form.content} onChange={handleChange} required rows={8} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Author</label>
                <Input name="author" value={form.author} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Cover Image URL</label>
                <Input
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  required
                  placeholder="/email-infrastructure-icon.svg"
                />
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" name="published" checked={form.published} onChange={handleChange} />
                Publish immediately
              </label>

              {message && (
                <p
                  className={`text-sm ${
                    message.includes("success") || message.includes("deleted")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                <Button type="submit" disabled={loading}>
                  {loading ? "Saving..." : "Publish Blog"}
                </Button>
                <Button type="button" variant="outline" disabled={loading} onClick={handleSeed}>
                  Upload 4 Sample Blogs
                </Button>
              </div>
            </form>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Existing Posts</h2>
              {blogs.length === 0 ? (
                <p className="text-muted-foreground">No posts yet.</p>
              ) : (
                blogs.map((blog) => (
                  <div key={blog._id} className="flex gap-4 items-start border rounded-2xl p-4 bg-card">
                    <div className="w-20 h-20 shrink-0 bg-muted/30 rounded-lg flex items-center justify-center p-2">
                      <img src={blog.image} alt={blog.title} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{blog.title}</h3>
                      <p className="text-sm text-muted-foreground">{blog.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        /{blog.slug} · {blog.published ? "Published" : "Draft"}
                      </p>
                    </div>
                    <Button variant="outline" onClick={() => handleDelete(blog.slug)} disabled={loading}>
                      Delete
                    </Button>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdminBlog;
