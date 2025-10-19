import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR-safe
    const found = blogPosts.find((p) => p.id.toString() === id);
    setPost(found);
  }, [id]);

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Artikel tidak ditemukan...</p>
    </div>
  );

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date}</p>

        {post.content.map((block, idx) => (
          <p key={idx} className="text-slate-700 mb-4">{block}</p>
        ))}

        <Link
          to="/blog"
          className="inline-block mt-8 text-blue-600 font-medium hover:underline"
        >
          ← Kembali ke Blog
        </Link>
      </div>
    </section>
  );
};

export default BlogPost;
