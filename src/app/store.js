import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '../features/basket/basketSlice'
import foodReducer from '../features/filter/foodFilterSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        food: foodReducer
    },
})