import api from "../utils/api"

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
        const response = await api.get(endpoint)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createUser = async (endpoint: string, userData: SignupRequest) => {
    try {
        const response = await api.post(endpoint, userData)
        return response.data
    } catch (error) {
        throw error
    }
    
}

export const signin = async (endpoint: string, formSignin: SigninRequest): Promise<SigninResponse> => {
    try {
        const response = await api.post(endpoint, formSignin)
        return response.data
    } catch (error) {
        console.error('Error logging in:', error)
        throw error
    }
    
}