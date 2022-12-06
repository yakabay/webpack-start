import React from "react"
import ReactDom from "react-dom"
import "./style.css"
import ReactButton from "./app/react/reactButton";
import { logText } from "./app/utils/functions";

const App = () => {
    return <div>
        <ReactButton/>
    </div>
}

const reactRoot = document.getElementById("react_root")
ReactDom.render(<App/>, reactRoot);


logText("Start!!")
const startButton = document.getElementById("button-start");
const handeButtonClick = () => {
    logText(a)
}
startButton.addEventListener("click", handeButtonClick)

