import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: [],
}
const getItemIndex = (state, idToFind) => {
    const ids = state.basket.map(item => item.id);
    return ids.indexOf(idToFind);
}



export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const itemIndex = getItemIndex(state, action.payload.id);
            if (itemIndex && itemIndex < 0) {
                state.basket.push(action?.payload);
            } else {
                state.basket[itemIndex].quantity += action.payload.quantity;
            }
        }, setQuantity: (state, action) => {
            const itemIndex = getItemIndex(state, action?.payload.id);
            if (itemIndex && itemIndex < 0) {
                return
            } else {
                state.basket[itemIndex].quantity = action?.payload?.quantity;
            }


        },
        removeCart: (state, action) => {
            const itemIndex = getItemIndex(state, action.payload);
            if (itemIndex && itemIndex < 0) {
                return
            } else {
                state?.basket.splice(itemIndex, 1);
            }
        }
        ,
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { addCart, setQuantity, removeCart } = basketSlice.actions

export default basketSlice.reducer