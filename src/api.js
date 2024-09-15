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