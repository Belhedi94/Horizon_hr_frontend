import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import EmployeesList from "./components/Employees/EmployeesList/EmployeesList";
import AddEmployee from "./components/Employees/AddEmployee/AddEmployee";
import Departments from "./components/Department/Departments/Departments";
import EditEmployee from "./components/Employees/EditEmployee/EditEmployee";
import LeaveRequestForm from "./components/LeaveRequest/LeaveRequestForm";

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/employees" element={<EmployeesList />}/>
            <Route path="/employees/add" element={<AddEmployee />}/>
            <Route path="/employees/edit/:id" element={<EditEmployee />}/>
            <Route path="/departments" element={<Departments />}/>
            <Route path="/requests/leaves" element={<LeaveRequestForm />}/>
          </Routes>
        </Router>
  );
}

export default App;
