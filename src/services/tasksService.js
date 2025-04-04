import axios from "axios";

const API_URL = 'http://localhost/api';

export const createTask = async (taskData) => {
    const response = await axios.post(`${API_URL}/tasks`, taskData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};