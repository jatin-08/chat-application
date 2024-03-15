import React from "react";
import Headers from "../../components/Headers/Headers";
import "./Login.css";
import loginImage from "../../assets/login.png";
import Button from "../../components/Button/Button";
import InputBox from "../../components/InputBox/InputBox";
import PasswordBox from "../../components/PasswordBox/PasswordBox";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Headers />
      <section className="login-outer-box p-10">
        <div className="login-inner-box m-5 flex justify-around bg-gray-200">
          <div className="login-image">
            <img src={loginImage} alt="image" />
          </div>
          <div className="card m-10 shadow-md relative">
            <h1 className="mt-10 text-3xl text-white font-semibold mb-10">
              Welcome Back Captain!
            </h1>
            <form action="" className="m-auto w-11/12">
              <InputBox type="text" name="username" label="Email or Username" />
              <PasswordBox type="password" name="password" label="Password" />
              <p className="forgot-text text-right">
                <Link to="/forgot">Forgot Password ?</Link>
              </p>
            </form>
            <div className="mx-10 mt-5 flex justify-between items-center">
              <p className="text-left text-slate-700 font-serif">
                New User
                <Link to="/signup" className=" text-indigo-600">
                  {" "}
                  Signup here?
                </Link>
                <br />
                Are You agree with our terms and conditions.
              </p>
              <div className="mx-5 bg-green-950 text-white px-3 py-2 rounded-2xl w-1/2 loginbtn font-semibold">
                <Link to="/chat">
                  <Button name="Login" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
