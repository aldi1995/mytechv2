import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogData";

const Blog = () => {
  const POSTS_PER_BATCH = 3;
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMore();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadMore = () => {
    const currentLength = visiblePosts.length;
    const nextPosts = blogPosts.slice(
      currentLength,
      currentLength + POSTS_PER_BATCH
    );
    setVisiblePosts([...visiblePosts, ...nextPosts]);
    if (currentLength + nextPosts.length >= blogPosts.length) setHasMore(false);
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
    <section className="relative py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Blog 
        </h1>

        <div className="flex flex-col gap-6">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
            >
              <h2 className="text-xl font-semibold mb-2 text-slate-900">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>

        {!hasMore && (
          <p className="text-center mt-12 text-gray-500">
            Semua artikel telah ditampilkan.
          </p>
        )}
      </div>
    </section>
  );
};

export default Blog;
