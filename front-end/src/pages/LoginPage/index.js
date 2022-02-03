import "./style.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div id="app">
      <div className="app-view">
        <header className="app-header">
          <h1>The Reading Log</h1>
          Welcome back,
          <br />
          <span className="app-subheading">
            sign in to continue
            <br />
            to your Reading Log.
          </span>
        </header>
        <input
          type="email"
          required
          pattern=".*\.\w{2,}"
          placeholder="Email Address"
        />
        <input type="password" required placeholder="Password" />
        <a href="#welcome" className="app-button">
          Login
        </a>
        <div className="app-register">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
