import { createSlice } from "@reduxjs/toolkit";

const restaurantListSlice = createSlice({
    name: "restaurantList",
    initialState: null,
    reducers: {
        addRestaurants: (state, action)=>{
            return state = action.payload
        }
    }
})

export const {addRestaurants} = restaurantListSlice.actions
export default restaurantListSlice.reducer;