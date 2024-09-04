import React from 'react';
import { faUsers, faBuilding, faUserGroup, faBriefcase, faPersonWalkingLuggage, faFileCirclePlus, faUserTie, faHouse } from '@fortawesome/free-solid-svg-icons';

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import StatisticsCard from "../StatisticsCard/StatisticsCard";

const Dashboard = () =>  {
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
                <Header title={"Dashboard"} />
                <div className={"container-fluid py-4"}>
                    <div className="row">
                        <StatisticsCard title={"Total users"} count={100} icon={faUserGroup}/>
                        <StatisticsCard title={"Departments"} count={100} icon={faBuilding}/>
                        <StatisticsCard title={"Teams"} count={100} icon={faUsers}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;