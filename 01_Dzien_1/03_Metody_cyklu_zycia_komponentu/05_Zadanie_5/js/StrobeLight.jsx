import {Component} from "react";

class StrobeLight extends Component {
    INIT_BGCOLOR = "white";

    state = {
        bgColor: "INIT_BGCOLOR"
    };

    componentDidMount() {
        const { color, frequency } = this.props;

        this.intervalId = setInterval(() => {
            this.setState((state) => ({
                bgColor:  state.bgColor === this.INIT_BGCOLOR ? color : this.INIT_BGCOLOR,
            }));
        }, frequency);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {

        const { bgColor } = this.state;

        return (
            <div style={{ width: "500px", height: "50px", background: bgColor }} />
        );
    }
}
export default StrobeLight;