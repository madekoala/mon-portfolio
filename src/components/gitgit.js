"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import GithubStats from "../components/gitgit.js";


export default function About() {
  return (
    <>
      <Head>
        <title>À Propos | Mon Portfolio</title>
        <meta
          name="description"
          content="Découvrez mon profil et mes statistiques GitHub."
        />
      </Head>

      <div className={styles.about}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 À Propos de Moi
        </motion.h1>

        {/* Ajout des stats GitHub ici */}
        <div className="mt-10">
          <GithubStats token={process.env.NEXT_PUBLIC_GITHUB_TOKEN} />
        </div>
      </div>
    </>
  );
}
