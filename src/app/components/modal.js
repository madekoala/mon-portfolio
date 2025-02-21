import React from 'react';
import '../../styles/modal.module.css'; 

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modalOverlay">
            <div className="modalContainer">
                <div className="modalHeader">
                    <h2>Contactez-moi</h2>
                    <button className="closeButton" onClick={onClose}>×</button>
                </div>
                <div className="modalBody">
                    <p>Formulaire de contact ici...</p>
                    {/* Ajoutez votre formulaire ici */}
                </div>
                <div className="modalFooter">
                    <button className="modalButton" onClick={onClose}>Envoyer</button>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;