import {Component} from "react";

class TrafficLights extends  Component {
    state = {
      number: 1
    };
    componentDidMount() {
        this.intervalId = setInterval(() => {
           this.setState((state) => {
               let nextNumber = state.number % 4 + 1;
               return { number: nextNumber };
           });
        }, 2 * 1000);
    }



    render() {
        const {number} = this.state;
        const { redTime, yellowTime, greenTime } = this.props;
        return (
          <div>
              <div style={{
                  backgroundColor: number === 1 ? 'red' : 'black',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%'
              }}>
              </div>
              <div style={{
                  backgroundColor: number === 2 || number === 4 ? 'yellow' : 'black',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  marginTop: '20px'
              }}>
              </div>
              <div style={{
                  backgroundColor: number === 3 ? 'green' : 'black',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  marginTop: '20px'
              }}>
              </div>
          </div>
        );
    }
}

export default TrafficLights;