"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./blog.module.css";

const articles = [
  {
    id: 1,
    title: "Comment coder avec QGIS",
    summary:
      "Un tuto pour débuter dans la modélisation 3D et l'analyse spatiale avec QGIS.",
    slug: "comment-coder-avec-qgis",
  },
  {
    id: 2,
    title: "React, Vite et Redux : la triforce",
    summary:
      "Découvrez comment ces outils modernes se combinent pour créer des interfaces ultra réactives.",
    slug: "react-vite-redux",
  },
  // Ajoute d'autres articles si besoin
];

export default function Blog() {
  return (
    <div className={styles.blogContainer}>
      <motion.h1
        className={styles.blogTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mon Blog
      </motion.h1>
      <div className={styles.articlesGrid}>
        {articles.map((article) => (
          <motion.div
            key={article.id}
            className={styles.articleCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: article.id * 0.2, duration: 0.6 }}
          >
            <h2 className={styles.articleTitle}>{article.title}</h2>
            <p className={styles.articleSummary}>{article.summary}</p>
            <Link href={`/blog/${article.slug}`} className={styles.readMore}>
              Lire la suite
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
