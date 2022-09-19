

export default function Food(props) {
    let food = props.food;
    food = ['Pizza', 'Hamburger', 'Coke'];

    return food.map(matRetter => <li key={matRetter}>{matRetter}</li>)
}