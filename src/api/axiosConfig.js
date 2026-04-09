import axios from 'axios';

export default axios.create({
    baseURL:'http://172.211.141.98:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});