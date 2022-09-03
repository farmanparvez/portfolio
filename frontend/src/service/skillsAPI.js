import { postRequest, getRequest } from "../utils/request"
const url = 'user'

export const createSkillsAPI = (data) => postRequest(`${url}/skills`, data)
export const getSkillsAPI = () => getRequest(`${url}/skills`)