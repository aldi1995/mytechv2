import { useParams, Link } from "react-router-dom";
import blogPosts from "../Data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post)
    return (
      <div className="py-32 text-center text-red-500">
        Artikel tidak ditemukan.
      </div>
    );

  const shareText = encodeURIComponent(`${post.title} - ${window.location.href}`);
  const shareUrl = window.location.href;

  return (
    <section className="relative py-32 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="text-blue-600 mb-8 inline-block font-medium"
        >
          ← Kembali ke Blog
        </Link>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-3xl mb-8 shadow-lg"
          />
        )}

        <h1 className="text-5xl font-bold mb-4 text-slate-900">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date}</p>
        <div className="text-slate-700 leading-relaxed whitespace-pre-line text-lg mb-12">
          {post.content}
        </div>

        <div className="flex gap-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Share Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-sky-400 text-white rounded-lg hover:bg-sky-500 transition-all"
          >
            Share Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all"
          >
            Share LinkedIn
          </a>
        </div>
      </div>

      {/* Tawk.to Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/68f4ed4e5eca4d194faab6d3/1j7ubtv00';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
          `,
        }}
      />
    </section>
  );
};

export default BlogPost;
