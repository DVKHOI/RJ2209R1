import { Component } from "react";

class ChangeBgColorClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: this.state.color,
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: "auto",
          }}
        />
      </div>
    );
  }
}
