import React, { Component } from "react";

export class ClockDate extends Component {
    render() {
        const { date } = this.props;

        return <h1>{date.toLocaleDateString()}</h1>;
    }
}

export default ClockDate;