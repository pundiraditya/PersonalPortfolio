"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-black text-white flex items-center overflow-hidden"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-80 h-80 bg-cyan-500 blur-[150px] rounded-full"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 blur-[150px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{
              scale: 1.05,
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-6"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Open To Opportunities
          </motion.div>

          {/* Intro */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-cyan-400 text-xl mb-2"
          >
            Hello, I'm
          </motion.h2>

          {/* Name */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="text-6xl md:text-8xl font-black mb-4"
          >
            Aditya
            <span className="text-cyan-400">.</span>
          </motion.h1>

          {/* Role */}
          <motion.h3
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            AI Engineer • Data Engineer • ML Enthusiast
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
            }}
            className="text-gray-400 leading-9 text-lg max-w-xl mb-10"
          >
            Building scalable data pipelines, intelligent AI solutions
            and machine learning systems that transform data into
            impactful business decisions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
            }}
            className="flex flex-wrap gap-5"
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/30"
            >
              View Projects
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="px-8 py-4 rounded-full border border-cyan-500 text-cyan-400"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[130px] rounded-full"
          />

          <motion.div
            initial={{
              opacity: 0,
              x: 120,
              scale: 0.8,
              rotate: 8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileHover={{
              scale: 1.03,
              y: -8,
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
                src="/hero-character.png"
                alt="Aditya"
                width={650}
                height={650}
                priority
                className="drop-shadow-[0_0_80px_rgba(34,211,238,0.35)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </motion.section>
  );
}