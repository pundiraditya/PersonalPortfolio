"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { number: "2+", label: "Internships" },
  { number: "10+", label: "Projects" },
  { number: "5+", label: "Certifications" },
  { number: "AI + Data", label: "Specialization" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-6xl font-bold mb-20"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
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
                x: -120,
                scale: 0.85,
                rotate: -8,
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
                rotate: 1,
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
                  src="/about-character.png"
                  alt="About Character"
                  width={550}
                  height={550}
                  priority
                  className="drop-shadow-[0_0_70px_rgba(34,211,238,0.35)]"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="text-gray-300 text-lg md:text-xl leading-10 mb-12"
            >
              I am{" "}
              <span className="text-cyan-400 font-semibold">
                Aditya Pundir
              </span>
              , a Computer Science student specializing in Artificial
              Intelligence and Machine Learning. Passionate about AI,
              Data Engineering, Cloud Technologies, and scalable systems.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
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
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.05,
                    boxShadow:
                      "0 0 35px rgba(34,211,238,0.25)",
                  }}
                  className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 cursor-pointer transition-all duration-300"
                >
                  <h3 className="text-cyan-400 text-3xl font-bold">
                    {item.number}
                  </h3>

                  <p className="text-gray-400 mt-3">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}