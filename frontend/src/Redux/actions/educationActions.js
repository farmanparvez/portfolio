import { createAsyncThunk } from "@reduxjs/toolkit";
import { createEducationAPI, getEducationAPI } from "../../service/eduactionAPI"; 

export const createEducation = createAsyncThunk('education/createEducation', async(data, thunkAPI) => {
    try {
        return await createEducationAPI(data)
    } catch (error) {
        console.log(error.response.data.message )
        const message = error.response.data.message || error.message.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const getEducation = createAsyncThunk('education/getEducation', async(data, thunkAPI) => {
    try {
        const res = await getEducationAPI()
        console.log(res)
        return res?.data?.education
    } catch (error) {
        console.log(error.response.data.message )
        const message = error.response.data.message || error.message.toString()
        return thunkAPI.rejectWithValue(message)
    }
})