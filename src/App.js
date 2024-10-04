import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import EmployeesList from "./components/Employees/EmployeesList/EmployeesList";
import AddEmployee from "./components/Employees/AddEmployee/AddEmployee";
import PositionsList from "./components/Positions/PositionsList/PositionsList";
import EditEmployee from "./components/Employees/EditEmployee/EditEmployee";
import LeaveRequestForm from "./components/LeaveRequest/Admin/AddLeaveRequest/LeaveRequestForm";
import LeaveRequestsList from "./components/LeaveRequest/Admin/LeaveRequestsList/LeaveRequestsList";
import EditLeaveRequest from "./components/LeaveRequest/Admin/EditLeaveRequest/EditLeaveRequest";


const App = () => {

  return (
        <Router>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/employees" element={<EmployeesList />}/>
            <Route path="/employees/add" element={<AddEmployee />}/>
            <Route path="/employees/edit/:id" element={<EditEmployee />}/>
            <Route path="/positions" element={<PositionsList />}/>
            <Route path="/requests/leaves" element={<LeaveRequestsList />}/>
            <Route path="/requests/leaves/add" element={<LeaveRequestForm />}/>
            <Route path="/requests/leaves/edit/:id" element={<EditLeaveRequest />}/>
          </Routes>
        </Router>
  );
}

export default App;
