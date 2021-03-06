import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers = () => axiosInstance.get('/users');

const getPost = (id) => axiosInstance.get(`/posts?userId=${id}`);


export {getUsers, getPost};