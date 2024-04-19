import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root'); 

export default function ImageModal({ onClose, selectedImage }) {
  const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    content: {
      padding: '0px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    },
  };
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true} 
      shouldCloseOnEsc={true}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={css.modalContent}>
        <img src={selectedImage} alt="Large Image"/>
      </div>
    </Modal>
  );
}
