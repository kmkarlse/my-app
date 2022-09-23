import React, { } from 'react'

export default function Alert(props) {
    //const [myState, setMyState] = useState('');

    const HandleInputChange = (event) => {
        const value = event.target.value;
        //setMyState(value)
        const setInputValue = props.setInputValue
        setInputValue(value)

        console.log("change",value);
    }

    
    const HandleClick = () => {
        console.log("clicked"); 
        alert(props.inputValue);
    }
    


    return (
        <>
        <button onClick={HandleClick}>Trykk på meg</button>
        <input id='myState' value={props.inputValue} type="text" onChange={HandleInputChange} ></input>
        </>
    )};