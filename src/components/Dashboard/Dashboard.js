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
                            <h6>Last leave requests</h6>
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
                                                    <img src="/images/ghazal.jpeg"
                                                         className="avatar avatar-sm me-3" alt="user1" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Ghazal Belhedi</h6>
                                                    <p className="text-xs text-secondary mb-0">gbelhedi@horizon.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">DAF</p>
                                            <p className="text-xs text-secondary mb-0">Product</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-success">Approved</span>
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
                                                    <img src="/images/mazen.jpg"
                                                         className="avatar avatar-sm me-3" alt="user2" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Mazen Afi</h6>
                                                    <p className="text-xs text-secondary mb-0">m.affi@horizon.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">Software Developer</p>
                                            <p className="text-xs text-secondary mb-0">R&D</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-secondary">Pending</span>
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
                                                    <img src="/images/rabie.jpg"
                                                         className="avatar avatar-sm me-3" alt="user3" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Rabie Hamdi</h6>
                                                    <p className="text-xs text-secondary mb-0">rhamdi@horizon.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">Executive</p>
                                            <p className="text-xs text-secondary mb-0">Product</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-success">Approved</span>
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
                                                    <img src="/images/rafaa.jpg"
                                                         className="avatar avatar-sm me-3" alt="user4" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Rafaa Belhedi</h6>
                                                    <p className="text-xs text-secondary mb-0">rbelhedi@horizon.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">HR Coordinator</p>
                                            <p className="text-xs text-secondary mb-0">HR</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-success">Approved</span>
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
                                                    <img src="/images/tayssir.jpg"
                                                         className="avatar avatar-sm me-3" alt="user5" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Tayssir Affi</h6>
                                                    <p className="text-xs text-secondary mb-0">taffy@horizon.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">Manager</p>
                                            <p className="text-xs text-secondary mb-0">Executive</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-secondary">Pending</span>
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
                                                    <img src="/images/img.png"
                                                         className="avatar avatar-sm me-3" alt="user6" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Mouadh Mkadmi</h6>
                                                    <p className="text-xs text-secondary mb-0">mmkadmi@horizon.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">UX Designer</p>
                                            <p className="text-xs text-secondary mb-0">R&D</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-secondary">Pending</span>
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
                            <h6>Last job offers</h6>
                            <p className="text-sm">
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                <span className="font-weight-bold">5</span> this month
                            </p>
                        </div>
                        <div className="card-body p-3">
                            <div className="timeline timeline-one-side">
                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-bell-55 text-success text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">UI/UXDesigner</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">13 NOV 11 AM</p>
                                    </div>
                                </div>
                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-html5 text-danger text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">C# Game Developer</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">12 NOV 4:54 PM</p>
                                    </div>
                                </div>
                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-cart text-info text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">Sales Assistant</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">11 NOV 2:20 PM</p>
                                    </div>
                                </div>
                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-credit-card text-warning text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">Client Support Assistant</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">10 NOV 9:34 AM</p>
                                    </div>
                                </div>
                                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-key-25 text-primary text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">Frontend Developer</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">2 NOV 11 AM</p>
                                    </div>
                                </div>
                                <div className="timeline-block">
                  <span className="timeline-step">
                    <i className="ni ni-money-coins text-dark text-gradient"></i>
                  </span>
                                    <div className="timeline-content">
                                        <h6 className="text-dark text-sm font-weight-bold mb-0">Flutter Developer</h6>
                                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">1 Sep 7:20 PM</p>
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