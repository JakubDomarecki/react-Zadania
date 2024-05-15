import React, { Component } from "react";

export class HelloWorld extends Component {
    state = {
        txt: "Hello, World!",
    };

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ txt: "Hi, Everyone!" });
        }, 5 * 1000);

        console.log("mount");
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
        console.log("unmount");
    }

    render() {
        const { txt } = this.state;
        return <h1>{txt}</h1>;
    }
}

export default HelloWorld;