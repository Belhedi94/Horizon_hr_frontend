import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Employees from "./components/Employees/Employees";
import AddEmployee from "./components/Employees/AddEmployee/AddEmployee";

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/employees" element={<Employees />}/>
            <Route path="/employees/add" element={<AddEmployee />}/>
          </Routes>
        </Router>
  );
}

export default App;
