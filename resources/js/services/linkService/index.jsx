import axios from "axios"
import config from "../../config"
import qs from 'qs'
import api from '../../axiosConfig'

export const getLinks = async (params) => {
    try {
        const response = await api.get(`/links`, {
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

export const createLink = async (data) => {
    try {
        const response = await api.post(`/links`, data)
        return response
    } catch (error) {
        console.log('error',error)
        return error.response
    } finally{

    }
}

export const updateLink = async (data) => {
    try {
        const response = await api.put(`/links/${data.id}`, data)
        return response
    } catch (error) {
        console.log('error',error)
        return error.response
    } finally{

    }
}

export const deleteLink = async (id) => {
    try {
        const response = await api.delete(`/links/${id}`)
        return response
    } catch (error) {
        console.log('error',error)
        return error.response
    } finally{

    }
}

export const getLink = async (id) => {
    try {
        const response = await api.get(`/links/${id}`)
        return response
    } catch (error) {
        console.log('error',error)
        return error.response
    } finally{

    }
}

export const getLinkBySlug = async (slug) => {
    try {
        const response = await api.get(`/links/slug/${slug}`)
        return response
    } catch (error) {
        console.log('error',error)
        return error.response
    } finally{

    }
}
