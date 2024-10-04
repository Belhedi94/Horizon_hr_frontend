import React from 'react';
import Modal from 'react-modal';
import './confirm_delete_modal.css';
Modal.setAppElement('#root');

const ConfirmDeleteModal = ({ isOpen, onRequestClose, onConfirmDelete, item }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Confirm Deletion"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <h4 className="text-center">Are you sure?</h4>
            <p className={"center"}>Are you sure you want to delete this {item}?</p>
            <div className={"text-center m-2"}>
                <button className={"btn btn-danger"} style={{marginRight: '20px'}} onClick={onConfirmDelete}>Yes, Delete</button>
                <button className={"btn btn-light"} onClick={onRequestClose}>Cancel</button>
            </div>
        </Modal>
    );
};

export default ConfirmDeleteModal;
