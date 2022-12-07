import React from "react"
import { createRoot } from "react-dom/client"
import "./style.css"
import ReactButton from "./app/react/reactButton";
import { logText } from "./app/utils/functions";

const App = () => {
    return <div>
        <ReactButton/>
    </div>
}

const reactContainer = document.getElementById("react_container")
const root = createRoot(reactContainer);
root.render(<App/>);


logText("Start!!")
const startButton = document.getElementById("button-start");
const handeButtonClick = () => {
    logText(a)
}
startButton.addEventListener("click", handeButtonClick)

