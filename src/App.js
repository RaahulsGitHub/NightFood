import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./Body";
import { Provider } from "react-redux";
import appStore from "./utilities/Redux/appStore";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Search  from "./components/Search/Search";
import Cart from "./components/Cart/Cart";
import RestaurantPage from "./components/RestaurantData/RestaurantPage";

const root = ReactDOM.createRoot(document.getElementById("root"));



const App = ()=>{
    return(
        <>
            <Navbar/>
        <Provider store={appStore}>   
            <Outlet/>
        </Provider>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/search",
                element: <Search/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantPage/>
            }
        ]
    }
])

root.render(<RouterProvider router={appRouter}/>)