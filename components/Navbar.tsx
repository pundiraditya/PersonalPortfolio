"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex justify-between items-center">

          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="text-3xl font-black cursor-pointer"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(34,211,238,0)",
                  "0 0 12px rgba(34,211,238,0.6)",
                  "0 0 0px rgba(34,211,238,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="text-white"
            >
              Aditya
            </motion.span>

            <span className="text-cyan-400">
              .dev
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="relative text-gray-300 hover:text-cyan-400 transition duration-300 group"
              >
                {link}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{
              scale: 1.08,
              y: -2,
              boxShadow:
                "0 0 25px rgba(34,211,238,0.5)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="hidden md:block px-5 py-2 rounded-full bg-cyan-500 text-black font-semibold"
          >
            Resume
          </motion.a>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                height: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                y: -20,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-5 pb-6">

                {links.map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    whileHover={{
                      x: 8,
                      color: "#22d3ee",
                    }}
                    className="text-gray-300"
                  >
                    {link}
                  </motion.a>
                ))}

                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="w-fit px-5 py-2 rounded-full bg-cyan-500 text-black font-semibold"
                >
                  Resume
                </motion.a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}