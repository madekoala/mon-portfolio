"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../../src/components/modal";
import styles from "./contact.module.css";

export default function Contact() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setModalMessage(result.message);
        e.target.reset();
      } else {
        setModalMessage(result.error || "Erreur inconnue.");
      }
    } catch (error) {
      setModalMessage("Une erreur est survenue. Veuillez réessayer.");
    }

    setLoading(false);
    setModalVisible(true);
  };

  return (
    <div className={styles.contact}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contactez-moi
      </motion.h1>
      <motion.p initial={{ opacity: 0 }}>
        Pour toute question ou collaboration, envoyez-moi un message.
      </motion.p>
      <motion.form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="Votre nom"
          required
          className={styles.input}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Votre email"
          required
          className={styles.input}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Votre message..."
          required
          className={styles.textarea}
        />
        <motion.button
          type="submit"
          className={styles.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </motion.button>
      </motion.form>

      <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        message={modalMessage}
      />
    </div>
  );
}
