import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from '../../axios'
import Cookies from 'universal-cookie';

const cookies = new Cookies();




const initialState = {
    user: null,
    loading: false,
    isLoggedIn: null,
    error: null

}

export const loginUser = createAsyncThunk('auth/login', async (user, { rejectWithValue }) => {
    try {
        const response = await axios.post('auth/login', {
            email: user.email,
            password: user.password
        })
        cookies.set('authToken', response?.data?.authtoken, { path: '/', maxAge: 1296000 });
        return response.data

    } catch (error) {

        if (error?.response.data) {

            return rejectWithValue(error?.response?.data.errors)
        } else {
            return rejectWithValue(error?.message)

        }
    }
})

export const signupUser = createAsyncThunk('auth/signup', async (user, { rejectWithValue }) => {
    try {
        const res = await axios.post('auth/signup', {
            email: user.email,
            password: user.password,
            name: user.name
        })
        cookies.set('verifyId', res?.data?.userId, { path: '/', maxAge: 300 });
        return res.data;
    } catch (error) {
        if (error?.response?.data) {
            return rejectWithValue(error?.response?.data.errors)
        } else {
            return rejectWithValue(error?.message)
        }


    }
})



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser: (state) => {
            cookies.remove('authToken');
            state.isLoggedIn = false;
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.email
            state.loading = false;
            state.isLoggedIn = true;
            state.error = null
        }).addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload

        })
        builder.addCase(signupUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(signupUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;

        }).addCase(signupUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export const { logoutUser } = authSlice.actions


export default authSlice.reducer