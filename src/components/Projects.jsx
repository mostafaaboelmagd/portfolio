import React from 'react';

const projectsData = [
  {
    title: "Personal Portfolio",
    category: "Portfolio Website",
    description: "A modern and responsive personal portfolio showcasing my web development projects, skills, and professional experience with sleek dark-mode styling.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    link: "https://mostafaaboelmagd.github.io/Personal-Portfolio/"
  },
  {
    title: "To-Do App",
    category: "Task Management Web App",
    description: "A dynamic task management application featuring full CRUD operations, category filtering, and LocalStorage data persistence.",
    tags: ["JavaScript", "DOM Manipulation", "LocalStorage", "GitHub Pages"],
    link: "https://mostafaaboelmagd.github.io/To-Do-App/"
  },
  {
    title: "JavaScript Calculator",
    category: "Interactive Utility App",
    description: "A fully functional calculator built with JavaScript featuring clean UI design, responsive layout, and precise mathematical operations.",
    tags: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
    link: "https://mostafaaboelmagd.github.io/js-calculator/"
  },
  {
    title: "Movies-show",
    category: "Streaming & Entertainment Web App",
    description: "A comprehensive movie and show streaming interface featuring subscription pages, authentication flows, and responsive media layouts.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    link: "https://mostafaaboelmagd.github.io/Movies-show/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#141414] text-white py-24 px-8 max-w-7xl mx-auto border-t border-gray-900">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight text-white">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-base">
          Here are some of the professional web applications and projects I've built and designed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="bg-[#141414] border border-gray-800 p-6 rounded-2xl hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition text-white">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-gray-900 text-gray-300 px-2.5 py-1 rounded-md border border-gray-800">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition"
              >
                View Project 
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;