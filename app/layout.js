"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../src/components/footer";
import "../styles/global.css";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("fr");

  // Appliquer le dark mode
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
            {/* Sélecteur de langue */}
            <select
              className="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="fr">🇫🇷 FR</option>
              <option value="en">🇬🇧 EN</option>
            </select>

            {/* Bouton Dark Mode */}
            <button
              className="dark-mode-toggle"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            {/* Bouton du menu hamburger amélioré */}
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
                className="mobile-menu open"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
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
