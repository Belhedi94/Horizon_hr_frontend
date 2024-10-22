import React, {useEffect, useState} from 'react';
import { faUsers, faBuilding, faUserGroup, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import StatisticsCard from "../StatisticsCard/StatisticsCard";
import Layout from "../Layout/Layout";
import {getAllLeaveRequests, getAllEmployees, getAllPositions, getAllDepartments,
    getAllTeams, getAllDocumentRequests} from "../../api";
import {toast} from "react-toastify";

const Dashboard = () =>  {
    const [leaveRequestsData, setLeaveRequestsData] = useState([]);
    const [employeesData, setEmployeesData] = useState([]);
    const [positionsData, setPositionsData] = useState([]);
    const [departmentsData, setDepartmentsData] = useState([]);
    const [teamsData, setTeamsData] = useState([]);

    const fetchData = async () => {
        try {
            const users = await getAllEmployees(0, 5, '');
            const positions = await getAllPositions(0, 5, '');
            const departments = await getAllDepartments(0, 5, '');
            const teams = await getAllTeams(0, 5, '');
            const leaveRequests = await getAllLeaveRequests(1, 5, '',
                false, true);
            setEmployeesData(users);
            setPositionsData(positions);
            setDepartmentsData(departments);
            setTeamsData(teams);
            setLeaveRequestsData(leaveRequests);
        } catch(error) {
            toast.error("Error when trying to fetch data");
        }
    };

    useEffect( () => {
        fetchData();
    }, []);

    return (
        <Layout title={"Dashboard"}>
            <div className="row">
                <StatisticsCard title={"Employees"} count={employeesData.totalItems} icon={faUserGroup}/>
                <StatisticsCard title={"Positions"} count={positionsData.totalItems} icon={faBriefcase}/>
                <StatisticsCard title={"Departments"} count={departmentsData.totalItems} icon={faBuilding}/>
                <StatisticsCard title={"Teams"} count={teamsData.totalItems} icon={faUsers}/>
            </div>
            <div className="row mt-4">
                <div className={"col-md-8"}>
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <h6>Authors table</h6>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                                        <th className="text-secondary opacity-7"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/team-2.jpg"
                                                         className="avatar avatar-sm me-3" alt="user1" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">John Michael</h6>
                                                    <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">Manager</p>
                                            <p className="text-xs text-secondary mb-0">Organization</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-success">Online</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                        </td>
                                        <td className="align-middle">
                                            <a href="" className="text-secondary font-weight-bold text-xs"
                                               data-toggle="tooltip" data-original-title="Edit user">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/team-3.jpg"
                                                         className="avatar avatar-sm me-3" alt="user2" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Alexa Liras</h6>
                                                    <p className="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">Programator</p>
                                            <p className="text-xs text-secondary mb-0">Developer</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-xs font-weight-bold">11/01/19</span>
                                        </td>
                                        <td className="align-middle">
                                            <a href="" className="text-secondary font-weight-bold text-xs"
                                               data-toggle="tooltip" data-original-title="Edit user">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/team-4.jpg"
                                                         className="avatar avatar-sm me-3" alt="user3" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Laurent Perrier</h6>
                                                    <p className="text-xs text-secondary mb-0">laurent@creative-tim.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">Executive</p>
                                            <p className="text-xs text-secondary mb-0">Projects</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-success">Online</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-xs font-weight-bold">19/09/17</span>
                                        </td>
                                        <td className="align-middle">
                                            <a href="" className="text-secondary font-weight-bold text-xs"
                                               data-toggle="tooltip" data-original-title="Edit user">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/team-3.jpg"
                                                         className="avatar avatar-sm me-3" alt="user4" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Michael Levi</h6>
                                                    <p className="text-xs text-secondary mb-0">michael@creative-tim.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">Programator</p>
                                            <p className="text-xs text-secondary mb-0">Developer</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-success">Online</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-xs font-weight-bold">24/12/08</span>
                                        </td>
                                        <td className="align-middle">
                                            <a href="" className="text-secondary font-weight-bold text-xs"
                                               data-toggle="tooltip" data-original-title="Edit user">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/team-2.jpg"
                                                         className="avatar avatar-sm me-3" alt="user5" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Richard Gran</h6>
                                                    <p className="text-xs text-secondary mb-0">richard@creative-tim.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">Manager</p>
                                            <p className="text-xs text-secondary mb-0">Executive</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-xs font-weight-bold">04/10/21</span>
                                        </td>
                                        <td className="align-middle">
                                            <a href="" className="text-secondary font-weight-bold text-xs"
                                               data-toggle="tooltip" data-original-title="Edit user">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/team-4.jpg"
                                                         className="avatar avatar-sm me-3" alt="user6" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                                    <p className="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">Programtor</p>
                                            <p className="text-xs text-secondary mb-0">Developer</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-xs font-weight-bold">14/09/20</span>
                                        </td>
                                        <td className="align-middle">
                                            <a href="" className="text-secondary font-weight-bold text-xs"
                                               data-toggle="tooltip" data-original-title="Edit user">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-header pb-0">
                            <h6>Orders overview</h6>
                            <p className="text-sm">
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                <span className="font-weight-bold">24%</span> this month
                            </p>
                        </div>
                        <div className="card-body p-3">
                            <div className="timeline timeline-one-side">
                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-bell-55 text-success text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                                    </div>
                                </div>
                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-html5 text-danger text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                                    </div>
                                </div>
                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-cart text-info text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for
                                            April</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                                    </div>
                                </div>
                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-credit-card text-warning text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order
                                            #4395133</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                                    </div>
                                </div>
                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-key-25 text-primary text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for
                                            development</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                                    </div>
                                </div>
                                <div className="timeline-block">
                  <span className="timeline-step">
                    <i className="ni ni-money-coins text-dark text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Dashboard;