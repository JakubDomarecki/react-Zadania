import {Component} from "react";
import ClockTime from "./ClockTime.jsx";
import ClockDate from "./ClockDate.jsx";

class Clock extends Component {
    state = {
        now: new Date(),
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({now: new Date()});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
render() {
    const { now } = this.state;
        return (
         <>
             <ClockTime date={now} />
             <ClockDate date={now} />
         </>
        );
}

}
export default Clock;