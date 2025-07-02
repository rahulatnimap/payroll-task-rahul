import axios from "axios"

const PublicRequest = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})