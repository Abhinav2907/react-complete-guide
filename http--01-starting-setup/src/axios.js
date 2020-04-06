import axios from 'axios';
const inst = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
export default inst;