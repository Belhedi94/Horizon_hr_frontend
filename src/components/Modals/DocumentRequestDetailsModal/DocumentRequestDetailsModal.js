import React from "react";
import Modal from "react-modal";
import '../ConfirmDeleteModal/confirm_delete_modal.css';
import {formatDateForInput} from "../../utils/dateUtils";
Modal.setAppElement('#root');

const DocumentRequestDetailsModal = ({isOpen, onRequestClose, documentRequestData}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Document request details"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className="row">
                <div className="col-12">
                    <div className="card h-100">
                        <div className="card-header pb-0 p-1">
                        </div>
                        <div className="card-body p-1">
                            <ul className="list-group">
                                <li className="p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">Full Name:</strong>&nbsp;
                                    {documentRequestData?.user.firstName} {documentRequestData?.user.lastName}
                                </li>
                                <hr className="horizontal gray-light" />
                                <li className=" p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">Type:</strong>&nbsp;
                                    {documentRequestData?.type}
                                </li>
                                <hr className="horizontal gray-light" />
                                <li className="p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">Status:</strong>&nbsp;
                                    <span
                                        className={`badge badge-sm ${documentRequestData?.status === 'Approved' ? 'bg-gradient-success' :
                                            documentRequestData?.status === 'Pending' ? 'bg-gradient-secondary' :
                                                'bg-gradient-danger'}`}
                                    >
                                {documentRequestData?.status}
                            </span>
                                </li>
                                <hr className="horizontal gray-light" />
                                <li className="p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">Submission date:</strong>&nbsp;
                                    {formatDateForInput(documentRequestData?.createdAt)}
                                </li>
                                <hr className="horizontal gray-light" />
                                <li className="p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">Processing date:</strong>&nbsp;
                                    {documentRequestData?.processedAt ? formatDateForInput(documentRequestData?.processedAt) : 'N/A'}
                                </li>
                                <hr className="horizontal gray-light" />
                                <li className="p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">Description:</strong>&nbsp;
                                    {documentRequestData?.description}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default DocumentRequestDetailsModal;