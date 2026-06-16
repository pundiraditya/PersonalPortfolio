"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    text: "adityapundirdev556@gmail.com",
    link: "mailto:adityapundirdev556@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    text: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/YOUR-LINKEDIN",
  },
  {
    icon: <FaGithub />,
    text: "GitHub Profile",
    link: "https://github.com/YOUR-GITHUB",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-6xl font-bold mb-24"
        >
          Let's <span className="text-cyan-400">Connect</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Character Section */}
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
                  src="/contact-character.png"
                  alt="Contact Character"
                  width={550}
                  height={550}
                  priority
                  className="drop-shadow-[0_0_70px_rgba(34,211,238,0.35)]"
                />
              </motion.div>
            </motion.div>

          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-gray-400 text-lg leading-8 mb-12">
              Open to AI Engineering, Data Engineering,
              Machine Learning and Software Development
              opportunities. Let's build something amazing together.
            </p>

            <div className="space-y-6">

              {contacts.map((item, index) => (
                <motion.a
                  key={item.text}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  whileHover={{
                    scale: 1.04,
                    y: -6,
                    boxShadow:
                      "0 0 30px rgba(34,211,238,0.2)",
                  }}
                  className="flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="text-cyan-400 text-2xl">
                    {item.icon}
                  </div>

                  <span className="text-gray-200">
                    {item.text}
                  </span>
                </motion.a>
              ))}

              {/* Location */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.04,
                  y: -6,
                  boxShadow:
                    "0 0 30px rgba(34,211,238,0.2)",
                }}
                className="flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-400 transition-all duration-300"
              >
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />

                <span className="text-gray-200">
                  Noida, Uttar Pradesh
                </span>
              </motion.div>
            </div>

            {/* Buttons */}
<div className="flex flex-wrap gap-4 mt-10">

  <motion.a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=adityapundirdev556@gmail.com&su=Hiring%20Opportunity"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: 0.95,
    }}
    className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/30"
  >
    Hire Me →
  </motion.a>

  <motion.a
    href="/resume.pdf"
    download
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: 0.95,
    }}
    className="px-8 py-4 rounded-full border border-cyan-500 text-cyan-400 font-semibold"
  >
    Download Resume
  </motion.a>

</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}