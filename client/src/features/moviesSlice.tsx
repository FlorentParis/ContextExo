import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movies: [],
    status: 'idle'
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async() => {
    const response = await axios.get('http://localhost:2345');
    return response.data;
})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

/* export const {getDb} = moviesSlice.actions; */
export default moviesSlice.reducer;

export const selectAllMovies = state => state.movies.movies;
export const selectMoviesById = (state, movieId) => state.movies.movies.find(movie => movie.id === movieId);