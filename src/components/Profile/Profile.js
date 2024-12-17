import React from "react";
import Layout from "../Layout/Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserEdit} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import './profile.css';

const Profile = () => {
    return (
        <Layout title={"Profile"}>
            <div className="container-fluid">
                <div className="page-header min-height-300 border-radius-xl mt-4 profile-header">
                    <span className="mask bg-gradient-primary opacity-6"></span>
                </div>
                <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
                    <div className="row gx-4">
                        <div className="col-auto">
                            <div className="avatar avatar-xl position-relative">
                                <img src="/images/rafaa.jpg" alt="profile_image"
                                     className="w-100 border-radius-lg shadow-sm" />
                            </div>
                        </div>
                        <div className="col-auto my-auto">
                            <div className="h-100">
                                <h5 className="mb-1">
                                    Belhedi Rafaa
                                </h5>
                                <p className="mb-0 font-weight-bold text-sm">
                                    Software Engineer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-12 col-xl-4">
                        <div className="card h-100">
                            <div className="card-header pb-0 p-3">
                                <div className="row">
                                    <div className="col-md-8 d-flex align-items-center">
                                        <h6 className="mb-0">Profile Information</h6>
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <Link to={"/positions"}>
                                            <FontAwesomeIcon icon={faUserEdit}  style={{ cursor: 'pointer'}} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <p className="text-sm">
                                    Hi I'm Rafaa, Am an Horizon warrior !
                                </p>
                                <hr className="horizontal gray-light my-4" />
                                <ul className="list-group">
                                    <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong
                                        className="text-dark">Full Name:</strong> &nbsp; Rafaa Belhedi
                                    </li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                        className="text-dark">Mobile:</strong> &nbsp; (+216) 41 056 519
                                    </li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                        className="text-dark">Email:</strong> &nbsp; rbelhedi@horizon.com
                                    </li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                        className="text-dark">Location:</strong> &nbsp; Sidi Bouzid, Tunisia
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="card h-100">
                            <div className="card-header pb-0 p-3">
                                <div className="row">
                                    <div className="col-md-8 d-flex align-items-center">
                                        <h6 className="mb-0">Additional Information</h6>
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <Link to={"/positions"}>
                                            <FontAwesomeIcon icon={faUserEdit}  style={{ cursor: 'pointer'}} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <ul className="list-group">
                                    <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong
                                        className="text-dark">Cin:</strong> &nbsp; 1428598
                                    </li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                        className="text-dark">Date of birth:</strong> &nbsp; 15 Apr, 1994
                                    </li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                        className="text-dark">Gender:</strong> &nbsp; Male
                                    </li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                        className="text-dark">Marital status:</strong> &nbsp; Single
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="card h-100">
                            <div className="card-header pb-0 p-3">
                                <div className="row">
                                    <div className="col-md-8 d-flex align-items-center">
                                        <h6 className="mb-0">Employment Information</h6>
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <Link to={"/positions"}>
                                            <FontAwesomeIcon icon={faUserEdit}  style={{ cursor: 'pointer'}} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <ul className="list-group">
                                    <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong
                                        className="text-dark">Contract:</strong> &nbsp; CDI
                                    </li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                        className="text-dark">Employment Type:</strong> &nbsp; Full-Time
                                    </li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                        className="text-dark">Team:</strong> &nbsp; Product Team
                                    </li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                        className="text-dark">Position:</strong> &nbsp; Software Engineer
                                    </li>
                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                        className="text-dark">Joining date:</strong> &nbsp; 01 Nov, 2024
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;