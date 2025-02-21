"use client";

import projectsData from "../../../Backend/Data/projectsdata";
import { motion } from "framer-motion";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes Projets
      </motion.h1>

      {/* Section Projets OpenClassrooms */}
      <section className="projects-section">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Projets OpenClassrooms
        </motion.h2>
        <div className="projects-grid">
          {projectsData.openclassroomsProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card project-card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* 📌 Ajout d’un conteneur pour bien centrer les boutons */}
                <div className="project-buttons">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-button"
                  >
                    Voir plus
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Projets Personnels */}
      <section className="projects-section">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Projets Personnels
        </motion.h2>
        <div className="projects-grid">
          {projectsData.personal.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card project-card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* 📌 Ajout d’un conteneur pour bien centrer les boutons */}
                <div className="project-buttons">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-button"
                  >
                    Voir plus
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
