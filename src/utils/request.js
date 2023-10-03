import axios from "axios";



const request = axios.create({
    baseURL: 'http://localhost:9338/',
    timeout: 10500,
});

export default request;
