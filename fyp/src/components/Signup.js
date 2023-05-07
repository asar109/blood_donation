import React, { useState } from "react";
import signin from "../images/signupff.png";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    retypepassword: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = async () => {
    const { name, email, password, retypepassword, phoneNumber } = user;

    const { data } = await axios
      .post(
        "http://localhost:4000/api/v1/register",
        { name, email, password, retypepassword, phoneNumber },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        alert("You are Registered");
      })
      .catch((err) => {
        if (err.response.data.message === "Duplicate key Entered") {
          alert("Email already exists");
        } else {
          alert(err.response.data.message);
        }
      });
  };

  return (
    <>
      <div id="box-bg">
        <div id="login-box">
          <div className="left">
            <h1 className="signupH1">Sign Up</h1>

            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="E-mail"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <input
              type="password"
              name="retypepassword"
              value={user.retypepassword}
              placeholder="Retype password"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phoneNumber"
              value={user.phoneNumber}
              placeholder="Phone"
              onChange={handleChange}
            />

            <input
              type="submit"
              name="signup_submit"
              onClick={register}
              value="Register"
            />
          </div>

          <div class="verticle-line"></div>

          <div class="right">
            <img className="img1" src={signin} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
