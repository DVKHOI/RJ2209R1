import React, { Component } from "react";
import Hello from "./Hello";

class AlertClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  delete = () => {
    this.setState({ display: false });
  };

  render() {
    let comp;
    if (this.state.display) {
      comp = <Hello />;
    } else {
      comp = <h1>Component WillUnmount</h1>;
    }
    return (
      <div style={{ textAlign: "center" }}>
        {comp}
        <button onClick={this.delete}>Delete the component</button>
      </div>
    );
  }
}

export default AlertClass;
