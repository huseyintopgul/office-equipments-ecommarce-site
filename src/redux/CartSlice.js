import { createSlice } from '@reduxjs/toolkit';
import urunlerData from '../component/data/data';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: urunlerData,
        oldP: 0,
        quantity: 0,
        total: 0,
    },
    reducers: {
        increase: (state, action) => {
            state.quantity = state.quantity + 1;
        }
    }

});

export const { increase, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
