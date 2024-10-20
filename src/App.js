import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import EmployeesList from "./components/Employees/EmployeesList/EmployeesList";
import AddEmployee from "./components/Employees/AddEmployee/AddEmployee";
import PositionsList from "./components/Positions/PositionsList/PositionsList";
import EditEmployee from "./components/Employees/EditEmployee/EditEmployee";
import AddLeaveRequest from "./components/LeaveRequest/Admin/AddLeaveRequest/AddLeaveRequest";
import LeaveRequestsList from "./components/LeaveRequest/Admin/LeaveRequestsList/LeaveRequestsList";
import EditLeaveRequest from "./components/LeaveRequest/Admin/EditLeaveRequest/EditLeaveRequest";
import AddPosition from "./components/Positions/AddPosition/AddPosition";
import EditPosition from "./components/Positions/EditPosition/EditPosition";
import DepartmentsList from "./components/Departments/DepartmentsList/DepartmentsList";
import AddDepartment from "./components/Departments/AddDepartment/AddDepartment";
import EditDepartment from "./components/Departments/EditDepartment/EditDepartment";
import AddTeam from "./components/Teams/AddTeam/AddTeam";
import TeamsList from "./components/Teams/TeamsList/TeamsList";
import EditTeam from "./components/Teams/EditTeam/EditTeam";
import {UserProvider} from "./contexts/UserContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DocumentRequestsList from "./components/DocumentRequest/Admin/DocumentRequestsList/DocumentRequestsList";
import AddDocumentRequest from "./components/DocumentRequest/Admin/AddDocumentRequest/AddDocumentRequest";


const App = () => {

  return (
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/employees" element={<EmployeesList />}/>
            <Route path="/employees/add" element={<AddEmployee />}/>
            <Route path="/employees/edit/:id" element={<EditEmployee />}/>
            <Route path="/departments" element={<DepartmentsList />}/>
            <Route path="/departments/add" element={<AddDepartment />}/>
            <Route path="/departments/edit/:id" element={<EditDepartment />}/>
            <Route path="/positions" element={<PositionsList />}/>
            <Route path="/positions/add" element={<AddPosition />}/>
            <Route path="/positions/edit/:id" element={<EditPosition />}/>
            <Route path="/teams" element={<TeamsList />}/>
            <Route path="/teams/add" element={<AddTeam />}/>
            <Route path="/teams/edit/:id" element={<EditTeam />}/>
            <Route path="/requests/leaves" element={<LeaveRequestsList />}/>
            <Route path="/requests/leaves/add" element={<AddLeaveRequest />}/>
            <Route path="/requests/leaves/edit/:id" element={<EditLeaveRequest />}/>
            <Route path="/requests/documents" element={<DocumentRequestsList />}/>
            <Route path="/requests/documents/add" element={<AddDocumentRequest />}/>
          </Routes>
        </Router>
        <ToastContainer
            autoClose={2000}
            theme="colored"
            hideProgressBar={true}
        />
      </UserProvider>

  );
}

export default App;
