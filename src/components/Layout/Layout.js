import React from "react";
import {
    faBriefcase,
    faBuilding,
    faFileCirclePlus, faHouse,
    faPersonWalkingLuggage,
    faUserGroup,
    faUsers, faUserTie
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Layout = ({children, title}) => {
    return(
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
                <Header title={title} />
                <div className={"container-fluid py-4"}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;