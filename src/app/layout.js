"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../components/footer";
import "../../styles/global.css";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <html lang={language}>
      <body>
        <header className="header">
          <div className="logo">
            <Link href="/">Mon Portfolio</Link>
          </div>

          <div className="settings">
            <select
              className="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="fr">🇫🇷 FR</option>
              <option value="en">🇬🇧 EN</option>
            </select>

            <button
              className="dark-mode-toggle"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="bar top"></span>
              <span className="bar middle"></span>
              <span className="bar bottom"></span>
            </button>
          </div>

          {/* Menu mobile avec animation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="mobile-menu"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                <ul>
                  <li>
                    <Link href="/about" onClick={() => setMenuOpen(false)}>
                      À propos
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" onClick={() => setMenuOpen(false)}>
                      Projets
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
