import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleShow = () => {
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  console.log(show);
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Email is required");
    } else {
      if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        setEmailError("Please enter a valid email address");
      }
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
    } else {
      if (!password.match(/^(?=.*[a-z])/)) {
        setPasswordError("Must contain at least 1 lowercase");
      } else if (!password.match(/^(?=.*[A-Z])/)) {
        setPasswordError("Must contain at least 1 uppercase");
      } else if (!password.match(/^(?=.*[0-9])/)) {
        setPasswordError("Must contain at least 1 numeric character");
      } else if (!password.match(/^(?=.*[!@#$%^&*])/)) {
        setPasswordError("Must contain at least one special character");
      } else if (!password.match(/^(?=.{8,})/)) {
        setPasswordError("Must be eight characters or longer");
      }
    }
  };

  return (
    <div className=" max-w-[1024px] mx-auto">
      <div className="lg:flex justify-between lg:mt-20 px-3 lg:px-0">
        <div className=" lg:w-[368px] m-auto text-center lg:text-left">
          <picture>
            <img
              src="./image/facebook.png"
              loading="lazy"
              className=" ml-11 tablet:ml-48 tablet:lg:-ml-7"
            />
          </picture>
          <p className=" text-xl">
            Facebook helps you connect and share with the people in your life.{" "}
          </p>
        </div>

        <div className=" lg:w-[400px] border shadow-md p-4 mt-10 lg:mt-0">
          <h1 className="text-lg font-medium text-center">
            Log in to Facebook
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                onChange={handleEmail}
                placeholder=" Enter email"
                className=" py-2 w-full rounded-md px-3 mt-4 focus:outline-none border border-[#D9D9D9]"
              />
              <p className=" text-red-500">{emailError ? emailError : ""}</p>
            </div>
            <div className=" relative">
              <input
                type={show ? "text" : "password"}
                onChange={handlePassword}
                placeholder=" Enter password"
                className=" py-2 w-full rounded-md px-3 mt-4 focus:outline-none border border-[#D9D9D9]"
              />
              <p className=" text-red-500">
                {passwordError ? passwordError : ""}
              </p>
              <p
                className=" absolute top-[30px] right-4 cursor-pointer"
                onClick={handleShow}
              >
                {show ? <BsEyeFill /> : <BsEyeSlashFill />}
              </p>
            </div>
            <button
              onClick={handleSubmit}
              className="py-2 w-full rounded-md bg-primary-blue text-white font-bold text-xl mt-4 focus:outline-none border border-[#D9D9D9]"
            >
              Log In
            </button>

            <p className=" text-sm underline text-center mt-3 text-primary-blue">
              <Link to="/forgot">Forgotten password</Link>
            </p>

            <div className=" text-center">
              <button className="py-2 px-3 rounded-md bg-green-500 text-white font-semibold text-xl my-4 focus:outline-none border border-[#D9D9D9]">
                <Link to="/registration">Create an account</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
