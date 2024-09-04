import React from "react";
import { faUsers, faBuilding, faUserGroup, faBriefcase, faPersonWalkingLuggage, faFileCirclePlus, faUserTie, faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";

const AddEmployee = () => {
    return (
        <div>
            <Sidebar
                employeesIcon={faUsers}
                departmentIcon={faBuilding}
                teamsIcon={faUserGroup}
                positionsIcon={faBriefcase}
                leaveRequestsIcon={faPersonWalkingLuggage}
                documentRequest={faFileCirclePlus}
                jobOffersIcon={faUserTie}
                dashboardIcon={faHouse}

            />
            <div className={"main-content position-relative max-height-vh-100 h-500 border-radius-lg"}>
            <Header title={"Employees management"} />
            <div className={"container-fluid py-4"}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="d-flex align-items-center">
                                <p className="mb-0">Add new employee</p>
                                <button className="btn btn-dark btn-sm ms-auto">Save</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="text-uppercase text-sm">Employee Information</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="first_name" className="form-control-label">First name</label>
                                        <input id={"first_name"} className="form-control" type={"text"} placeholder={"Please type the first name"} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="last_name" className="form-control-label">First name</label>
                                        <input id={"last_name"} className="form-control" type={"text"} placeholder={"Please type the last name"} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="username" className="form-control-label">Username</label>
                                        <input id={"username"} className="form-control" type={"text"} placeholder={"Please type the username"} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-control-label">Password</label>
                                        <input id={"password"} className="form-control" type={"password"} placeholder={"Please type the password"} />
                                    </div>
                                </div>
                            </div>
                            <hr className="horizontal dark" />
                                <p className="text-uppercase text-sm">Contact Information</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="personal_email" className="form-control-label">Personal email</label>
                                            <input id={"personal_email"} className="form-control" type={"text"} placeholder={"Please type the personal email"} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="professional_email" className="form-control-label">Personal email</label>
                                            <input id={"professional_email"} className="form-control" type={"text"} placeholder={"Please type the professional email"} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="personal_phone" className="form-control-label">Personal phone</label>
                                            <input id={"personal_phone"} className="form-control" type={"text"} placeholder={"Please type the personal phone"} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="address" className="form-control-label">Address</label>
                                            <input id={"address"} className="form-control" type={"text"} placeholder={"Please type the address"} />
                                        </div>
                                    </div>
                                </div>
                                <hr className="horizontal dark" />
                                    <p className="text-uppercase text-sm">Additional information</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="cin" className="form-control-label">Cin</label>
                                                <input id={"cin"} className="form-control" type={"text"} placeholder={"Please type the cin"} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="cin" className="form-control-label">Date of birth</label>
                                                <input id={"cin"} className="form-control" type={"date"} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="gender" className="form-control-label">Gender</label>
                                                <select id={"gender"} className="form-control">
                                                    <option value="">Select gender</option>
                                                    <option value="M">Male</option>
                                                    <option value="F">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="marital_status" className="form-control-label">Marital status</label>
                                                <select id={"marital_status"} className="form-control">
                                                    <option value="">Select marital status</option>
                                                    <option value="S">Single</option>
                                                    <option value="M">Married</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="profile_image" className="form-control-label">Profile image</label>
                                                <input id={"profile_image"} className="form-control" type={"file"} />
                                            </div>
                                        </div>
                                    </div>
                            <hr className="horizontal dark" />
                            <p className="text-uppercase text-sm">Employment information</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="contract_type" className="form-control-label">Contract type</label>
                                        <select id={"contract_type"} className="form-control">
                                            <option value="CDI">CDI</option>
                                            <option value="CDD">CDD</option>
                                            <option value="CIVP">CIVP</option>
                                            <option value="Intern">Intern</option>
                                            <option value="Karama">Karama</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="employment_type" className="form-control-label">Employment type</label>
                                        <select id={"employment_type"} className="form-control">
                                            <option value="">Select a type</option>
                                            <option value="CDI">Full-Time</option>
                                            <option value="CDD">Part-Time</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="joining_date" className="form-control-label">Joining date</label>
                                        <input type={"date"} id={"joining_date"} className={"form-control"} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="probation_period" className="form-control-label">Probation period</label>
                                        <input type={"number"} id={"probation_period"} className={"form-control"} placeholder={"Please type the probation period in days"}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="salary" className="form-control-label">Salary</label>
                                        <input type={"number"} id={"salary"} className={"form-control"} placeholder={"Please type the salary"}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="position" className="form-control-label">Position</label>
                                        <select id={"position"} className={"form-control"}>
                                            <option value="Developer">Select a position</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Designer">Designer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="team" className="form-control-label">Team</label>
                                        <select id={"team"} className={"form-control"}>
                                            <option value="">Select a team</option>
                                            <option value="IT">IT</option>
                                            <option value="HR">HR</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="cnss_registration_number" className="form-control-label">CNSS registration number</label>
                                        <input id={"cnss_registration_number"} className={"form-control"} type="text" placeholder={"Please type the registration number"}/>
                                    </div>
                                </div>
                            </div>
                            <hr className="horizontal dark" />
                            <p className="text-uppercase text-sm">Bank account information</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="holder_name" className="form-control-label">Holder name</label>
                                        <input id={"holder_name"} className={"form-control"} type="text" placeholder={"Please type the holder name"}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="bank_name" className="form-control-label">Bank name</label>
                                        <input id={"bank_name"} className={"form-control"} type="text" placeholder={"Please type the bank name"}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account_number" className="form-control-label">Account number</label>
                                        <input id={"account_number"} className={"form-control"} type="number" placeholder={"Please type the account number"}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="rib" className="form-control-label">RIB</label>
                                        <input id={"rib"} className={"form-control"} type="number" placeholder={"Please type the RIB"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default AddEmployee;