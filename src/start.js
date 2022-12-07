import React from "react"
import { createRoot } from "react-dom/client"
import "./style.css"
import ReactButton from "./app/react/reactButton";
import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
    setupLocatorUI();
}

const App = () => {
    return <div>
        <ReactButton/>
    </div>
}

const reactContainer = document.getElementById("react_container")
const root = createRoot(reactContainer);
root.render(<App/>);

