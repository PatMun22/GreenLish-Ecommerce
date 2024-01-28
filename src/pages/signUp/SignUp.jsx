import { Link } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { LiaUnlockAltSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { LuAsterisk } from "react-icons/lu";
import "./signup.scss";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signin-container">
        <h1>SIGN UP</h1>
        <p>It&apos;s easy to create account</p>
        <form action="">
          <fieldset>
            <legend>
              Full Name <LuAsterisk className="asterisk" />
            </legend>
            <input type="text" />
            <LuUser2 className="user-icon" />
          </fieldset>
          <fieldset>
            <legend>
              User Name <LuAsterisk className="asterisk" />
            </legend>
            <input type="text" />
            <LuUser2 className="user-icon" />
          </fieldset>
          <fieldset>
            <legend>
              Email <LuAsterisk className="asterisk" />
            </legend>
            <input type="email" />
            <MdEmail className="lock-icon" />
          </fieldset>
          <fieldset>
            <legend>
              Password <LuAsterisk className="asterisk" />
            </legend>
            <input type="password" />
            <LiaUnlockAltSolid className="lock-icon" />
          </fieldset>
          <fieldset>
            <legend>
              Confirm Password <LuAsterisk className="asterisk" />
            </legend>
            <input type="text" />
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
