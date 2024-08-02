import axios from 'axios'

const api = axios.create({
    baseURL: "https://api-traca.vercel.app/",
    headers: {
        "Content-Type": "application/json",
    }
})


export default api