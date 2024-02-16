import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "FoodCategory",
    initialState: null,
    reducers: {
        addCategory: (state, action)=>{
            return action.payload
        }
    }
})

export const {addCategory} = categorySlice.actions;

export default categorySlice.reducer;