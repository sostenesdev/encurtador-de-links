import axios from "axios"
import config from "../../config"
import qs from 'qs'
import api from '../../axiosConfig'

export const getusuarios = async (params) => {
    try {
        const response = await api.post(`/usuarios`, {
            params,
            paramSerializer: function(params) {
                return qs.stringify(params)
            }
        })
        return response
    } catch (error) {
        console.log('error',error)
        return error.response
    } finally{

    }
}