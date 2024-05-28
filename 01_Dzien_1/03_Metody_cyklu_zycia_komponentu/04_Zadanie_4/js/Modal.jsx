import {Component} from "react";

class Modal extends Component {
    // STATE
    state = {
        modalOpen: false,
    };

    // LOGIC
    componentDidMount() {
        this.timerId = setTimeout(() => {
            this.setState({modalOpen: true});
        }, 2 * 1000);
    }

    // UI
    render() {
        const { heading } = this.props;
        const { modalOpen } = this.state;

        return (
            modalOpen ? <h2>{heading}</h2> : null
        );
    }

}
export default Modal;