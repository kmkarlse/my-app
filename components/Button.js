
export default function button() {
    const HandleClick = () => {
        console.log("clicked");
    }

    return <button onClick={HandleClick}>Trykk på meg</button>
}