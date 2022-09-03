import axios from "axios"
import { backend_Url } from "./enviroment"

export const getRequest = (url, data) => {
    const authToken = localStorage.getItem('token') ? localStorage.getItem( 'token') : undefined
    const conifg = {
        headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return axios.get(`${url}`, data, conifg).then(res => res.data)
} 

export const postRequest = (url, data) => {
    const authToken = localStorage.getItem('token') ? localStorage.getItem( 'token') : undefined
    const conifg = {
        headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return axios.post(`${url}`, data, conifg).then(res => res.data)
} 