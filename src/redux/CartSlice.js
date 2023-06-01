import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        quantity: 0,
        total: 0,
    },
    reducers: {
        increase: (state, action) => {
            state.quantity += 1;
        }
    }

});

export const { increase } = cartSlice.actions;
export default cartSlice.reducer;
