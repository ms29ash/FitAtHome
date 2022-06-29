import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    type: null,

}


export const foodFilterSlice = createSlice({
    name: 'foodFilter',
    initialState,
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
        },


    },
})

export const { setType } = foodFilterSlice.actions

export default foodFilterSlice.reducer