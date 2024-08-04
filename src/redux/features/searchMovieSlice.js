import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    title: ""
}

export const searchMovieSlice = createSlice({
    name:"searchMovie",
    initialState ,
    reducers:{
        changeTitle:(state ,action) =>{
            state.title = action.payload
        }
    }
})

export const {changeTitle} = searchMovieSlice.actions;
export default searchMovieSlice.reducer;