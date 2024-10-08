import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

// function UpperCaseText(props) {
//   return <h2>{props.text.toLocaleUpperCase()}</h2>;
// }
class UpperCaseText extends Component {
  render() {

    const {text} = this.props;

    return <h2>{text.toLocaleUpperCase()}</h2>;
  }
}


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<UpperCaseText text="Hello, World!"/>);
