import axios from "axios";

export const API_BASE_URL = "https://cozy-determination-production.up.railway.app"

const jwtToken=localStorage.getItem("jwt");

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
     "Authorization":`Bearer ${jwtToken}`,
     "Content-Type":"application/json"
    }
})