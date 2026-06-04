import { Link } from "react-router-dom";

export type BlogItem = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  image: string;
  createdAt: string;
};

export default function BlogCard({ blogs }: { blogs: BlogItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Link
          to={`/blog/${blog.slug}`}
          key={blog._id}
          className="rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-full h-[220px] bg-muted/30 flex items-center justify-center p-8">
            <img src={blog.image} alt={blog.title} className="max-h-full max-w-full object-contain" />
          </div>
          <div className="p-5 text-left">
            <p className="text-sm font-medium text-muted-foreground mb-2">{blog.author}</p>
            <h3 className="text-xl font-bold text-foreground mb-2">{blog.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{blog.description}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
