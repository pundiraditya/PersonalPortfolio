"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certs = [
  {
    title: "Google AI & ML",
    link: "https://mega.nz/file/tvZV0RBT#4gLidaGUiPUM820Udbm8_GF9c2nTKieUy6Ym94EBQEo",
  },
  {
    title: "Google Cloud Data Analytics",
    link: "https://mega.nz/file/12QlVJhS#VB-ZipKwR5m7zlYS5tv0M1aMrbB9ulcFSY7seXhdzGk",
  },
  {
    title: "AWS Machine Learning",
    link: "https://mega.nz/file/Bq42yboK#Rdc7pLqr10LmPN1NFBaPWXC2g-YVvPXqKgM_Eqv5TQE",
  },
  {
    title: "Cisco Networking Basics",
    link: "https://mega.nz/file/12QlVJhS#VB-ZipKwR5m7zlYS5tv0M1aMrbB9ulcFSY7seXhdzGk",
  },
  {
    title: "Blue Prism Automation",
    link: "https://mega.nz/file/R35lhKSJ#bbtFQ47xcl5koWc9HtVtBrqbzwDP8EaySzNKQzGESSA",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-14"
            >
              My{" "}
              <span className="text-cyan-400">
                Certifications
              </span>
            </motion.h2>

            <div className="grid gap-5">
              {certs.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                  }}
                  whileHover={{
                    scale: 1.03,
                    x: 10,
                    boxShadow:
                      "0 0 25px rgba(34,211,238,0.2)",
                  }}
                  className="block bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-cyan-400" />

                      <p className="text-lg text-gray-200">
                        {item.title}
                      </p>
                    </div>

                    <span className="text-cyan-400 text-sm">
                      View →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
            
            </motion.div>
          </motion.div>

          {/* Character Section */}
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
                rotate: -1,
                y: -5,
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
                  src="/certificate-character.png"
                  alt="Certificate Character"
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