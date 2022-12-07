import React from "react"

const ReactButton = () => {
    const handleButtonClick = () => {
        console.log("click React button!")
    }

    return <button style={{ marginTop: 30 }} className="button-start" onClick={handleButtonClick}>
        React Button
    </button>
}

export default ReactButton;
