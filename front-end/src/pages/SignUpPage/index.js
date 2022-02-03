import "./style.css";
import { Link } from "react-router-dom";

function SignUpPage() {
  /*const [register, setRegister] = useState([]);
  const getRegister = async (post) => {
    try {
      const results = await axios.post(
        "http://localhost:4000/api/users/register",
        { post }
      );
      console.log(results);
    } catch (err) {
      console.log(err.message);
    }
  };*/

  return (
    <div id="app">
      <div className="app-view">
        <header className="app-header">
          <h1>The Reading Log</h1>
          Welcome,
          <br />
          <span className="app-subheading">
            enter your personal details
            <br />
            to start your Reading Log.
          </span>
        </header>
        <input type="username" required placeholder="Username" />
        <input
          type="email"
          required
          pattern=".*\.\w{2,}"
          placeholder="Email Address"
        />
        <input type="password" required placeholder="Password" />
        <a href="#welcome" className="app-button">
          Register
        </a>
        <div className="app-register">
          Already a user? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
