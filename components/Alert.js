import React, { useState } from 'react'

export default function UseState() {
    const [myState, setMyState] = useState('');

    const HandleInputChange = (event) => {
        const value = event.target.value;
        setMyState(value)


        console.log("change",value);
    }

    
    const HandleClick = () => {
        console.log("clicked",myState); 
        alert(myState);
    }



    return (
        <>
        <button onClick={HandleClick}>Trykk på meg</button>
        <input id='myState' value={myState} type="text" onChange={HandleInputChange}></input>

        </>
    )};