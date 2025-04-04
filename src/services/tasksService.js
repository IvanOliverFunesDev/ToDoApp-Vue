import axios from "axios";

const API_URL = 'http://localhost/api';

export const createTask = async (taskData) => {
    const token = localStorage.getItem('token')

    const response = await axios.post(`${API_URL}/tasks`, taskData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const getTasks = async (taskData) => {
    const token = localStorage.getItem('token')

    const response = await axios.get(`${API_URL}/tasks/search`, taskData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data, tasks;
};