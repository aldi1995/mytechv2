import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import blogPosts from "../Data/blogData";

const Blog = () => {
  const POSTS_PER_BATCH = 3;
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    loadMore();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadMore = () => {
    setVisiblePosts((prevPosts) => {
      const currentLength = prevPosts.length;
      const nextPosts = blogPosts.slice(
        currentLength,
        currentLength + POSTS_PER_BATCH
      );
      if (currentLength + nextPosts.length >= blogPosts.length) setHasMore(false);
      return [...prevPosts, ...nextPosts];
    });
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      if (hasMore) loadMore();
    }
  };

  return (
    <section className="relative py-32 bg-[#f9fafc] dark:bg-[#0f172a] overflow-hidden transition-colors duration-500">
      {/* Latar gradasi halus */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-[1/0.7] bg-gradient-to-b from-white via-blue-50/30 to-transparent dark:from-slate-800 dark:via-slate-900/60 dark:to-transparent rounded-[50%] blur-3xl" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 mb-6 group cursor-pointer">
            <span className="text-sm font-medium">Artikel & Insight</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-6xl">
            Wawasan dari{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
              Tim Kami
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Jelajahi artikel, insight, dan pembaruan terbaru seputar teknologi,
            inovasi, serta proyek yang kami kembangkan di Mytech Indonesia.
          </p>
        </div>

        {/* Grid Artikel */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-slate-100 dark:border-slate-700"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{post.date}</p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-900 dark:text-blue-400 font-medium hover:underline group-hover:translate-x-1 transition-transform duration-300"
                >
                  Baca Selengkapnya
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {!hasMore && (
          <p className="text-center mt-16 text-slate-500 dark:text-slate-400 text-lg">
            Semua artikel telah ditampilkan 🎉
          </p>
        )}
      </div>
    </section>
  );
};

export default Blog;
