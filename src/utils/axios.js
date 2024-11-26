import axios from "axios";
const API_URL = "http://localhost:4000/api/";

const Axios = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json",
    }
});

export default Axios;