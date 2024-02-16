import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./categorySlice";
import restaurantListReducer from "./restaurantListSlice";
const appStore  = configureStore({
    reducer: {
        FoodCategoryItems: CategoryReducer,
        restaurantList: restaurantListReducer
    }
})

export default appStore;