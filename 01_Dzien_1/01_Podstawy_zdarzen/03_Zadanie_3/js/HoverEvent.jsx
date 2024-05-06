import { Component } from "react";

// const HoverEvent = () => {
//     const handleMouse = (e) => console.log("Najechano na przycisk!");
//
//     return (
//         <button type="button" onMouseEnter={handleMouse}>
//             Klik
//         </button>
//     );
// };
//
// export default HoverEvent;

class HoverEvent extends Component {
    handleMouse = (e) => console.log("Najechano na przycisk!");

    render() {
        return (
            <button type="button" onMouseEnter={this.handleMouse}>
                Klik
            </button>
        );
    }
}

export default HoverEvent;