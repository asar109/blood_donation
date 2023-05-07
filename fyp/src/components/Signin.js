import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginf from "../images/loginf.png";
import axios from "axios";

const Signin = ({ setUser }) => {
  const navigate = useNavigate();
  const [user, setUserState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState({
      ...user,
      [name]: value,
    });
  };
  const forgetHandler = () => {
    navigate("/forget/password");
  };

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/v1/login", user);
      localStorage.setItem("name", res.data.user.name);
      localStorage.setItem("email", res.data.user.email);
      localStorage.setItem("phone", res.data.user.phoneNumber);
      localStorage.setItem("_id", res.data.user._id);
      localStorage.setItem("isAuthenticated", true);
      setUser(res.data.user);
      navigate("/userprofile");
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  useEffect(() => {
    navigate("/signin");
  }, [navigate])
  
  return (
    <>
      <div id="box-bg2">
        <div id="login-box2">
          <div className="left2">
            <h1 className="signinH2">Login</h1>
            <br />

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
              type="submit"
              name="signup_submit"
              value="Login"
              onClick={login}
            />
            <button type="submit" className="frgt-pass" onClick={forgetHandler}>
              {" "}
              Forgot Password
            </button>
          </div>

          <div className="verticle-line2"></div>

          <div className="right2">
            <img className="img2" src={loginf} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
