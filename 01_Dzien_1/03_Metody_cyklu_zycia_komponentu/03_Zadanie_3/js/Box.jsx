import {Component} from "react";

class Box extends Component {
    state = {
        color: "green"
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((state) => ({color: state.color === "green" ? "red" : "green"}));
        }, 5 * 1000);
    }



    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const {color} = this.state;
        return (
            <div style={{backgroundColor: color ,width:"100px", height:"100px"}}></div>
        );
    }
}

export default Box;