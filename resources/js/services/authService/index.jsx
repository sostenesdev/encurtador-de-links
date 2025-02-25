import axios from "axios"
import config from "../../config"

const handleLogin = async (email, password) => {
    try {
        const response = await axios.post(`${config.apiUrl}/auth/login`, {
            email,
            password
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

const handleLogout = async () => {
    localStorage.removeItem('token');
}   

const loginService = () => {
    return {
        handleLogin,
        handleLogout
    }
}

export default loginService