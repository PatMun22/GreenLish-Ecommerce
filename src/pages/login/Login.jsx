import { LuUser2 } from "react-icons/lu";
import { LiaUnlockAltSolid } from "react-icons/lia";
import "./login.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Login = () => {
  const { errors, handleSubmit, handleChange, formData } =
    useContext(ShopContext);
  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-head">SIGN IN</h1>
        <p className="login-descrip">To manage your order please login first</p>
        <form onSubmit={handleSubmit} className="login-form">
          <fieldset>
            <legend>User Name or Email</legend>
            <input
              type="text"
              value={formData.userName || formData.email}
              onChange={handleChange}
            />
            <LuUser2 className="user-icon" />
          </fieldset>
          {errors.email && <span>{errors.email}</span>}
          <fieldset>
            <legend>Password</legend>
            <input
              type="text"
              value={formData.password}
              onChange={handleChange}
            />
            <LiaUnlockAltSolid className="lock-icon" />
          </fieldset>
          <div className="redirection-links">
            <p>
              Forgot Password?{" "}
              <Link to="#" className="redirection-link">
                Recover
              </Link>{" "}
            </p>
            <p>
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="redirection-link">
                Sign Up
              </Link>
            </p>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
