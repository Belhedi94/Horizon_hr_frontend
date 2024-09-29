import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faCircleCheck, faCircleXmark, faEye, faPen} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../Layout/Layout";
import {getAllLeaveRequests, updateLeaveRequest} from "../../../../api";

const LeaveRequestsList = () => {

    const [leaveRequests, setLeaveRequests] = useState([]);

    useEffect( () => {
        fetchLeaveRequests();
    }, []);

    const changeStatus = async (id, value) => {
        const data = {
            status: value
        };

        await updateLeaveRequest(id, data);
        fetchLeaveRequests();
    };

    const fetchLeaveRequests = async () => {
        const data = await getAllLeaveRequests();
        setLeaveRequests(data);
    };
    return (
        <Layout title={"Leave requests"}>
            <div className={"text-end"}>
                <Link to={"/requests/leaves/add"}>
                    <button className={"btn btn-dark"}>
                        <FontAwesomeIcon icon={faPlus} size={"lg"} style={{marginRight: '5px'}}/>Add leave request
                    </button>
                </Link>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <h6>Leave requests</h6>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employee</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Leave type</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Creation date</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {leaveRequests.map((leaveRequest => (
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src={"/images/default_employee_avatar.png"} className="avatar avatar-sm me-3" alt="user_image" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">{leaveRequest.user.firstName} {leaveRequest.user.lastName}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-xs font-weight-bold mb-0">{leaveRequest.type}</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">{leaveRequest.createdAt}</span>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className={`badge badge-sm ${leaveRequest.status === 'Approved' ? 'bg-gradient-success' :
                                                    leaveRequest.status === 'Rejected' ? 'bg-gradient-danger' : 'bg-gradient-secondary'
                                                }`}>{leaveRequest.status}</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <FontAwesomeIcon icon={faEye} title={"View details"} size={"lg"} style={{color: 'purple', marginRight: '5px', cursor: 'pointer'}}/>
                                                {leaveRequest.status === 'Draft' && (
                                                    <>
                                                        <FontAwesomeIcon icon={faCircleCheck} title={"Approve"} onClick={() => changeStatus(leaveRequest.id, "Approved")} size={"lg"} style={{marginRight: '5px', color: 'green', cursor: 'pointer'}}/>
                                                        <FontAwesomeIcon icon={faCircleXmark} title={"Reject"} onClick={() => changeStatus(leaveRequest.id, "Rejected")} size={"lg"} style={{marginRight: '5px', color: 'red', cursor: 'pointer'}}/>
                                                        <Link to={`/requests/leaves/edit/${leaveRequest.id}`}>
                                                            <FontAwesomeIcon icon={faPen} title={"Edit"}   style={{color: 'purple', cursor: 'pointer'}}/>
                                                        </Link>
                                                    </>
                                                )}

                                            </td>
                                        </tr>
                                    )))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LeaveRequestsList;