import axios from 'axios';

export default axios.create({
    baseURL:'http://18.223.126.177:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});