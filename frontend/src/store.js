import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Redux/reducers/authReducer";
import skillsReducer from "./Redux/reducers/skillsReducer";
import EducationReducer from "./Redux/reducers/EducationReducer";

export const store =  configureStore({
    reducer: {
        auth: authReducer,
        skills: skillsReducer,
        education: EducationReducer,
    },
})

