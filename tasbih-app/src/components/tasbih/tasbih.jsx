import React, { useRef } from "react";
import './tasbih.css'
import Dua from "../Dua/dua";
function Tasbih() {
    const [counter, setCounter] = React.useState(0)

    const primaryButton = React.useRef(null)
    const secondaryButton = React.useRef(null)

    const [dua, setDua] = React.useState(false)


    return (
        <>
            <div className="wrapper-tasbih" onClick={() => setCounter(counter + 1)}>
                <table></table>
                <div className="counters-box">
                    <button className="counters counter" ref={primaryButton} onClick={() => {

                        primaryButton.current.classList.add("counter")

                        primaryButton.current.classList.remove("secondary-counter")

                        secondaryButton.current.classList.remove("counter")

                        secondaryButton.current.classList.add("secondary-counter")

                    }}>{counter}/99</button>

                    <button className="counters secondary-counter" ref={secondaryButton} onClick={() => {

                        secondaryButton.current.classList.add("counter")

                        secondaryButton.current.classList.remove("secondary-counter")

                        primaryButton.current.classList.remove("counter")

                        primaryButton.current.classList.add("secondary-counter")

                    }}>{counter}/33</button>

                </div>
                <div className="tap">tap</div>
            </div>
            <div>
                <button className="btn-reset" onClick={() => setCounter(0)}>Reset</button>
                <p className="scroll-text">To scroll click anywhere:</p>

                <div className="duas">
                    <button onClick={() => setDua(!dua)} >Dua</button>
                    {dua ? <Dua /> : null}</div>
            </div>

        </>


    )
}

export default Tasbih