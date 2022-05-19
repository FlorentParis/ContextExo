import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    username: "",
    password: "",
    token: "",
    isSuccess: false,
    isError: false
}

export const signupUser = createAsyncThunk('users/signupUser', async(formInput: any) => {
    axios({
        url: 'http://localhost:2345/register.php',
        method: 'post',
        withCredentials: true,
        data: new URLSearchParams({
            username: formInput.username,
            password: formInput.password
        })
    })
        .then(res => res.data)
})

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setLoggedUser: (state, action) => {
            state.token = action.payload;
        }
    },
    extraReducers: {

    }
})

export const { setLoggedUser } = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state: any) => state.user;