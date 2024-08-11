import axios from 'axios'

const instanceAxios = axios.create({
    baseURL: "https://api-traca.vercel.app/",
    headers: {
        "Content-Type": "application/json",
    }
})


export default instanceAxios