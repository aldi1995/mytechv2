import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import blogPosts from "../Data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR-safe
    const found = blogPosts.find((p) => p.id.toString() === id);
    setPost(found);
  }, [id]);

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9fafc] dark:bg-slate-900 transition-colors duration-300">
        <p className="text-slate-500 dark:text-slate-400 text-lg">
          Artikel tidak ditemukan...
        </p>
      </div>
    );

  return (
    <section className="relative py-32 bg-[#f9fafc] dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      {/* Latar Belakang Gradasi */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-[1/0.7] 
            bg-gradient-to-b from-white via-blue-50/30 to-transparent 
            dark:from-slate-800 dark:via-slate-900/60 dark:to-transparent 
            rounded-[50%] blur-3xl"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Artikel */}
        <div className="mb-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mb-6 transition-all duration-300 hover:-translate-x-1"
          >
            <ArrowLeft size={18} />
            Kembali ke Blog
          </Link>

          <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <CalendarDays size={16} />
            <span className="text-sm">{post.date}</span>
          </div>
        </div>

        {/* Konten Artikel */}
        <div className="prose prose-lg max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
          {post.content.map((block, idx) => (
            <p key={idx} className="mb-6">
              {block}
            </p>
          ))}
        </div>

        {/* Footer Artikel */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Terima kasih telah membaca artikel ini.{" "}
            Temukan lebih banyak insight menarik di{" "}
            <Link
              to="/blog"
              className="text-blue-900 dark:text-blue-400 hover:underline font-medium"
            >
              Blog MyTech Indonesia
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
