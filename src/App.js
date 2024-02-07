import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = ()=>{
    return(<div>
    <Body/>
    </div>)
}

root.render(<App/>)