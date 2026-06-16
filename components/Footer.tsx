"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
      }}
      className="relative bg-[#050816] overflow-hidden border-t border-cyan-500/10"
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/10 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-12"
        />

        <div className="flex flex-col items-center gap-8">

          {/* Logo */}
          <motion.h3
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.08,
            }}
            className="text-3xl font-bold cursor-pointer"
          >
            Aditya
            <span className="text-cyan-400">
              .dev
            </span>
          </motion.h3>

          {/* Social Icons */}
          <div className="flex gap-8 text-2xl">

            <motion.a
              href="https://github.com/YOUR-GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -8,
                scale: 1.2,
                rotate: -5,
              }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -8,
                scale: 1.2,
                rotate: 5,
              }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="mailto:adityapundirdev556@gmail.com"
              whileHover={{
                y: -8,
                scale: 1.2,
              }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <FaEnvelope />
            </motion.a>

          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="text-gray-400 text-center"
          >
            © 2026 Aditya.dev • Crafted with Next.js,
            Tailwind CSS & Framer Motion
          </motion.p>

          {/* Animated Signature */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.03, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="text-cyan-400 text-sm tracking-wider"
          >
            Designed & Developed by Aditya Pundir
          </motion.div>

        </div>
      </div>
    </motion.footer>
  );
}