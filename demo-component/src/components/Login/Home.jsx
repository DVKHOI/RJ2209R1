import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <h1 className="login">Welcome</h1>
          <button className="btn-login" onClick={this.props.onLogOut}>
            Log out
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
