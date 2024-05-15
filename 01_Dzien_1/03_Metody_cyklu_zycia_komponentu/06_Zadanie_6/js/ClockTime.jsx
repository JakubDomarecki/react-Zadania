import React, { Component } from "react";

export class ClockTime extends Component {
    render() {
        const { date } = this.props;

        return <div>{date.toLocaleTimeString()}</div>;
    }
}

export default ClockTime;