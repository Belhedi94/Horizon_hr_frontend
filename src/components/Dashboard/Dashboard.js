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
                <StatisticsCard title={"Users"} count={employeesData.totalItems} icon={faUserGroup}/>
                <StatisticsCard title={"Positions"} count={positionsData.totalItems} icon={faBriefcase}/>
                <StatisticsCard title={"Departments"} count={departmentsData.totalItems} icon={faBuilding}/>
                <StatisticsCard title={"Teams"} count={teamsData.totalItems} icon={faUsers}/>
            </div>
            <div className="row">
                <div className={"col-md-6"}>

                </div>
            </div>
        </Layout>
    );
};
export default Dashboard;