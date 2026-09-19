import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#141414] text-white border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Let's <span className="text-cyan-400">Talk</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm md:text-base">
          Have a project in mind or want to collaborate? Feel free to reach out. Let's build something amazing together!
        </p>

        <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 max-w-xl mx-auto shadow-xl">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase mb-2">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase mb-2">Your Email</label>
              <input 
                type="email5" 
                placeholder="Enter your email" 
                className="w-full bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase mb-2">Message</label>
              <textarea 
                rows="4" 
                placeholder="Type your message here..." 
                className="w-full bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none transition"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-cyan-500 text-black font-bold py-3 rounded-lg hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;