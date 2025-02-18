"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GithubLanguages() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchLanguages() {
      const res = await fetch("/api/github/languages");
      const data = await res.json();
      setLanguages(data);
    }
    fetchLanguages();
  }, []);

  return (
    <div className="github-languages">
      <div className="progress-bar">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            className="lang-segment"
            style={{
              width: `${lang.percentage}%`,
              backgroundColor: getColor(lang.lang),
            }}
            initial={{ width: 0 }}
            animate={{ width: `${lang.percentage}%` }}
            transition={{ duration: 1.5, delay: index * 0.2 }}
          >
            <span className="lang-label">
              {lang.lang} ({lang.percentage}%)
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Fonction pour attribuer des couleurs aux langages
const getColor = (lang) => {
  const colors = {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    TypeScript: "#2b7489",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
    C: "#555555",
    "C++": "#f34b7d",
    Go: "#00ADD8",
    Rust: "#dea584",
  };
  return colors[lang] || "#ccc";
};
