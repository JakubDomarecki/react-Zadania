// const CurrentDate = () => {
//     state = {
//         Date: 0,
//     };
//     const CurrentDate = () => {
//         const date = new Date();
//         console.log(date);
//     };
//
//     return (
//         <button onClick={CurrentDate}>Zaktualizuj datę</button>
//     );
// };
// export default CurrentDate;


import {Component} from "react";

class CurrentDate extends Component {
    state = {
        date: new Date(),
    };
        CurrentDateFunc = () => {
            console.log(new Date());
            this.setState((prevState) => {
                return {
                    counter: prevState.date + 1,
                };
            });
    };
        render() {
            return (
                <button onClick={this.CurrentDateFunc}>Zaktualizuj datę</button>
            );
        }
}
export default CurrentDate;

