"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CldImage } from 'next-cloudinary';
import { useState, useEffect } from "react";
import "../../styles/home.css";

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [showProjectCard, setShowProjectCard] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setShowProjectCard(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null; 
  }

  return (
    <div className="homepage">
      <AnimatePresence>    
        <motion.section 
          key="hero-section"
          className="hero-section"
        >
          <div className="hero-container">
            <div className="hero-left">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Jérémy Cresson
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Développeur Front-End & Futur Archéologue passionné.
              </motion.p>
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact">
                  <button className="contact-btn">Me Contacter</button>
                </Link>
                <a
                  href="https://github.com/madekoala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub
                </a>
              </motion.div>
            </div>
          </div>

          <motion.section 
            key="services-section"
            id="services" 
            className="services-section"
          >
            <div className="services-container">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Mes Services
              </motion.h2>
              <div className="services-cards">
                <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h3>Applications</h3>
                  <p>
                    Développe des sites vitrines, e-commerce, applications web,
                    mobile ou de bureau.
                  </p>
                </motion.div>
                <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3>Expérience utilisateur & Design</h3>
                  <p>Une expérience fluide et magnifique pour vos clients.</p>
                </motion.div>
                {/* <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h3>Accessibilité</h3>
                  <p>
                    Nous avons tous le droit d'explorer le web. HTML sémantique et
                    ARIA si pertinent.
                  </p>
                </motion.div> */}
              </div>
            </div>
          </motion.section>
        </motion.section>

        <motion.div
          key="scroll-down"
          className="scroll-down"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        >
          ↓ Scroll
        </motion.div>

        {/* Section À propos de moi */}
        <motion.section 
          key="about-section"
          id="about" 
          className="about-section"
        >
          <div className="about-container">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>À propos de moi</h2>
              <p>
                Je suis Jérémy, développeur front-end passionné et futur
                archéologue. Mon travail fusionne technologie moderne et
                exploration historique. Grâce à React, Next.js et d'autres outils
                modernes, je crée des expériences web dynamiques, tout en
                explorant le passé avec QGIS et Python.
              </p>
              <p>
                Mon objectif est d’allier innovation et patrimoine pour offrir des
                expériences numériques uniques.
              </p>
              <Link href="/about">
                <button className="card-button">En savoir plus</button>
              </Link>
            </motion.div>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CldImage
                src="/logoJC-2.png"
                alt="Portrait de Jérémy Cresson"
                width={300}
                height={300}
                className="profile-image"
              />
            </motion.div>
          </div>
        </motion.section>
        {/* Section Mes Projets */}
        <motion.section 
          key="projects-section"
          id="projects" 
          className="projects-section"
        >
          <div className="projects-container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mes Projets 👨🏽‍💻
            </motion.h2>

            {/* Projet principal mis en avant */}
            <motion.div
              key="featured-project"
              className="featured-project"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="project-home">
                <CldImage
                  src="/sitearcheo.webp"
                  alt="Projet Principal"
                  width={600}
                  height={350}
                  className="project-image"
                />
                <div className="project-details">
                  <h3>Grand Projet: Site Archéologique Interactif</h3>
                  <p>
                    Développement d'une plateforme immersive qui permet d'explorer
                    en 3D des sites archéologiques reconstitués. Technologies
                    utilisées : **React, Next.js, QGIS**.
                  </p>
                  <Link href="/projects">
                    <button className="card-button">Voir le projet</button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Liste des autres projets */}
            <div className="projects-list">
              <motion.div
                key="project-1"
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3>Projet 1</h3>
                <p>
                  Modélisation 3D d'un artefact historique avec Blender et QGIS.
                  /en cours
                </p>
                <Link href="https://github.com/madekoala">
                  <button className="card-button">En savoir plus</button>
                </Link>
              </motion.div>

              <motion.div
                key="project-2"
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3>Projet 2</h3>
                <p>
                  Développement d'un site sur l'univers de fromsoftware en
                  Next.js et TypeScript. /en cours
                </p>
                <Link href="https://github.com/madekoala">
                  <button className="card-button">En savoir plus</button>
                </Link>
              </motion.div>

              <motion.div
                key="project-3"
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3>Projet 3</h3>
                <p>
                  Application de gestion de fouilles archéologiques en Python. /en
                  cours
                </p>
                <Link href="https://github.com/madekoala">
                  <button className="card-button">En savoir plus</button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
