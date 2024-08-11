
import instanceAxios from "../utils/api" 

interface SignupRequest{
    email: string
    name:string
    username: string
    password: string
}


interface SigninRequest{
    email: string
    password:string
}

interface SigninResponse {
    token: string
}

export const getUser = async (endpoint: string) => {
    try {
        const response = await instanceAxios.get(endpoint)
        console.log(endpoint)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createUser = async (endpoint: string, userData: SignupRequest) => {
    try {
        const response = await instanceAxios.post(endpoint, userData)
        return response.data
    } catch (error) {
        throw error
    }
    
}

export const signin = async (endpoint: string, formSignin: SigninRequest) => {
    try {
        const response = await instanceAxios.post(endpoint, formSignin)
        console.log(response)
        return response
    } catch (error) {
        console.error('Error logging in:', error)
        throw error
    }    
}


export const query = async(endpoint: string) => {
    try {
        const response = await instanceAxios.get(endpoint)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}