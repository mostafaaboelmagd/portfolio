import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#141414] text-white py-24 px-8 max-w-7xl mx-auto border-t border-gray-900"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <p className="text-gray-400 text-base">
          Bridging the gap between creative design and powerful code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Bio / Description */}
        <div className="text-left space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Passionate UI/UX Lecturer & Front-End Developer
          </h3>
          <p className="text-gray-300 leading-relaxed text-base">
            I am Mostafa Abo Elmagd, a dedicated UI/UX lecturer and front-end
            development instructor. I specialize in teaching user experience
            design, computer literacy, and modern web technologies.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm">
            With a deep focus on building scalable web interfaces using React,
            Tailwind CSS, and JavaScript, I bridge the gap between aesthetic
            design and clean, efficient code to deliver outstanding digital
            experiences.
          </p>

          <div className="pt-4">
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-block bg-[#141414] border border-gray-700 text-white px-7 py-3 rounded-full font-bold text-sm hover:border-cyan-500 hover:text-cyan-400 transition cursor-pointer"
            >
              Let's Work Together
            </button>
          </div>
        </div>

        {/* Right Side: Quick Stats / Highlights */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#141414] border border-gray-800 p-6 rounded-2xl text-center hover:border-cyan-500/40 transition">
            <span className="block text-3xl font-extrabold text-cyan-400 mb-2">
              UI/UX
            </span>
            <span className="text-gray-400 text-sm font-medium">
              Design & Teaching
            </span>
          </div>

          <div className="bg-[#141414] border border-gray-800 p-6 rounded-2xl text-center hover:border-cyan-500/40 transition">
            <span className="block text-3xl font-extrabold text-cyan-400 mb-2">
              React
            </span>
            <span className="text-gray-400 text-sm font-medium">
              Front-End Dev
            </span>
          </div>

          <div className="bg-[#141414] border border-gray-800 p-6 rounded-2xl text-center hover:border-cyan-500/40 transition">
            <span className="block text-3xl font-extrabold text-cyan-400 mb-2">
              Figma
            </span>
            <span className="text-gray-400 text-sm font-medium">
              Prototyping & Systems
            </span>
          </div>

          <div className="bg-[#141414] border border-gray-800 p-6 rounded-2xl text-center hover:border-cyan-500/40 transition">
            <span className="block text-3xl font-extrabold text-cyan-400 mb-2">
              CMS
            </span>
            <span className="text-gray-400 text-sm font-medium">
              Strapi & APIs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
