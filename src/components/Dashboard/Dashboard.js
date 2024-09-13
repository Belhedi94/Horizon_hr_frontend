import React from 'react';
import { faUsers, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import StatisticsCard from "../StatisticsCard/StatisticsCard";
import Layout from "../Layout/Layout";

const Dashboard = () =>  {
    return (
        <Layout title={"Dashboard"}>
            <div className="row">
                <StatisticsCard title={"Total users"} count={100} icon={faUserGroup}/>
                <StatisticsCard title={"Departments"} count={100} icon={faBuilding}/>
                <StatisticsCard title={"Teams"} count={100} icon={faUsers}/>
            </div>
        </Layout>
    );
};
export default Dashboard;