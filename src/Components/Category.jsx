import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";

function Catg() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-800 mb-10">
          Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-4">
              <FaReact className="text-4xl text-cyan-500" />
            </div>

            <h3 className="font-bold text-xl text-slate-800">React</h3>
            <p className="text-slate-500 mt-1">1 Posts</p>
            <p className="text-cyan-600 font-semibold mt-4">Explore →</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
              <FaJs className="text-4xl text-yellow-500" />
            </div>

            <h3 className="font-bold text-xl text-slate-800">JavaScript</h3>
            <p className="text-slate-500 mt-1">2 Posts</p>
            <p className="text-yellow-600 font-semibold mt-4">Explore →</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <FaCss3Alt className="text-4xl text-blue-600" />
            </div>

            <h3 className="font-bold text-xl text-slate-800">CSS</h3>
            <p className="text-slate-500 mt-1">3 Posts</p>
            <p className="text-blue-600 font-semibold mt-4">Explore →</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
              <FaHtml5 className="text-4xl text-orange-500" />
            </div>

            <h3 className="font-bold text-xl text-slate-800">HTML</h3>
            <p className="text-slate-500 mt-1">4 Posts</p>
            <p className="text-orange-600 font-semibold mt-4">Explore →</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
              <FaNodeJs className="text-4xl text-green-500" />
            </div>

            <h3 className="font-bold text-xl text-slate-800">NodeJS</h3>
            <p className="text-slate-500 mt-1">5 Posts</p>
            <p className="text-green-600 font-semibold mt-4">Explore →</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Catg;