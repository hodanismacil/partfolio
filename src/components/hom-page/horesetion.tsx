import { motion } from "framer-motion";

// 1. Hubi in jidka (path) sawiradu uu sax yahay
import sawir from "../../assets/sawir.png"; 
import sawir2 from "../../assets/mpapp.png"; 
import sawir3 from "../../assets/laenpage.png"; 
import  sawir4 from "../../assets/myprofile.png";
import {  Code2, Database } from "lucide-react";

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "G502 Hero Gaming Mouse",
      description: "Landing page casri ah oo loogu talagalay qalabka ciyaaraha, lehna animations iyo Dark UI.",
      image: sawir, // Waxay isticmaalaysaa sawir.png
      tags: ["React", "Tailwind", "Framer Motion"]
    },
    {
      id: 2,
      title: "EduJar Learning System",
      description: "Platform waxbarasho oo leh design qurux badan, looguna talagalay in lagu kobciyo xirfadaha.",
      image: sawir2, // Waxay isticmaalaysaa mpapp.png
      tags: ["React", "UI Design", "CSS"]
    },
    {
      id: 3,
      title: "MyApp-Platform",
      description: "Dashboard iyo landing page loogu talagalay ardayda, lehna nidaam login iyo course tracking.",
      image: sawir3, // Waxay isticmaalaysaa laenpage.png
      tags: ["TypeScript", "React", "Node.js"]
    },
    
  ];
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      skills: ["React", "TypeScript", "Tailwind CSS"],
      color: "border-blue-500/20"
    },
    {
      title: "Data Analytics",
      icon: <Database className="w-8 h-8 text-green-500" />,
      skills: ["Excel Formulas", "Pivot Tables", "Dashboards"],
      color: "border-green-500/20"
    },
  
  ];

  return (
    <div className="bg-[#050508] text-white font-sans selection:bg-purple-500/30">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-purple-400 mb-6 inline-block">
            Available for new projects
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">Hodan</span> 👋
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Frontend Developer | React Enthusiast | UI/UX Focused
            I build modern, responsive, and user-friendly web applications, focused on improving user experience and clean design.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all active:scale-95">
              View My Work
            </button>
            <button className="px-8 py-4 rounded-2xl font-semibold border border-white/10 hover:bg-white/5 transition-all">
              Contact Me
            </button>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-6 bg-[#080810]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">The work I do</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a Frontend Developer who loves building modern websites.
I specialize in using **React**, **TypeScript**, and **Tailwind CSS**
to create beautiful and easy-to-use interfaces.
            </p>
            <div className="space-y-4 border-l-2 border-purple-500/30 pl-6">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-purple-400">📧</span> hodanismacil256@gmail.com
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-blue-400">📱</span> +252 0636409413
              </div>
            </div>
          </motion.div>

          <motion.div
  className="relative"
  initial={{ opacity: 0, scale: 0.9, y: 50 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-20 blur-2xl rounded-3xl" />

  <div className="relative bg-white/5 p-4 md:p-6 rounded-3xl border border-white/10 shadow-2xl">
    <img
      src={sawir4}
      alt="Hodan"
      className="w-full h-[400px] object-cover rounded hover:scale-105 hover:rotate-1 transition duration-500"
      
    />
  </div>
</motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Projects I have built</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-white/5 border border-white/10 rounded-[35px] overflow-hidden hover:border-purple-500/50 transition-all duration-500"
              >
                {/* Image Area */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <button className="text-sm font-bold flex items-center gap-2 text-white hover:text-purple-400 transition-colors">
                    View Case Study 
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        <section className="py-12 bg-[#080810]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Xirfadahayga (My Skills)</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`p-6 bg-white/5 rounded-xl border-2 ${category.color} shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* DATA ANALYSIS & TOOLS SECTION */}
      <section className="py-20 px-6 bg-[#0a0a15]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div >
              <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500  ">
                Data & Office Expertise
              </h2>
              <p className="text-gray-400">High-level data and document management skills</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/20 p-8 rounded-[30px]">
              <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-green-400 font-bold text-xl">X</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Advanced Excel</h3>
              <ul className="text-gray-400 space-y-2 mb-6 text-sm">
                <li>• Interactive Dashboards & Pivot Tables</li>
                <li>• Data Cleaning & Complex Formulas</li>
                <li>• Visualizing Professional Market Data</li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 p-8 rounded-[30px]">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-400 font-bold text-xl">W</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Microsoft Word</h3>
              <ul className="text-gray-400 space-y-2 mb-6 text-sm">
                <li>• Professional Reporting & Documentation</li>
                <li>• Project Proposals & Layout Design</li>
                <li>• Fast & Accurate Content Creation</li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center gap-4   mt-12">

  <a 
    href="https://elearning-plat.vercel.app" 
    target="_blank" rel="noopener noreferrer"
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    Live Demo
  </a>

  {/* Link-ga GitHub (Code) */}
  <a 
  href="https://github.com/hodanismacil/elearning-plat" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-4 py-2 border border-gray-600 text-gray-700 rounded-lg hover:bg-gray-100 transition"
>
  View Code 
</a>
</div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's work together.</h2>
        <a href="mailto:hodanismacil256@gmail.com" className="text-2xl font-medium hover:text-purple-400 transition-colors underline underline-offset-8">
        hodanismacil256@gmail.com
        </a>
        <div className="mt-12 text-gray-600 text-sm">
          © {new Date().getFullYear()} Hodan. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;