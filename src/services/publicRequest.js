import axios from "axios"

 const PublicRequest = axios.create({
    baseURL:  import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type" : "application/json"
    }
})

export const PublicPost = (endPoint, data) => {
    return PublicRequest.post(endPoint, data)
}