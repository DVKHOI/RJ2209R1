import { Component } from "react";

class CountClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  decrease = () => {
    if (this.state.number <= 0) {
      alert("number k duoc nho hon 0");
      return;
    }

    this.setState({ number: this.state.number - 1 });
  };
  increase = () => {
    if (this.state.number >= 10) {
      alert("number khong duoc lon hon 10");
      return;
    }

    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <div style={{ textAlign: "center", padding: 30 }}>
        <button onClick={this.decrease}>Decrease</button>
        <span style={{ padding: 10 }}>{this.state.number}</span>
        <button
          className="inline-block p-5 bg-slate-400"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}
export default CountClass;
