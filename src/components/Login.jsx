import { useState } from "react";
import { onLoginComplete } from "../service/data-service";
import ThunderIcon from '../assets/icons/thunder.svg';

function Login({ setToken }) {
  const [error, setError] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    onLoginComplete(form.username.value, form.password.value)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }

  return (
    <div>
        <nav className="navbar bg-light mb-2">
        <div className="container-fluid">
          
            <span className="navbar-brand mb-0 h1"><img className="icon" src={ThunderIcon} alt="" /> Three pics</span>
                
        </div>
      </nav>
      <div  className="container text-center">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="username"
                className="form-control mb-3"
                placeholder="username"
                />
                <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="password"
                />
                <button type="submit" className="btn btn-success">
                Login
                </button>
            </form>
        </div>
    </div>
  );
}

export default Login;