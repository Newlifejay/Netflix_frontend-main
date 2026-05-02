import axios from 'axios';

export default axios.create({
    baseURL:'http://172.179.240.112:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});