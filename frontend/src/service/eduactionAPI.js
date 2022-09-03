
import { postRequest, getRequest } from "../utils/request"
const url = 'user'

export const createEducationAPI = data => postRequest(`${url}/education`, data)
export const getEducationAPI = () => getRequest(`${url}/education`)
// export const logoutAPI = () => localStorage.removeItem('porToken')

