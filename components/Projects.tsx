"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "DeepCrop",
    desc: "AI-powered Plant Disease Detection Platform achieving 95%+ accuracy using CNN models, image preprocessing and augmentation pipeline.",
    github: "https://github.com/pundiraditya/DeepCrop",
    demo: "https://deepcrop.vercel.app/",
  },
  {
    title: "InsureGuard",
    desc: "Insurance Fraud Detection System using ML, anomaly detection, ETL pipelines and FastAPI-based deployment.",
    github: "https://github.com/pundiraditya/InsureGuard",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-10 top-20 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="absolute right-10 bottom-20 w-80 h-80 bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-6xl font-bold mb-24"
        >
          Featured <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow:
                    "0 0 30px rgba(34,211,238,0.2)",
                }}
                className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300"
              >
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold"
                  >
                    Live Demo →
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-400 font-semibold"
                  >
                    GitHub
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side Character */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[420px] h-[420px] bg-cyan-500/20 blur-[120px] rounded-full"
            />

            <motion.div
              initial={{
                opacity: 0,
                x: 120,
                scale: 0.85,
                rotate: 8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
                rotate: -1,
              }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  scale: [1, 1.015, 1],
                  rotate: [0, 0.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/project-character.png"
                  alt="Projects Character"
                  width={550}
                  height={550}
                  priority
                  className="drop-shadow-[0_0_70px_rgba(34,211,238,0.35)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}