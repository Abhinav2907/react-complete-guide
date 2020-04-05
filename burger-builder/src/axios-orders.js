import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://reactmyburger8.firebaseio.com/'
});

export default instance;