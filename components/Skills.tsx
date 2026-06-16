"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "Python",
  "SQL",
  "Apache Kafka",
  "Databricks",
  "FastAPI",
  "Docker",
  "AWS S3",
  "Google Cloud",
  "Machine Learning",
  "TensorFlow",
  "LangChain",
  "Data Engineering",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[130px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
          }}
          className="text-center text-5xl md:text-6xl font-bold mb-24"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* Left Skills */}
          <div className="space-y-5">
            {skills.slice(0, 6).map((skill, index) => (
              <motion.div
                key={skill}
                initial={{
                  opacity: 0,
                  x: -60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                  boxShadow:
                    "0 0 30px rgba(34,211,238,0.2)",
                }}
                className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 p-5 rounded-2xl hover:border-cyan-400 transition-all duration-300 cursor-pointer"
              >
                <span className="text-gray-200 font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Character */}
          <div className="relative flex justify-center">

            {/* Animated Glow */}
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
                y: 120,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/skill-character.png"
                  alt="Skills Character"
                  width={500}
                  height={500}
                  priority
                  className="drop-shadow-[0_0_70px_rgba(34,211,238,0.35)]"
                />
              </motion.div>
            </motion.div>

          </div>

          {/* Right Skills */}
          <div className="space-y-5">
            {skills.slice(6).map((skill, index) => (
              <motion.div
                key={skill}
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                  boxShadow:
                    "0 0 30px rgba(34,211,238,0.2)",
                }}
                className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 p-5 rounded-2xl hover:border-cyan-400 transition-all duration-300 cursor-pointer"
              >
                <span className="text-gray-200 font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}