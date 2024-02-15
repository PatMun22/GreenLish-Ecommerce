import { Link } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { LiaUnlockAltSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { LuAsterisk } from "react-icons/lu";
import "./signup.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const SignUp = () => {
  const { errors, handleChange, handleSubmit, value } = useContext(ShopContext);

  return (
    <div className="signup">
      <div className="signin-container">
        <h1>SIGN UP</h1>
        <p>It&apos;s easy to create account</p>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Full Name <LuAsterisk className="asterisk" />
            </legend>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              name="fullName"
              value={value}
              onChange={handleChange}
            />
            {errors.fullName && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.fullName}
              </span>
            )}
            <LuUser2 className="user-icon" />
          </fieldset>
          <fieldset>
            <legend>
              User Name <LuAsterisk className="asterisk" />
            </legend>
            <input
              type="text"
              placeholder="Enter Your User Name"
              name="userName"
              value={value}
              onChange={handleChange}
            />
            {errors.userName && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.userName}
              </span>
            )}
            <LuUser2 className="user-icon" />
          </fieldset>
          <fieldset>
            <legend>
              Email <LuAsterisk className="asterisk" />
            </legend>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={value}
              onChange={handleChange}
            />
            {errors.email && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.email}
              </span>
            )}
            <MdEmail className="lock-icon" />
          </fieldset>
          <fieldset>
            <legend>
              Password <LuAsterisk className="asterisk" />
            </legend>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={value}
              onChange={handleChange}
            />
            {errors.password && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.password}
              </span>
            )}
            <LiaUnlockAltSolid className="lock-icon" />
          </fieldset>
          <fieldset>
            <legend>
              Confirm Password <LuAsterisk className="asterisk" />
            </legend>
            <input
              type="text"
              placeholder="Confirm Your Password"
              name="confirmPassword"
              value={value}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.confirmPassword}
              </span>
            )}
            <LiaUnlockAltSolid className="lock-icon" />
          </fieldset>
          <p>
            Have an account?{" "}
            <Link to="/login" className="redirection-link">
              Sign In
            </Link>
          </p>
          <button type="submit" className="signin-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
