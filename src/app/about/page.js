"use client"; // Obligatoire pour Next.js App Router

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGlobe, FaTools } from "react-icons/fa";
import GithubStats from "../../components/gitgit"; // Assure-toi que le chemin est correct
import { SiSass, SiRedux, SiVite } from "react-icons/si";
import styles from "./about.module.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "React", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "QGIS", icon: <FaGlobe /> },
];

export default function About() {
  return (
    <>
      <Head>
        <title>À Propos | Mon Portfolio</title>
        <meta
          name="description"
          content="Découvrez mon double profil : développeur front-end et archéologue numérique."
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

        <div className={styles.container}>
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src="/logoJC-2.png"
              alt="Photo de profil"
              width={200}
              height={200}
              className={styles.profileImage}
            />
          </motion.div>

          <motion.div
            className={styles.textContainer}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p>
              Je suis un développeur front-end maîtrisant{" "}
              <strong>HTML, CSS, Sass, React (Vite / Redux)</strong> et un
              archéologue passionné qui développe sur{" "}
              <strong>QGIS des modèles 3D de cartes</strong>. Mon objectif est
              de fusionner technologie et histoire pour créer des expériences
              numériques innovantes et immersives.
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.experience}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2>🚀 Expériences Clés</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <FaTools className="text-4xl text-gray-800" />
              <h3>Développement Front-end</h3>
              <p>
                Création d'interfaces modernes et responsives avec HTML, CSS,
                Sass, React, Vite et Redux.
              </p>
            </div>
            <div className={styles.card}>
              <FaGlobe className="text-4xl text-gray-800" />
              <h3>Modélisation 3D sur QGIS</h3>
              <p>
                Conception et développement de modèles 3D de cartes pour
                explorer et reconstituer l'histoire.
              </p>
            </div>
            <div className={styles.card}>
              <FaTools className="text-4xl text-gray-800" />
              <h3>Intégration & Performance</h3>
              <p>
                Optimisation des expériences utilisateur grâce à une intégration
                soignée et des performances robustes.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.skills}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2>🔧 Compétences</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => {
              let iconVariant = {
                hover: { scale: 1.1, transition: { duration: 0.3 } },
              };

              if (skill.name === "HTML") {
                iconVariant = {
                  hover: {
                    scale: 1.1,
                    color: "#E34F26",
                    transition: { duration: 0.5 },
                  },
                };
              } else if (skill.name === "CSS") {
                iconVariant = {
                  hover: {
                    scale: 1.1,
                    color: "#1572B6",
                    transition: { duration: 0.5 },
                  },
                };
              } else if (skill.name === "Sass") {
                iconVariant = {
                  hover: {
                    scale: 1.1,
                    color: "#CC6699",
                    transition: { duration: 0.5 },
                  },
                };
              } else if (skill.name === "React") {
                iconVariant = {
                  hover: {
                    rotate: 360,
                    color: "#61DAFB",
                    transition: { duration: 0.5 },
                  },
                };
              } else if (skill.name === "Redux") {
                iconVariant = {
                  hover: {
                    scale: 1.5,
                    rotate: 360,
                    color: "#764ABC",
                    transition: { duration: 0.5 },
                  },
                };
              } else if (skill.name === "Vite") {
                iconVariant = {
                  hover: {
                    scale: 1.1,
                    color: "#646CFF",
                    transition: { duration: 0.5 },
                  },
                };
              } else if (skill.name === "QGIS") {
                iconVariant = {
                  hover: {
                    scale: 1.5,
                    color: "#238823",
                    transition: { duration: 0.5 },
                  },
                };
              }
              return (
                <motion.div
                  key={index}
                  className={styles.skill}
                  whileHover="hover"
                >
                  <motion.div className="text-3xl" variants={iconVariant}>
                    {skill.icon}
                  </motion.div>
                  <p>{skill.name}</p>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
        {/* Intégration du composant GitHubStats */}
        <div className="mt-10">
          <GithubStats token={process.env.NEXT_PUBLIC_GITHUB_TOKEN} />
        </div>
      </div>
    </>
  );
}
