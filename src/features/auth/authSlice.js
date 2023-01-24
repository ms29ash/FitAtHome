import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'universal-cookie';

const cookies = new Cookies();




const initialState = {
    user: null,
    loading: false,
    isLoggedIn: false,
    error: null

}

export const loginUser = createAsyncThunk('auth/login', async (user, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:4000/auth/login', {
            email: user.email,
            password: user.password
        })
        cookies.set('authToken', response?.data?.authtoken, { path: '/', maxAge: 1296000 });
        return response.data?.email

    } catch (error) {
        return rejectWithValue(error?.response?.data.errors)
    }



})


export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = false;
            state.isLoggedIn = true;
            state.error = null
        }).addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload

        })
    }
})


export default userSlice.reducer