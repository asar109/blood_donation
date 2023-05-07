import React from "react";
import { useNavigate } from "react-router-dom";

const FindBlood = () => {
  const navigate = useNavigate();

  const handledonordetail = () => {
    navigate("/donorsdetails");
  };
  const handlelocation = () => {
    navigate("/livelocation");
  };
  return (
    <>
      <div className="findblood-bg">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handlelocation} className="findb-btn">
            By Live Location
          </button>
          <button onClick={handledonordetail} className="findb-btn">
            Donor Details
          </button>
        </div>
      </div>
    </>
  );
};
export default FindBlood;
