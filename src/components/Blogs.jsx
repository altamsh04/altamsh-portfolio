import {
  Calendar,
  ExternalLink,
  MessageSquare,
  ThumbsUp
} from "lucide-react";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Blog data manually defined
  const blogs = [
    {
      id: 1,
      title: "Efficient Hashing Algorithms for Database Indexing",
      excerpt: "When I first started working with large-scale databases, one thing became immediately clear: the indexing mechanism can make or break your system's performance.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*ZmC9eTlYrbZA6mcb",
      link: "https://medium.com/@altamsh04/efficient-hashing-algorithms-for-database-indexing-7def355aceb2",
      date: "Apr 16, 2025",
      claps: 51,
      comments: 1
    },
    {
      id: 2,
      title: "Two Effective Study Ways For Your Next Exam",
      excerpt: "As a college student, I've developed two primary approaches to exam preparation: the \"Minimal Study Technique\" and the \"Strategic Study Technique.\"",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*qSWOBbZp9bMCc3ju",
      link: "https://medium.com/@altamsh04/mastering-your-college-semester-exams-with-minimal-and-strategic-study-technique-61a28bd8642b",
      date: "Jul 17, 2024",
      claps: 50,
      comments: 0
    },
    {
      id: 3,
      title: "Pointers for dummy's",
      excerpt: "A pointer is like a guide that helps us find where a piece of information is stored. It's useful because it allows us to talk about and change that information directly.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*CA7-HanpHQ0idVhCjaVEcw.jpeg",
      link: "https://medium.com/@altamsh04/pointers-in-c-%EF%B8%8F-%EF%B8%8F%EF%B8%8F-49637e51e286",
      date: "Jan 22, 2024",
      claps: 52,
      comments: 2
    }
  ];

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const blogsSection = document.getElementById("blogs-section");
    if (blogsSection) {
      observer.observe(blogsSection);
    }

    return () => {
      if (blogsSection) {
        observer.unobserve(blogsSection);
      }
    };
  }, []);

  // Function to handle card click - redirect to the blog post
  const handleCardClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="blogs-section"
      className="w-full py-20 bg-white dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Latest Blog Posts
          </h2>
          <div
            className={`h-1 w-20 bg-blue-600 mx-auto rounded transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 w-20" : "opacity-0 w-0"
            }`}
          ></div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              onClick={() => handleCardClick(blog.link)}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Blog Card */}
              <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-md transition-all duration-300">
                {/* Blog Image */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 text-sm">
                    {blog.excerpt}
                  </p>
                  
                  {/* Blog Meta - Date and Stats */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {/* Date */}
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{blog.date}</span>
                    </div>
                    
                    {/* Interaction Stats */}
                    <div className="flex items-center space-x-3">
                      {/* Claps */}
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <ThumbsUp size={14} className="mr-1" />
                        <span>{blog.claps}</span>
                      </div>
                      
                      {/* Comments */}
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <MessageSquare size={14} className="mr-1" />
                        <span>{blog.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://medium.com/@altamsh04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm hover:shadow group"
          >
            View All Blogs
            <ExternalLink size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;