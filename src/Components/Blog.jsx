import axios from "axios";
import { useState, useEffect } from "react";

function Blog() {
  const [blogs, setBlog] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const api = "http://localhost:3000/blogs";

  const getData = async () => {
    try {
      const response = await axios.get(api);
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-4xl font-bold text-slate-800">
            Latest Blog
          </h3>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-cyan-600 font-semibold hover:text-cyan-700 transition"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {displayedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.heading}
                  className="h-60 w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm font-semibold">
                  {blog.title}
                </span>

                <h4 className="text-2xl font-bold text-slate-800 leading-tight">
                  {blog.heading}
                </h4>

                <p className="text-slate-600 line-clamp-3">
                  {blog.desc}
                </p>

                <div className="flex justify-between text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-600">●</span>
                    {blog.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-cyan-600">●</span>
                    5 min Read
                  </div>
                </div>

                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;  