import { configureStore } from "@reduxjs/toolkit";
import searchMovieSlice from "../features/searchMovieSlice";

export const store = configureStore({
    reducer:{
        searchMovie: searchMovieSlice
    }
})