import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./Body";
import { Provider } from "react-redux";
import appStore from "./utilities/Redux/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = ()=>{
    return(
        <Provider store={appStore}>
    <div>
    <Body/>
    </div>
        </Provider>
    )
}

root.render(<App/>)