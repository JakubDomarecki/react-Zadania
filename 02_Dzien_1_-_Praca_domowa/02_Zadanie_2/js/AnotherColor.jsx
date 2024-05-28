import {Component} from "react";

class AnotherColor extends Component {
    state = {
        color: 'yellow'
    };

    // componentDidMount() {
    //      this.intervalId = setInterval(() => {
    //         this.setState((state) => ({
    //             color: state.color === "yellow" ? "blue" : "yellow",
    //         }));
    //     }, 2 * 1000);
    // }


    componentDidMount() {
        this.intervalId = setTimeout(() => {
            this.setState({color: 'blue'});
        }, 1 * 1000);
    }

    // componentDidMount() {
    //    this.intervalId = setInterval(() => {
    //     this.setState((prevState => ({color: prevState.color === 'yellow' ? "blue" : "yellow"})));
    //    }, 2 * 1000);
    // }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const {color} = this.state;
        return (
            <div style={{backgroundColor:color, width: "100px", height:"100px"}}></div>
        )
;    }


}
export default AnotherColor;