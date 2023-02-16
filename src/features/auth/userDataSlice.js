import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'
import { logoutUser } from './authSlice'


const initialState = {
    name: null,
    verified: null,
    userData: null,
}

export const fetchUserData = createAsyncThunk('userData/fetch', async (authtoken, { rejectWithValue }) => {
    try {
        const res = await axios.post('auth/userData', {
            token: authtoken
        })
        return res?.data
    } catch (error) {
        console.log(error)
        if (error?.response.data) {
            return rejectWithValue(error?.response?.data.errorMessage)
        } else {
            return rejectWithValue(error?.message)

        }
    }
})



export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            const { name, verified, userData } = action.payload
            state.name = name
            state.verified = verified
            state.userData = userData
        }).addCase(logoutUser, (state) => {
            state.name = null
            state.verified = null
            state.userData = null
        })
    }
})

export default userDataSlice.reducer