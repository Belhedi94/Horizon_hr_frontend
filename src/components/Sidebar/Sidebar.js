import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import { useSideBar } from "../../contexts/SidebarContext";

const Sidebar = ({
                     employeesIcon,
                     departmentIcon,
                     teamsIcon,
                     positionsIcon,
                     leaveRequestsIcon,
                     documentRequest,
                     jobOffersIcon,
                     dashboardIcon
}) => {

    const {activeNav, setActiveNav} = useSideBar();

    const handleNavClick = (item) => {
      setActiveNav(item);
    };


    return (
        <div className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3" id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                   aria-hidden="true" id="iconSidenav"></i>
                <Link to="/dashboard" className="navbar-brand m-0">
                    <img src="/images/horizon_logo.jpeg" className="navbar-brand-img h-100" alt="horizon_logo" />
                    <span className="ms-1 font-weight-bold">Horizon HR Portal</span>
                </Link>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="w-auto" id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"/dashboard"} className={`nav-link ${activeNav === 'Dashboard' ? 'active' : ''}`} onClick={() => handleNavClick('Dashboard')}>
                            <div className={`icon ${activeNav === 'Dashboard' ? 'active' : ''} icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center`}>
                                <FontAwesomeIcon icon={dashboardIcon} color={activeNav === 'Dashboard' ? 'white' : ''} />
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Company management</h6>
                    </li>
                    <li className="nav-item">
                        <Link to={"/employees"} className={`nav-link ${activeNav === 'Employees' ? 'active' : ''}`} onClick={() => handleNavClick('Employees')}>
                            <div className={`icon ${activeNav === 'Employees' ? 'active' : ''} icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center`}>
                                <FontAwesomeIcon icon={employeesIcon} color={activeNav === 'Employees' ? 'white' : ''} />
                            </div>
                            <span className="nav-link-text ms-1">Employees</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/departments"} className={`nav-link ${activeNav === 'Departments' ? 'active' : ''}`} onClick={() => handleNavClick('Departments')}>
                            <div className={`icon ${activeNav === 'Departments' ? 'active' : ''} icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center`} >
                                <FontAwesomeIcon icon={departmentIcon} color={activeNav === 'Departments' ? 'white' : ''} />
                            </div>
                            <span className="nav-link-text ms-1">Departments</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/teams"} className={`nav-link ${activeNav === 'Teams' ? 'active' : ''}`} onClick={() => handleNavClick('Teams')}>
                            <div className={`icon ${activeNav === 'Teams' ? 'active' : ''} icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center`}>
                                <FontAwesomeIcon icon={teamsIcon} color={activeNav === 'Teams' ? 'white' : ''} />
                            </div>
                            <span className="nav-link-text ms-1">Teams</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/positions"} className={`nav-link ${activeNav === 'Positions' ? 'active' : ''}`} onClick={() => handleNavClick('Positions')}>
                            <div className={`icon ${activeNav === 'Positions' ? 'active' : ''} icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center`}>
                                <FontAwesomeIcon icon={positionsIcon} color={activeNav === 'Positions' ? 'white' : ''} />
                            </div>
                            <span className="nav-link-text ms-1">Positions</span>
                        </Link>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Human resources</h6>
                    </li>
                    <li className="nav-item">
                        <Link to={"/requests/leaves"} className={`nav-link ${activeNav === 'Leave_requests' ? 'active' : ''}`} onClick={() => handleNavClick('Leave_requests')}>
                            <div className={`icon ${activeNav === 'Leave_requests' ? 'active' : ''} icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center`}>
                                <FontAwesomeIcon icon={leaveRequestsIcon} color={activeNav === 'Leave_requests' ? 'white' : ''} />
                            </div>
                            <span className="nav-link-text ms-1">Leave requests</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/requests/documents"} className={`nav-link ${activeNav === 'Document_requests' ? 'active' : ''}`} onClick={() => handleNavClick('Document_requests')}>
                            <div className={`icon ${activeNav === 'Document_requests' ? 'active' : ''} icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center`}>
                                <FontAwesomeIcon icon={documentRequest} color={activeNav === 'Document_requests' ? 'white' : ''} />
                            </div>
                            <span className="nav-link-text ms-1">Document requests</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/career"} className={`nav-link ${activeNav === 'Job_offers' ? 'active' : ''}`} onClick={() => handleNavClick('Job_offers')}>
                            <div className={`icon ${activeNav === 'Job_offers' ? 'active' : ''} icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center`}>
                                <FontAwesomeIcon icon={jobOffersIcon} color={activeNav === 'Job_offers' ? 'white' : ''} />
                            </div>
                            <span className="nav-link-text ms-1">Job offers</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;