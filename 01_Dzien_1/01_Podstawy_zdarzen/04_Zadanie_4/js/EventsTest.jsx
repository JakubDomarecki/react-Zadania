// const EventsTest = () => {
//     const style = {
//       width: "100px",
//       height: "100px",
//       backgroundColor: "red",
//     };
//
//     const Click = () => {
//         console.log("kliknąłeś na przycisk");
//     };
//
//     const MouseOver = () => {
//         console.log("najehchałeś na przycisk");
//     };
//
//     const MouseOut = () => {
//         console.log("już nie pokazujesz na przycisk");
//     };
//
//   return (
//       <div style={style} onClick={Click} onMouseOver={MouseOver} onMouseOut={MouseOut}></div>
//   );
// };
//
// export default EventsTest;

import {Component} from "react";
import '../css.css';

class EventsTest extends Component {
    style = {
      width: "100px",
      height: "100px",
      backgroundColor: "red",
    };

   Click = () => {
        console.log("kliknąłeś na przycisk");
    };

   MouseOver = () => {
        console.log("najehchałeś na przycisk");
    };

   MouseOut = () => {
        console.log("już nie pokazujesz na przycisk");
    };

   render() {
       return (
           <>
               <div style={this.style} onClick={this.Click} onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}></div>
               <div className="divSecond" onClick={this.Click} onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}></div>
           </>
       );
   }
}

export default EventsTest;







// import React from "react";
// import "./EventsTest.css";
//
// const EventsTest = () => {
//     const logEventName = (txt) => console.log(`Event: ${txt}`);
//
//     return (
//         // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
//         <div
//             onClick={(e) => logEventName("click")}
//             onMouseEnter={(e) => logEventName("mouseEnter")}
//             onMouseLeave={(e) => logEventName("mouseLeave")}
//         />
//     );
// };
//
// export default EventsTest;