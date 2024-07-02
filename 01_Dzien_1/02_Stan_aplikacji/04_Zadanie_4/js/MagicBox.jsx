import {Component} from "react";

const RandomColor = () =>'#' + Math.floor(Math.random() * 16777215).toString(16);


class MagicBox extends Component {
    INIT_COLOR = "#000";

    state = {
        color: this.INIT_COLOR,
    };

    AddColor = () => this.setState({ color: RandomColor()});
    render() {
        const { color } = this.state;
        return (
          <div style={{ backgroundColor: color, width: '200px', height:'100px'}} onMouseOver={this.AddColor}></div>
        );
    }
}
export default MagicBox;