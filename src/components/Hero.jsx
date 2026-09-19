import React from "react";
import profileImg from "../assets/profile.png";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTelegramPlane,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#141414] text-white py-24 px-8 max-w-7xl mx-auto min-h-[85vh] flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 w-full">
        {/* Left Side: Text, CTA & Social Icons */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-400 text-lg mb-1">Hello, I'm</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight text-white">
            Mostafa Abo Elmagd
          </h1>

          <h2 className="text-cyan-400 text-lg sm:text-xl font-semibold mb-3">
            UI/UX Lecturer & Front-End Developer
          </h2>

          <p className="text-gray-400 max-w-lg mb-8 text-sm sm:text-base leading-relaxed mx-auto md:mx-0">
            Transforming complex ideas into stunning, user-centered web
            interfaces and interactive applications using React and Tailwind.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a
              href="#projects"
              className="bg-cyan-500 text-black px-7 py-3 rounded-full font-bold text-sm hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </a>
            <a
              href="/Mostafa_Mohamed_CV.pdf"
              download="Mostafa_Mohamed_Mahmoud_CV.pdf"
              className="border border-gray-700 text-gray-300 px-7 py-3 rounded-full font-bold text-sm hover:border-gray-500 hover:text-white transition"
            >
              Download CV
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start items-center gap-4 text-gray-400 text-lg">
            <a
              href="https://wa.me/201096244719"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition p-2 bg-gray-900 border border-gray-800 rounded-full hover:border-cyan-500/50"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/share/19G8N7AN5K/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition p-2 bg-gray-900 border border-gray-800 rounded-full hover:border-cyan-500/50"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://t.me/+201096244719"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition p-2 bg-gray-900 border border-gray-800 rounded-full hover:border-cyan-500/50"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://github.com/mostafaaboelmagd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition p-2 bg-gray-900 border border-gray-800 rounded-full hover:border-cyan-500/50"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mostafa-abo-elmagd?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition p-2 bg-gray-900 border border-gray-800 rounded-full hover:border-cyan-500/50"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Side: Circular Profile Image */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyan-500/40 shadow-2xl shadow-cyan-500/10 group bg-gray-900">
            <img
              src={profileImg}
              alt="Mostafa Abo Elmagd"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
            />
          </div>

          <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
