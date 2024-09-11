import React, {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ErrorModal = ({isOpen, onClose, errorMessage}) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Error">
            <h2>Error</h2>
            <p>{errorMessage}</p>
            <button onClick={onClose}>Close</button>
        </Modal>
    );
}

export default ErrorModal;