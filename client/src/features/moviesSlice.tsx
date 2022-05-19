import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import internal from "stream";

const initialState = {
    movies: [],
    status: 'idle',
    error: ''
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async() => {
        return axios.get('http://localhost:2345')
        .then(
            response => response.data
        )
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(fetchMovies.pending, (state, action) => {
            state.status = 'loading'
          })
        .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.movies = state.movies.concat(action.payload)
        })
        .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message!
        })
    }
})

/* export const {getDb} = moviesSlice.actions; */
export default moviesSlice.reducer;

export const selectAllMovies = (state: any) => state.movies.movies;
export const selectMoviesById = (state: any, movieId: any) => state.movies.movies.find((movie: any) => movie.id == movieId);