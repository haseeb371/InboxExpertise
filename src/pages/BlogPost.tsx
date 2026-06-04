import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BlogItem } from "@/components/Blog/BlogCard";

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogItem & { content?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setBlog(data.data);
        else setError(data.error || "Blog not found.");
      })
      .catch(() => setError("Failed to load blog."))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 lg:px-16 pt-28 pb-16 max-w-4xl">
        {loading ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : error || !blog ? (
          <p className="text-red-600">{error || "Blog not found."}</p>
        ) : (
          <article>
            <Link to="/blog" className="text-primary font-semibold text-sm hover:underline mb-8 inline-block">
              ← Back to Blog
            </Link>
            <p className="text-sm font-medium text-muted-foreground mb-3">{blog.author}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{blog.title}</h1>
            <p className="text-sm text-muted-foreground mb-8">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <div className="w-full h-[280px] md:h-[360px] rounded-2xl bg-muted/30 flex items-center justify-center p-8 mb-10">
              <img src={blog.image} alt={blog.title} className="max-h-full max-w-full object-contain" />
            </div>
            <p className="text-lg font-medium text-muted-foreground mb-8">{blog.description}</p>
            <div className="text-foreground whitespace-pre-wrap leading-relaxed">{blog.content}</div>
          </article>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
