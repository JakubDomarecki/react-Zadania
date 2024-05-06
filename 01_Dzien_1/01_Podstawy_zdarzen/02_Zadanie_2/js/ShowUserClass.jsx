import { Component } from "react";

class ShowUserClass extends Component {
    handleClick = (e) => {
        console.log(this.props.name, this.props.surname);
    };

    render() {
        return (
            <button type="button" onClick={this.handleClick}>
                Dane użytkownika
            </button>
        );
    }
}

export default ShowUserClass;