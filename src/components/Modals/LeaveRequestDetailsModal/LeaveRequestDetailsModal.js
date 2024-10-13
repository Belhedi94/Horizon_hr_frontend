import React from "react";
import Modal from "react-modal";
import '../ConfirmDeleteModal/confirm_delete_modal.css';
import {formatDateForInput} from "../../utils/dateUtils";
Modal.setAppElement('#root');

const LeaveRequestDetailsModal = ({isOpen, onRequestClose, leaveRequestData}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Confirm Deletion"
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
                                    {leaveRequestData?.user.firstName} {leaveRequestData?.user.lastName}
                                </li>
                                <hr className="horizontal gray-light" />
                                <li className=" p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">Type:</strong>&nbsp;
                                    {leaveRequestData?.type}
                                </li>
                                <hr className="horizontal gray-light" />
                                <li className="p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">Status:</strong>&nbsp;
                                    <span
                                        className={`badge badge-sm ${leaveRequestData?.status === 'Approved' ? 'bg-gradient-success' :
                                            leaveRequestData?.status === 'Pending' ? 'bg-gradient-secondary' :
                                                'bg-gradient-danger'}`}
                                    >
                                {leaveRequestData?.status}
                            </span>
                                </li>
                                <hr className="horizontal gray-light" />
                                <li className="p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">Start date:</strong>&nbsp;
                                    {formatDateForInput(leaveRequestData?.startDate)}
                                </li>
                                <hr className="horizontal gray-light" />
                                <li className="p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">End date:</strong>&nbsp;
                                    {formatDateForInput(leaveRequestData?.endDate ?? leaveRequestData?.startDate)}
                                </li>
                                <hr className="horizontal gray-light" />
                                <li className="p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">Submitted at:</strong>&nbsp;
                                    {formatDateForInput(leaveRequestData?.createdAt)}
                                </li>
                                <hr className="horizontal gray-light" />
                                <li className="p-1 list-group-item border-0  text-sm">
                                    <strong className="text-dark">Reason:</strong>&nbsp;
                                    {leaveRequestData?.reason}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default LeaveRequestDetailsModal;