import {Component} from "react";

class Box extends Component {
    state = {
        color: "green"
    };

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => ({
              color: state.color === "green" ? "red" : "green",
            }));
        }, 5 * 1000);
    }

    render() {
        const {color} = this.state;
        return (
            <div style={{backgroundColor: color ,width:"100px", height:"100px"}}></div>
        );
    }
}

export default Box;