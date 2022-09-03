import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSkillsAPI,getSkillsAPI } from "../../service/skillsAPI"

export const createSkills = createAsyncThunk("skills/AdminSkills", async(data, thunkAPI) => {
    console.log(data)
    try {
        return await createSkillsAPI(data)
    } catch (error) {
        const message = error.response.data.error
        // console.log(error)
        thunkAPI.rejectWithValue(message)
    }
})

export const  getSkills = createAsyncThunk('skills/getSkills', async (_, thunkAPI) => {
    try {
        const res = await getSkillsAPI()
        console.log(res.data.skills)

        return res?.data?.skills
    } catch (error) {
        console.log(error)
    }
})

