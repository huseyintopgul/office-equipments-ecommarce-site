import { createSlice } from '@reduxjs/toolkit';
import urunlerData from '../component/data/data';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: urunlerData,
        quantity: 0,
        total: 0,
    },
    reducers: {
        increment:(state, action)=>{
            state.quantity = state.quantity + 1;
        }

    }

});

export const {increment} = cartSlice.actions;
export default cartSlice.reducer;
