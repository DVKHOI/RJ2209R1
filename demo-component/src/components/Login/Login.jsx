import { Component } from "react";
import Home from "./Home";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  handleLogIn = () => {
    this.setState({ isLogin: true });
  };

  handleLogOut = () => {
    this.setState({ isLogin: false });
  };
  render() {
    const { isLogin } = this.state;
    if (isLogin) return <Home onLogOut={this.handleLogOut} />;
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <h1 className="login">Please Log in</h1>
          <button className="btn-login" onClick={this.handleLogIn}>
            Log in
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
