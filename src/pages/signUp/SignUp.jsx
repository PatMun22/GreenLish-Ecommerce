import { Link } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { LiaUnlockAltSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { LuAsterisk } from "react-icons/lu";
import "./signup.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const SignUp = () => {
  const { errors, formData, handleChange, handleSubmit } =
    useContext(ShopContext);

  const inputStyle = { color: "red", fontSize: "12px" };

  return (
    <div className="signup">
      <pre>{JSON.stringify(formData, undefined, 2)}</pre>
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
              onChange={handleChange}
            />

            <LuUser2 className="user-icon" />
          </fieldset>
          {errors.fullName && <span style={inputStyle}>{errors.fullName}</span>}
          <fieldset>
            <legend>
              User Name <LuAsterisk className="asterisk" />
            </legend>
            <input
              type="text"
              placeholder="Enter Your User Name"
              name="userName"
              onChange={handleChange}
            />

            <LuUser2 className="user-icon" />
          </fieldset>
          {errors.userName && <span style={inputStyle}>{errors.userName}</span>}
          <fieldset>
            <legend>
              Email <LuAsterisk className="asterisk" />
            </legend>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleChange}
            />

            <MdEmail className="lock-icon" />
          </fieldset>
          {errors.email && <span style={inputStyle}>{errors.email}</span>}
          <fieldset>
            <legend>
              Password <LuAsterisk className="asterisk" />
            </legend>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={handleChange}
            />

            <LiaUnlockAltSolid className="lock-icon" />
          </fieldset>{" "}
          {errors.password && <span style={inputStyle}>{errors.password}</span>}
          <fieldset>
            <legend>
              Confirm Password <LuAsterisk className="asterisk" />
            </legend>
            <input
              type="text"
              placeholder="Confirm Your Password"
              name="confirmPassword"
              onChange={handleChange}
            />

            <LiaUnlockAltSolid className="lock-icon" />
          </fieldset>
          {errors.confirmPassword && (
            <span style={inputStyle}>{errors.confirmPassword}</span>
          )}
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
