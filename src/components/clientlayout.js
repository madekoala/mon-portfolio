"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function ClientLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialiser le dark mode avec une valeur par défaut sûre
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    // Vérifier les préférences système une fois monté
    const preferslight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setLightMode(preferslight);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.body.classList.toggle('light', lightMode);
    }
  }, [lightMode, mounted]);

  // Rendu initial sans animations
  if (!mounted) {
    return (
      <>
        <header className="header">
          <div className="logo">
            <Link href="/">Mon Portfolio</Link>
          </div>
        </header>
        <main>{children}</main>
      </>
    );
  }

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link href="/">Mon Portfolio</Link>
        </div>

        <div className="settings">
          <button
            className="dark-mode-toggle"
            onClick={() => setLightMode(prev => !prev)      }
            aria-label={lightMode ? "Mode clair" : "Mode sombre"}
          >
            {lightMode ? "🌙" : "☀️"}
          </button>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className="bar top"></span>
            <span className="bar middle"></span>
            <span className="bar bottom"></span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {menuOpen && (
            <motion.nav
              key="mobile-menu"
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
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <main>{children}</main>
    </>
  );
}