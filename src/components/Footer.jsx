import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaTelegramPlane, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-400 py-12 px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo & Brief */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-black tracking-wider text-white inline-block mb-2">
            MOSTAFA<span className="text-cyan-400"></span>
          </a>
          <p className="text-sm text-gray-400 max-w-sm">
            UI/UX Lecturer & Front-End Developer. Crafting pixel-perfect, user-centered digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
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

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-900/60 text-center text-xs text-gray-400">
        <p>© 2026 Mostafa Abo Elmagd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;