"use client";

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/footer.module.css";

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <p>© {year || "Chargement..."} Mon Portfolio. Tous droits réservés.</p>

      <ul>
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <ul className={styles.footerLinks}>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/projects">Projets</Link>
        </li>
        <li>
          <Link href="/about">À propos</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
