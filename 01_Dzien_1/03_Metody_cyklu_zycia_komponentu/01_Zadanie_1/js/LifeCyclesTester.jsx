import React, { Component } from "react";

export class LifeCyclesTester extends Component {
    constructor(props) {
        super(props);

        this.state = {
            luckyNumber: 13,
        };

        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");

        return state;
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextState);

        return nextState.luckyNumber > 0.5;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div>
                <p>{this.state.luckyNumber}</p>
                <button
                    type="button"
                    onClick={() => this.setState({ luckyNumber: Math.random() })}
                >
                    update
                </button>
            </div>
        );
    }
}

export default LifeCyclesTester;