import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pp from "../images/pp.png";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const UserProfile = ({ name, email, phone }) => {
  const capitalizedFirstName = name.charAt(0).toUpperCase() + name.slice(1);
  const userId = localStorage.getItem("_id");
  const navigate = useNavigate();
  const [showalert, setshowalert] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const handledonor = () => {
    navigate("/registerdonor");
  };
  const handleexpr = () => {
    navigate("/userexperience");
  };
  const handleprf = () => {
    navigate("/postrequestform");
  };

  const handlehb = () => {
    navigate("/healthblog");
  };
  const handlefindb = () => {
    navigate("/findblood");
  };
  const handlevposts = () => {
    navigate("/viewposts");
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "false" || isLoggedIn === null) {
    }
    const checker = async () => {
      const res = await axios.put(
        `http://localhost:4000/api/v1/elegibility/checker/${userId}`
      );
      setshowalert(res.data.donor.eligibility);
    };
    checker();
  }, [navigate, userId]);

  return (
    <>
      {showalert ? (
        <Alert variant="success">
          Congratulations! You are eligible to donate blood today. Our records
          show that 90 days have passed since your last donation, which means
          you can help save lives by donating again. Thank you for your
          generosity and commitment to helping others in need.
        </Alert>
      ) : null}

      <div className="up-bg">
        <div className="prf-box">
          <div className="profile-pic"></div>
          <img className="pp" src={pp} alt="" />
          <br />
          <h3 className="u-name">
            Name: <span>{capitalizedFirstName}</span>
          </h3>

          <h4 className="u-email">Email: {email}</h4>
          <h4 className="u-ph">Phone: {phone}</h4>
          <div className="usr-btns">
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handledonor}>Register as Donor</button>
            <button onClick={handlefindb}>Find Blood</button>
            <button onClick={handleprf}>Blood Request</button>
            <button onClick={handlevposts}>Posts</button>
            <button onClick={handlehb}>Health Blogs</button>
            <button onClick={handleexpr}>User Experience</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
