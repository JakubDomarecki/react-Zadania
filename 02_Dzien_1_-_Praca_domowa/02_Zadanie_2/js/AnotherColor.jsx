import {Component} from "react";

class AnotherColor extends Component {
    state = {
        color: 'yellow'
    };

    componentDidMount() {
        const intervalId = setInterval(() => {
            this.setState((state) => ({
                color: state.color === "yellow" ? "blue" : "yellow",
            }));
        }, 2 * 1000);
    }

    render() {
        const {color} = this.state;
        return (
            <div style={{backgroundColor:color, width: "100px", height:"100px"}}></div>
        )
;    }


}
export default AnotherColor;