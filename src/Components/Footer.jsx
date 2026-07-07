import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-4xl font-bold mb-4">
              My<span className="text-cyan-500">Blog</span>
            </h2>

            <p className="text-slate-400 leading-7">
              A place where I share my learnings about Web Development,
              Programming, React, JavaScript, and modern technologies.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>


          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-cyan-400 transition cursor-pointer">Home</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Blogs</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Categories</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">About</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Contact</li>
            </ul>
          </div>


          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>NodeJS</li>
            </ul>
          </div>


          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Newsletter
            </h3>

            <p className="text-slate-400 mb-4">
              Subscribe to receive the latest blog updates.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
            />

            <button className="w-full mt-3 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>


      <div className="border-t border-slate-800 py-5 text-center text-slate-400">
        © 2026 MyBlog. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;