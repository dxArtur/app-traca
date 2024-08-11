import instanceAxios from "../utils/api"


async function authSignin(endpoint: string, token: string) {
    // const token = await getToken()

try {
    const response = await instanceAxios.get(endpoint, {
        headers: {
            Authorization:  `Bearer ${token}`
        }
    })
    
} catch (error) {
    console.error('Erro ao buscar dados protegidos', error)
}    


}