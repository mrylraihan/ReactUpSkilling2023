import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {
        uiSlice: uiSlice.reducer,
        cartSlice: cartSlice.reducer
    }
})

export default store