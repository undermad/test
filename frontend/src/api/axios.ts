import axios from "axios";

export const axiosBase = axios.create({
    baseURL: "/api/v1",
    headers: {'Content-Type': 'application/json'},
    timeout: 10000,
})