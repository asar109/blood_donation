import React, { useState } from "react";
import calpic from "../images/calpic.png";

function Calculator() {
  // state
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [hb, setHb] = useState("");
  const [message, setMessage] = useState("");

  let calcElig = (event) => {
    //prevent submitting to the server
    event.preventDefault();

    if (weight === 0 || age === 0 || hb === 0) {
      alert("Please enter a valid Weight, Age and HB count");
    } else {
      // let calcElig = (weight > 45 && age >=18>60 && hb >= 12)
      setMessage("You are Healthy enough to Donate Blood💪🩸");

      // Logic for message

      if (weight < 45 || age < 18 || hb < 12) {
        setMessage("You are not Eligible right now to Donate Blood 😢");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="cl-bg">
        <div className="cl-box">
          <h1 className="centerhead">Blood Donor Eligibility Calculator</h1>
          <hr className="HoriLine" />
          <br />
          <form onSubmit={calcElig}>
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
                Weight (lbs)
              </label>
              <input
                className="inp"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              />

              <br />

              <label
                style={{
                  color: "black",
                  marginLeft: "50px",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Age (years)
              </label>
              <input
                className="inp"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
              <br />

              <label
                style={{
                  color: "black",
                  marginLeft: "50px",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Haemoglobin(g/dl)
              </label>
              <input
                className="inp"
                value={hb}
                onChange={(event) => setHb(event.target.value)}
              />
            </div>

            <button className="btn1" type="submit">
              Submit
            </button>
            <button className="btn2" onClick={reload} type="submit">
              Reload
            </button>
            <h3 className="res-heading">Result:</h3>
            <p className="res-para">{message}</p>
            <img className="calImg" src={calpic} alt="" />
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Calculator;
