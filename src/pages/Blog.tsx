import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard, { BlogItem } from "@/components/Blog/BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setBlogs(data.data || []);
        else setError(data.error || "Failed to load blogs.");
      })
      .catch(() => setError("Failed to load blogs."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 lg:px-16 pt-28 pb-16">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-muted-foreground font-medium">
            Insights on email deliverability, infrastructure, and scaling outbound campaigns.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading blogs...</p>
        ) : error ? (
          <p className="text-center text-red-600 font-medium">{error}</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-muted-foreground">No blog posts yet. Check back soon.</p>
        ) : (
          <BlogCard blogs={blogs} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
