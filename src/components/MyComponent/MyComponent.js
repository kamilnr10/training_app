import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="your text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

export default MyComponent;
