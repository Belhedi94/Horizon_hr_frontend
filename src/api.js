import axios, {toFormData} from 'axios';

const API_URL = 'https://localhost:7292/api';

export const createEmployee = async (employeeData) => {
    try {
        console.log(employeeData);
        const response = await axios.post(`${API_URL}/users`, employeeData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data.message : 'Error creating employee');
    }
}