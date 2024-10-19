import axios from 'axios';

const API_URL = 'https://localhost:7292/api';

export const createEmployee = async (employeeData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, employeeData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.message : 'Error creating employee');
    }
}

export const getEmployeeData = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/users/${id}`);
        return response.data.data;
    } catch(error) {
        throw new Error(error.response ? error.response.message : 'Error getting employee data');
    }
}

export const updateEmployee = async (id, employeeData) => {
    try {
        const response = await axios.put(`${API_URL}/users/${id}`, employeeData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.message : 'Error updating employee');
    }
}

export const createLeaveRequest = async (leaveRequestData) => {
    try {
        const response = await axios.post(`${API_URL}/requests/leaves`, leaveRequestData);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.message : 'Error creating the leave request');
    }
}

export const getAllLeaveRequests = async (pageNumber, pageSize, filter, usePagination) => {
    try {
        const response = await axios.get("https://localhost:7292/api/requests/leaves", {
            params: {
                pageNumber: pageNumber + 1,
                pageSize: pageSize,
                filter: filter,
                usePagination: usePagination
            },
        });
        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
    }
}

export const updateLeaveRequest = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/requests/leaves/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.message : 'Error updating leave request');
    }
}

export const getAllPositions = async (pageNumber, pageSize, filter, usePagination) => {
    try {
        const response = await axios.get("https://localhost:7292/api/positions", {
            params: {
                pageNumber: pageNumber + 1,
                pageSize: pageSize,
                filter: filter,
                usePagination: usePagination
            },
        });
        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
    }
}

export const createPosition = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/positions`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.message : 'Error creating position');
    }
}

export const deletePosition = async(id) => {
  try {
      const response = await axios.delete(`${API_URL}/positions/${id}`);
      return response.data;
  }  catch(error) {
      console.log("Failed to delete a position", error);
  }
};

export const getPositionData = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/positions/${id}`);
        return response.data.data;
    } catch(error) {
        throw new Error(error.response ? error.response.message : 'Error getting position data');
    }
}

export const updatePosition = async (id, positionData) => {
    try {
        const response = await axios.put(`${API_URL}/positions/${id}`, positionData);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.message : 'Error updating position');
    }
}

//Department api

export const getAllDepartments = async (pageNumber, pageSize, filter, usePagination) => {
    try {
        const response = await axios.get("https://localhost:7292/api/departments", {
            params: {
                pageNumber: pageNumber + 1,
                pageSize: pageSize,
                filter: filter,
                usePagination: usePagination
            },
        });

        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
    }
}

export const createDepartment = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/departments`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.message : 'Error creating department');
    }
}

export const deleteDepartment = async(id) => {
    try {
        const response = await axios.delete(`${API_URL}/departments/${id}`);
        return response.data;
    }  catch(error) {
        console.log("Failed to delete a department", error);
    }
};

export const getDepartmentData = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/departments/${id}`);
        return response.data.data;
    } catch(error) {
        throw new Error(error.response ? error.response.message : 'Error getting department data');
    }
}

export const updateDepartment = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/departments/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.message : 'Error updating department');
    }
}

//Team api endpoints

export const getAllTeams = async (pageNumber, pageSize, filter, usePagination) => {
    try {
        const response = await axios.get("https://localhost:7292/api/teams", {
            params: {
                pageNumber: pageNumber + 1,
                pageSize: pageSize,
                filter: filter,
                usePagination: usePagination
            },
        });

        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
    }
}

export const createTeam = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/teams`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.message : 'Error creating team');
    }
}

export const getTeamData = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/teams/${id}`);

        return response.data.data;

    } catch(error) {
        throw new Error(error.response ? error.response.message : 'Error getting team data');
    }
}

export const updateTeam = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/teams/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.message : 'Error updating team');
    }
}

export const deleteTeam = async(id) => {
    try {
        const response = await axios.delete(`${API_URL}/teams/${id}`);
        return response.data;
    }  catch(error) {
        console.log("Failed to delete a team", error);
    }
};

//Leave balance

export const getLeaveBalanceData = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/leaves/balances/${userId}`);

        return response.data.data;

    } catch(error) {
        throw new Error(error.response ? error.response.message : 'Error getting leave balance data');
    }
}

//Employees endpoints

export const getAllEmployees = async (pageNumber, pageSize, filter) => {
    try {
        const response = await axios.get("https://localhost:7292/api/users", {
            params: {
                pageNumber: pageNumber + 1,
                pageSize: pageSize,
                filter: filter,
            },
        });

        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
    }
}

export const deleteEmployee = async(id) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${id}`);
        return response.data;
    }  catch(error) {
        console.log("Failed to delete an employee", error);
    }
};

export const getAllDocumentRequests = async (pageNumber, pageSize, filter, usePagination) => {
    try {
        const response = await axios.get("https://localhost:7292/api/requests/documents", {
            params: {
                pageNumber: pageNumber + 1,
                pageSize: pageSize,
                filter: filter,
                usePagination: usePagination
            },
        });
        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
    }
}

export const updateDocumentRequest = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/requests/documents/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.message : 'Error updating document request');
    }
}


