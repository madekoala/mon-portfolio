"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Modal from "../../src/components/modal";
import styles from "./contact.module.css";

export default function Contact() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_hvlxhm5",
        "template_8job15e",
        form,
        "K82RPN5lEADyuEZ9b"
      );
      setModalMessage("Votre message a bien été envoyé !");
      setModalVisible(true);
      form.reset();
    } catch (error) {
      setModalMessage("Une erreur est survenue. Veuillez réessayer.");
      setModalVisible(true);
    }
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
        >
          Envoyer
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
