import React, { useState } from 'react';

export default function App() {

    const [loveWillys, setLoveWillys] = useState();

    function changeWillys() {
        setLoveWillys( prevState => !prevState)
    }


    return(
        <div>
            <h1>Do you love willys?</h1>
            <h2 onClick={changeWillys}>{loveWillys ? "Yes" : "Nope"}</h2>
        </div>
    )
}