import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://todo-mvc-api-typeorm.herokuapp.com/',
    headers: {
        "Content-Type": "application/json"
    }
})