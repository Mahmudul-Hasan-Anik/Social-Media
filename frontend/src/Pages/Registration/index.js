import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

const Registration = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

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
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setFirstNameError("");
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setLastNameError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Name validation
    if (!firstName) {
      setFirstNameError("First name required");
    }
    if (!lastName) {
      setLastNameError("Last name required");
    }

    // Email validation
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
          <h1 className="text-lg font-medium text-center">Join to Facebook</h1>
          <form onSubmit={handleSubmit}>
            <div className=" flex">
              <div className=" mr-2 w-1/2">
                <input
                  type="text"
                  onChange={handleFirstName}
                  placeholder="First name"
                  className=" py-2 w-full rounded-md px-3 mt-4 focus:outline-none border border-[#D9D9D9]"
                />
                <p className=" text-red-500">
                  {firstNameError ? firstNameError : ""}
                </p>
              </div>
              <div className=" ml-2 w-1/2">
                <input
                  type="text"
                  onChange={handleLastName}
                  placeholder="Last name"
                  className=" py-2 w-full rounded-md px-3 mt-4 focus:outline-none border border-[#D9D9D9] "
                />
                <p className=" text-red-500">
                  {lastNameError ? lastNameError : ""}
                </p>
              </div>
            </div>
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

            <p className=" -mb-4 mt-3">Date of birth</p>
            <div className=" flex">
              <select
                name="date"
                id=""
                className="mr-2 w-1/3 py-2 rounded-md px-3 mt-4 focus:outline-none border border-[#D9D9D9]"
              >
                <option value="30">Day</option>
                <option value="30">30</option>
              </select>
              <select
                name="month"
                className="mr-2 w-1/3 py-2 rounded-md px-3 mt-4 focus:outline-none border border-[#D9D9D9]"
              >
                <option value="month">Month</option>
                <option value="month">Sep</option>
              </select>
              <select
                name="year"
                className="mr-2 w-1/3 py-2 rounded-md px-3 mt-4 focus:outline-none border border-[#D9D9D9]"
              >
                <option value="year">Year</option>
                <option value="year">2022</option>
              </select>
            </div>

            <div>
              <p className=" -mb-4 mt-2">Gender</p>
              <div className=" flex">
                <label className="w-1/3">
                  <div className=" mr-2  relative py-2 rounded-md px-3 mt-4 focus:outline-none border border-[#D9D9D9]">
                    <p>Female</p>
                    <input
                      type="radio"
                      name="gender"
                      className=" absolute right-3 top-4"
                    />
                  </div>
                </label>
                <label className=" w-1/3">
                  <div className=" mr-2 relative py-2 rounded-md px-3 mt-4 focus:outline-none border border-[#D9D9D9]">
                    <p>Male</p>
                    <input
                      type="radio"
                      name="gender"
                      className=" absolute right-3 top-4"
                    />
                  </div>
                </label>
                <label className=" w-1/3">
                  <div className=" mr-2 relative py-2 rounded-md px-3 mt-4 focus:outline-none border border-[#D9D9D9]">
                    <p>Custom</p>
                    <input
                      type="radio"
                      name="gender"
                      className=" absolute right-3 top-4"
                    />
                  </div>
                </label>
              </div>
            </div>

            <div className=" text-center">
              <button
                onClick={handleSubmit}
                className="py-1 px-6 rounded-md bg-green-600 text-white font-medium text-lg my-5 focus:outline-none border border-[#D9D9D9]"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
