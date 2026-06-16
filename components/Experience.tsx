"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Analytics Intern",
    company: "Google Cloud",
    duration: "2026",
    description:
      "Built ETL/ELT pipelines, KPI dashboards and large-scale cloud data workflows.",
  },
  {
    role: "AI/ML Intern",
    company: "Google for Developers",
    duration: "2025",
    description:
      "Developed Machine Learning models, performed EDA and optimized prediction performance.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="absolute right-0 bottom-20 w-80 h-80 bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-6xl font-bold mb-24"
        >
          Work <span className="text-cyan-400">Experience</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Timeline */}
          <div className="relative">

            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="absolute left-3 top-0 w-1 bg-cyan-500 rounded-full"
            />

            <div className="space-y-14">

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{
                    opacity: 0,
                    x: -80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.25,
                    duration: 0.8,
                  }}
                  className="relative pl-14"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.25 + 0.2,
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="absolute left-0 top-3 w-7 h-7 bg-cyan-400 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.9)]"
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      boxShadow:
                        "0 0 30px rgba(34,211,238,0.2)",
                    }}
                    className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300"
                  >
                    <span className="text-cyan-400 text-sm font-semibold">
                      {exp.duration}
                    </span>

                    <h3 className="text-2xl font-bold mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-cyan-300 mt-1">
                      {exp.company}
                    </p>

                    <p className="text-gray-400 mt-4 leading-8">
                      {exp.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Character */}
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
                  src="/experience-character.png"
                  alt="Experience Character"
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