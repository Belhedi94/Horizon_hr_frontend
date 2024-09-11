import axios, {toFormData} from 'axios';

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