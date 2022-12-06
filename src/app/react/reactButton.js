import React from "react"

const ReactButton = () => {
    const handleButtonClick = () => {
        console.log("click React button!")
    }

    return <button onClick={handleButtonClick}>
        Hello from React!
    </button>
}

export default ReactButton;
