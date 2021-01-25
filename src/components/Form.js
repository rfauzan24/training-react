import React from "react";

class Form extends React.Component{
  constructor() {
    super();
    this.state = { value: "Write your name" };
  }

  hanldeFormSubmit = (event) => {
    event.preventDefault();
    var huruf = this.state.value.toUpperCase();
    alert(huruf);
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value});
  }

  render() {
    return (
        <form onSubmit={this.hanldeFormSubmit}>
            <input id="name" type="text" value={this.state.value.toUpperCase()} onChange={(event) => this.handleInputChange(event)} />
            <input type="submit"/>
        </form>
    )
  }
}

export default Form;