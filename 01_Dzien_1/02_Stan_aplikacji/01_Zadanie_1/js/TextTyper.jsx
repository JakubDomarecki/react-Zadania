import React, { Component } from "react";

class TextTyper extends Component {
    state = {
        text: this.props.text,
        letterIndex: 0,
    };


    // handleIncr = () =>
    //     this.setState((state) => ({ letterIndex: state.letterIndex + 1 }));

    handleIncr1 = () =>
        this.setState((state) => {
            return {
                letterIndex: state.letterIndex + 1
            };
        });

    handleDecr = () =>
        this.setState((prevState) => ({ letterIndex: prevState.letterIndex - 1 }));

    render() {
        const { text, letterIndex } = this.state;
        const letters = text
            .split("")
            .filter((letter, i) => i <= letterIndex)
            .join("");

        return (
            <div>
                <h1>{letters}</h1>
                <button type="button" onClick={this.handleIncr1}>
                    +1
                </button>
                <button type="button" onClick={this.handleDecr}>
                    -1
                </button>
            </div>
        );
    }
}

export default TextTyper;