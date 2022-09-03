import { createSlice } from "@reduxjs/toolkit";
import { createEducation, getEducation } from "../actions/educationActions";

const educationReducer = createSlice({
    name:'education',
    initialState:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        isMessage: false,
        education: []
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
          .addCase(createEducation.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(createEducation.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.isSuccess = true;
            // state.user = actions.payload
          })
          .addCase(createEducation.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
          .addCase(getEducation.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(getEducation.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.education = actions.payload
          })
          .addCase(getEducation.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
      },
})

export const educationActions = educationReducer.actions;
export default educationReducer.reducer