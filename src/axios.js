import axios from "axios";
const instance = axios.create({
    baseURL: 'https://fitathome29.herokuapp.com/'
})

export default instance;