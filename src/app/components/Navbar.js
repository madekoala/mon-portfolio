"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Mon PORTFOLIO</div>

      <ul className={styles.navbarLinks}>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/projects">Projets</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>

        <li>
          <Link href="/about">À propos</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
