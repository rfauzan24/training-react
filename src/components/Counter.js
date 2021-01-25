import React, { useState } from "react";

// class Counter extends React.Component {
//     constructor() {
//         super();
//         this.state = { counter: 0};
//         this.timer = null;
//     }

//     componentDidMount() {
//         this.time = setInterval(() => {
//             this.setState({ counter: this.state.counter+1});
//         }, 1000);
//     }

//     componentWillMount() {
//         clearInterval(this.timer);
//     }

//     render() {
//         return <span>{this.state.counter}</span>
//     }
// }

const Counter = () => {
  const [clicks, setClicks] = useState(0);

  function handleButtonClick() {
      setClicks(clicks+1);
  }

  return (
    <div>
        <span>You clicked { clicks } clicks</span>
        <br/>
        <button onClick={handleButtonClick}>Click me!</button>
    </div>
  );
};

export default Counter;