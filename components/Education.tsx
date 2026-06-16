"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
} from "lucide-react";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="max-w-7xl mx-auto px-6 lg:px-16 py-28 overflow-hidden"
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
      }}
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-semibold tracking-[3px] uppercase"
          >
            Academic Background
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="text-5xl lg:text-6xl font-bold mt-4 mb-10"
          >
            Education
          </motion.h2>

          <div className="space-y-8 relative">

            {/* Timeline */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-cyan-500/20"></div>

            {/* B.Tech */}
            <motion.div
              initial={{
                y: 60,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                duration: 0.8,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  "0 0 35px rgba(34,211,238,0.25)",
              }}
              className="relative pl-16 bg-[#141B34] border border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-400 transition-all"
            >
              <div className="absolute left-0 top-8 w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black">
                <GraduationCap size={20} />
              </div>

              <h3 className="text-2xl font-bold">
                B.Tech – Computer Science & AI
              </h3>

              <p className="text-cyan-400 mt-2">
                Galgotias College of Engineering & Technology
              </p>

              <p className="text-gray-400 mt-3">
                2022 – 2026 • CGPA: 8.0
              </p>
            </motion.div>

            {/* Class XII */}
            <motion.div
              initial={{
                y: 60,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  "0 0 35px rgba(34,211,238,0.25)",
              }}
              className="relative pl-16 bg-[#141B34] border border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-400 transition-all"
            >
              <div className="absolute left-0 top-8 w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black">
                <School size={20} />
              </div>

              <h3 className="text-xl font-bold">
                Class XII
              </h3>

              <p className="text-cyan-400 mt-2">
                USM Public School
              </p>

              <p className="text-gray-400 mt-3">
                Percentage: 80%
              </p>
            </motion.div>

            {/* Class X */}
            <motion.div
              initial={{
                y: 60,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  "0 0 35px rgba(34,211,238,0.25)",
              }}
              className="relative pl-16 bg-[#141B34] border border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-400 transition-all"
            >
              <div className="absolute left-0 top-8 w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black">
                <BookOpen size={20} />
              </div>

              <h3 className="text-xl font-bold">
                Class X
              </h3>

              <p className="text-cyan-400 mt-2">
                DAV Public School
              </p>

              <p className="text-gray-400 mt-3">
                Percentage: 90%
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center"
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
        >
          <div className="relative flex items-center justify-center">

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
              className="absolute w-[450px] h-[450px] bg-cyan-500/20 blur-[120px] rounded-full"
            />

            {/* Outer Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[450px] h-[450px] border border-cyan-500/10 rounded-full"
            />

            {/* Inner Ring */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[380px] h-[380px] border border-purple-500/10 rounded-full"
            />

            {/* Character */}
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
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              className="relative z-10"
            >
              <Image
                src="/education-character.png"
                alt="Education Character"
                width={500}
                height={650}
                priority
                className="drop-shadow-[0_0_70px_rgba(34,211,238,0.35)]"
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}