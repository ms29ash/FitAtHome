import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '../features/basket/basketSlice'
import foodReducer from '../features/filter/foodFilterSlice'
import authReducer from '../features/auth/authSlice'
import userDataReducer from '../features/auth/userDataSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        food: foodReducer,
        auth: authReducer,
        userData: userDataReducer
    },
})