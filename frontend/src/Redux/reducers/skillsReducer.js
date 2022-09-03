import { createSlice } from "@reduxjs/toolkit";
import { createSkills, getSkills } from "../actions/skillsActions";

const skillsReducer = createSlice({
    name:'skills',
    initialState:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        isMessage: false,
        skills: []
    },
    reducers: {
        reset: (state) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = false;
          state.isMessage = false;
        },
      },
      extraReducers: (builder) => {
        builder
          .addCase(createSkills.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(createSkills.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.isSuccess = true;
            // state.user = actions.payload
          })
          .addCase(createSkills.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
          .addCase(getSkills.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(getSkills.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.skills = actions.payload
          })
          .addCase(getSkills.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
      },
})

export const skillsActions = skillsReducer.actions;
export default skillsReducer.reducer