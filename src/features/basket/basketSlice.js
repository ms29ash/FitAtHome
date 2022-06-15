import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: [],
}
const getItemIndex = (state, idToFind) => {
    const ids = state.basket.map(item => item.item.name);
    return ids.indexOf(idToFind);
}


export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const itemIndex = getItemIndex(state, action.payload.item.name);
            if (itemIndex && itemIndex < 0) {
                state.basket.push(action?.payload);
            } else {
                state.basket[itemIndex].quantity += action.payload.quantity;
            }


        },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { addCart } = basketSlice.actions

export default basketSlice.reducer