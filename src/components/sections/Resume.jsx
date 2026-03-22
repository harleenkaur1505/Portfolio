import React from 'react'
import { motion } from 'framer-motion'
import { Download, GraduationCap, Terminal, Briefcase, Award } from 'lucide-react'

const resumeData = {
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University, Punjab, India",
      cgpa: "CGPA: 7.85",
      period: "Expected Graduation: 2027",
    }
  ],
  skills: [
    { category: "Frontend", items: "React.js, HTML, CSS, JavaScript" },
    { category: "Backend", items: "Node.js, Express.js, PHP" },
    { category: "Database", items: "MongoDB" },
    { category: "Tools", items: "Git, Postman" },
    { category: "Core", items: "Data Structures & Algorithms" }
  ],
  projects: [
    {
      title: "TaskFlow – Real-Time Task Management System",
      points: [
        "Built a collaborative task management platform with boards, lists, and drag-and-drop cards",
        "Implemented real-time updates using Socket.io for multi-user collaboration",
        "Added activity tracking, deadlines, and role-based access control"
      ],
      tech: "Node.js, Express.js, MongoDB, Socket.io"
    },
    {
      title: "ClubHub – Club Membership Management System",
      points: [
        "Developed a web-based platform to manage club memberships and user registrations",
        "Implemented user authentication and role-based access (admin and members)",
        "Enabled membership requests, approvals, and member management features",
        "Designed a dashboard for managing users and club activities"
      ],
      tech: "React.js, Node.js, Express.js, MongoDB"
    },
    {
      title: "CareerConnect – Job Searching Platform",
      points: [
        "Built a web platform for students to search jobs and internships",
        "Added personalized search features and AI-based recommendations",
        "Provided access to a wide range of opportunities"
      ],
      tech: "HTML, CSS, JavaScript, PHP"
    }
  ],
  achievements: [
    { highlight: "Solved 200+ DSA Problems", text: " - Consistently solved problems on LeetCode, improving problem-solving skills" },
    { highlight: "50-Day DSA Streak", text: " - Maintained a continuous streak demonstrating discipline and consistency" },
    { highlight: "1st Place – Hack-a-Hunt Coding Challenge", text: " - Won first place by solving real-world coding challenges under time constraints" }
  ]
}

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="resume" className="py-24 min-h-screen relative z-10 w-full bg-futuristic flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold inline-block border-b-2 border-accent-pink pb-2 glow-text-pink text-white">
            Resume
          </h2>
        </motion.div>

        {/* Central Glassmorphism Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 shadow-[0_0_40px_rgba(167,139,250,0.1)] before:absolute before:inset-0 before:rounded-3xl before:border before:border-transparent before:bg-gradient-to-br before:from-accent-lavender/20 before:to-accent-pink/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10"
        >
          
          {/* Education Section */}
          <motion.div variants={childVariants} className="mb-10">
            <h3 className="flex items-center gap-3 text-2xl font-syne font-bold text-white mb-6">
              <GraduationCap className="text-accent-lavender" size={26} />
              Education
            </h3>
            <div className="space-y-4 pl-4 border-l border-white/10 ml-3">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 before:absolute before:left-[-5px] before:top-2.5 before:w-2.5 before:h-2.5 before:bg-accent-lavender before:rounded-full before:shadow-[0_0_10px_rgba(167,139,250,0.8)]">
                  <h4 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-lavender to-white mb-2">{edu.degree}</h4>
                  <p className="text-gray-200 text-[15px] font-normal mb-3">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 text-[#9CA3AF] text-sm font-light">
                    <span>{edu.cgpa}</span>
                    <span className="hidden sm:block text-white/20">•</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div variants={childVariants} className="mb-10">
            <h3 className="flex items-center gap-3 text-2xl font-syne font-bold text-white mb-6">
              <Terminal className="text-accent-teal" size={26} />
              Technical Skills
            </h3>
            <ul className="space-y-4 pl-4 border-l border-white/10 ml-3">
              {resumeData.skills.map((skill, idx) => (
                <li key={idx} className="relative pl-6 before:absolute before:left-[-5px] before:top-2.5 before:w-2.5 before:h-2.5 before:bg-accent-teal before:rounded-full before:shadow-[0_0_10px_rgba(45,212,191,0.8)] text-[#9CA3AF]">
                  <strong className="block sm:inline text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-teal to-white mr-2">{skill.category}:</strong> 
                  <span className="leading-relaxed font-light text-[15px]">{skill.items}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects Section */}
          <motion.div variants={childVariants} className="mb-10">
            <h3 className="flex items-center gap-3 text-2xl font-syne font-bold text-white mb-6">
              <Briefcase className="text-accent-pink" size={26} />
              Projects
            </h3>
            <div className="space-y-8 pl-4 border-l border-white/10 ml-3">
              {resumeData.projects.map((proj, idx) => (
                <div key={idx} className="relative pl-6 before:absolute before:left-[-5px] before:top-2.5 before:w-2.5 before:h-2.5 before:bg-accent-pink before:rounded-full before:shadow-[0_0_10px_rgba(249,168,212,0.8)]">
                  <h4 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-pink to-white mb-2">{proj.title}</h4>
                  <ul className="list-disc pl-4 space-y-1.5 mb-3">
                    {proj.points.map((point, i) => (
                      <li key={i} className="text-[#9CA3AF] text-[15px] font-light leading-relaxed">{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs font-semibold px-3 py-1 bg-white/5 border border-accent-pink/20 text-accent-pink rounded-md shadow-[0_0_10px_rgba(249,168,212,0.1)]">
                      Tech: {proj.tech}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={childVariants} className="mb-12">
            <h3 className="flex items-center gap-3 text-2xl font-syne font-bold text-white mb-6">
              <Award className="text-accent-lavender" size={26} />
              Achievements
            </h3>
            <ul className="space-y-5 pl-4 border-l border-white/10 ml-3">
              {resumeData.achievements.map((ach, idx) => (
                <li key={idx} className="relative pl-6 before:absolute before:left-[-5px] before:top-2.5 before:w-2.5 before:h-2.5 before:bg-accent-lavender before:rounded-full before:shadow-[0_0_10px_rgba(167,139,250,0.8)] text-[#9CA3AF] leading-relaxed text-[15px] font-light">
                  <strong className="block text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-lavender to-white mb-1">{ach.highlight}</strong>
                  {ach.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Download Button */}
          <motion.div variants={childVariants} className="flex justify-center pt-8 border-t border-white/10">
            <a 
              href="/resume/portfolio.pdf" 
              download="Harleen_Kaur_Resume.pdf"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-accent-lavender to-accent-teal text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(167,139,250,0.5),_0_0_30px_rgba(45,212,191,0.5)] transition-all duration-300 flex items-center gap-3 overflow-hidden transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <Download size={20} className="group-hover:-translate-y-1 group-hover:glow-text-lavender transition-transform duration-300" />
              Download Resume
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
