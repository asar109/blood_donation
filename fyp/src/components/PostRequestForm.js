import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import prf from "../images/prf.jpg";
import axios from "axios";

const PostRequestForm = () => {
  const [name, setName] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlevpost = async (e) => {
    await axios.post(
      "http://localhost:4000/api/v1/post/request",
      { name, bloodType, location, message },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    navigate("/viewposts");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="'regD-bg">
      <div className="regD-box">
        <h1 className="centerhead-regD">Post a Blood Request</h1>

        <form onSubmit={handleSubmit}>
          <div className="regD-allinp">
            <label
              style={{
                color: "black",
                marginLeft: "50px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Name
            </label>
            <input
              className="inp-prf"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              style={{
                color: "black",
                marginLeft: "50px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Blood Group
            </label>

            <select
              className="inp-regD"
              id="bloodType"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              required
            >
              <option value="">-- Select Blood Type --</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div>
            <label
              style={{
                color: "black",
                marginLeft: "50px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Location
            </label>
            <input
              className="inp-prf"
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              style={{
                color: "black",
                marginLeft: "50px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Message
            </label>
            <textarea
              className="prf-ta"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="btn-reg" onClick={handlevpost} type="submit">
            Post Request
          </button>
        </form>
        <div class="right-regD">
          <img className="img-regD" src={prf} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PostRequestForm;
