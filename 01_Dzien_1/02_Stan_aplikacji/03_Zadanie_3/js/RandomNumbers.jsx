import {Component} from "react";

class RandomNumbers extends Component{
    state = {
        numbers: [],
    };

    randomNumber = (min = 100, max = 999) =>
        Math.floor(Math.random() * (max - min + 1)) + min;
    addNumber = () => {
        this.setState((prevState) => ({
            numbers: [...prevState.numbers, this.randomNumber()],
        }));
    };

    render() {
        const {numbers} = this.state;
        return (
            <>
                <button onClick={this.addNumber}> Wylosuj liczbę</button>
                <ul>
                    {numbers.map((number, index) => <li key={index}>{number}</li>)}
                </ul>
            </>
        );
    }
}

export default RandomNumbers;