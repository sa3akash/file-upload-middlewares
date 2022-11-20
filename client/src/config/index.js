import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:5500",
    headers:{
        //"Content-type": "multipart/form-data",
        //"Accept": "application/json",
    }
})


export const sendDataToServer = (data) => api.post("/api/add", data)

export default api;