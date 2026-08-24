import React from 'react';

const skillsData = [
  {
    category: "Front-End Development",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Bootstrap & DaisyUI", level: "Advanced" },
      { name: "Formik & Validation", level: "Intermediate" }
    ]
  },
  {
    category: "UI/UX & Design",
    skills: [
      { name: "Figma (Prototyping)", level: "Expert" },
      { name: "Design Systems", level: "Advanced" },
      { name: "User Research & Wireframing", level: "Advanced" },
      { name: "Responsive Web Design", level: "Expert" }
    ]
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Strapi CMS & REST APIs", level: "Intermediate" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Vite & Deployment", level: "Advanced" },
      { name: "Technical Teaching & Training", level: "Expert" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#141414] text-white py-24 px-8 max-w-7xl mx-auto border-t border-gray-900">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-400 text-base">
          A comprehensive breakdown of the technologies and tools I use to teach and build digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((group, index) => (
          <div 
            key={index} 
            className="bg-[#141414] border border-gray-800 p-6 rounded-2xl hover:border-cyan-500/40 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-6 pb-3 border-b border-gray-800">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-gray-900/40 px-4 py-3 rounded-xl border border-gray-800/60">
                    <span className="font-medium text-gray-200 text-sm">{skill.name}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;