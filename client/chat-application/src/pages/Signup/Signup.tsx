import React from "react";
import "./Signup.css";
import Headers from "../../components/Headers/Headers";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import signupImage from "../../assets/Sign up-cuate.png";
import InputBox from "../../components/InputBox/InputBox";
import PasswordBox from "../../components/PasswordBox/PasswordBox";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <Headers />
      <section className="login-outer-box p-10">
        <div className="login-inner-box m-5 flex justify-around bg-gray-200">
          <div className="login-image">
            <img src={signupImage} alt="image" />
          </div>
          <div className="card signup-card m-10 shadow-md relative">
            <h1 className="mt-5 text-3xl text-white font-semibold mb-10">
              Welcome New User !
            </h1>
            <form action="" className="signup-form">
              <InputBox type="text" name="username" label="Username" />
              <InputBox type="text" name="username" label="Email" />
              <PasswordBox type="password" name="password" label="Password" />
            </form>
            <div className="mx-10 mt-5 flex justify-between items-center">
              <p className="text-left text-slate-700 font-serif">
                Already have account
                <Link to="/login" className=" text-indigo-600">
                  {" "}
                  Login here?
                </Link>
                <br />
                Are You agree with our terms and conditions.
              </p>
              <div className="mx-5 bg-green-950 text-white px-3 py-2 rounded-2xl w-1/2 loginbtn font-semibold">
                <Link to="/">
                  <Button name="Signup" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
