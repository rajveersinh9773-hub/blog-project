import { MdMarkEmailUnread } from "react-icons/md";

function Connectform() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[32px] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">

        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <MdMarkEmailUnread className="text-6xl text-white" />
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white mb-2">
              Stay Updated!
            </h3>

            <p className="text-cyan-100 text-lg max-w-xl">
              Subscribe to our newsletter and receive the latest articles,
              tutorials, and updates directly in your inbox.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full lg:w-96 px-6 py-4 rounded-2xl bg-white text-slate-700 outline-none shadow-lg"
          />

          <button className="bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}

export default Connectform;