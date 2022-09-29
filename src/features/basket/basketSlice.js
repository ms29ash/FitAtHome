import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: [
        {
            quantity: 4,
            item: {
                _id: '621e58775b7e90e4525f07b6',
                name: 'Spicy Chicken With Couscous',
                type: 'Non-Veg',
                description: 'This super-tasty macro-balanced meal is perfect for nailing that meal prep. Bursting with flavour, it s a simple way to liven up your routine from plain old chicken and rice.',
                image: 'https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg',
                price: 129,
                ratings: 4.4
            }
        },
        {
            quantity: 4,
            item: {
                _id: '621e58775b7e90e4525f07b7',
                name: 'Speedy Harissa Chicken & Tabbouleh',
                type: 'Non-Veg',
                description: 'Liven up your chicken meal prep with this quick harissa chicken and tabbouleh   packed with protein and healthy carbohydrates',
                image: 'https://blogscdn.thehut.net/wp-content/uploads/sites/478/2017/11/13132628/MYP-Vegan-Harssa-Chicken-Meal-Prep-1800x1200.jpg',
                price: 489,
                ratings: 3.1
            }
        },
        {
            quantity: 4,
            item: {
                _id: '621e58775b7e90e4525f07b1',
                name: 'Eggs',
                type: 'Non-Veg',
                description: 'Eggs provide protein, Omega-3 fats, vitamin B12 and even some vitamin D! Eat both the yolks and the whites to reap all the healthy benefits. Egg sandwiches make a wonderful grab-and-go post-exercise breakfast, and eggs can be combined with potatoes for a healthy and satisfying weekend meal.',
                image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/3/26/0/WU0411H_baked-eggs-in-hash-brown-cups-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1385070928415.jpeg',
                price: 519,
                ratings: 4.9
            }
        }
    ],
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


        }, setQuantity: (state, action) => {
            const itemIndex = getItemIndex(state, action?.payload.name);
            if (itemIndex && itemIndex < 0) {
                return
            } else {
                state.basket[itemIndex].quantity = action?.payload?.quantity;
            }


        },
        removeCart: (state, action) => {
            const itemIndex = getItemIndex(state, action.payload.name);
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