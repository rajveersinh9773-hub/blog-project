import { FaStar } from "react-icons/fa";

function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="relative overflow-hidden rounded-[40px] shadow-2xl h-[750px]">

        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2000&q=90"
          alt="React Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/70 to-transparent"></div>


        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl px-8 lg:px-16 text-white">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500 font-semibold">
              <FaStar />
              Featured Post
            </span>


            {/* Title */}
            <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">
              React 2026
              <br />
              Complete Guide
            </h1>


            {/* Description */}
            <p className="mt-6 text-lg text-slate-300 leading-8">
              Master React from beginner to advanced level with practical
              projects, hooks, routing, API integration, Redux, and modern
              development techniques.
            </p>


            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                Read More →
              </button>

              <button className="border border-white/30 backdrop-blur-sm px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                Explore Blogs
              </button>

            </div>


            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-12 text-slate-300">

              <div>
                <h3 className="text-3xl font-bold text-white">
                  50+
                </h3>
                <p>
                  Articles
                </p>
              </div>


              <div>
                <h3 className="text-3xl font-bold text-white">
                  10K+
                </h3>
                <p>
                  Readers
                </p>
              </div>


              <div>
                <h3 className="text-3xl font-bold text-white">
                  100%
                </h3>
                <p>
                  Free Content
                </p>
              </div>

            </div>


          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;