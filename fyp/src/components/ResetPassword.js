import React, { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
const ResetPassword = () => {
  const {token}  = useParams();
  
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");


  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      try {
        await axios.put(`http://localhost:4000/api/v1/reset/password/${token}`, {
          confirmPassword,
          newPassword,
        });
        setMessage("Password reset successfully");
      } catch (error) {
        console.error(error);
        console.log(error)
      }
    }
  };

  return (
    <div className="reset-password">
      <h2>Reset Password</h2>
      <div className="form-group">
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <button onClick={handleResetPassword}>Change Password</button>
      {message && <p className="message">{message}</p>}
      <style jsx>{`
        .reset-password {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h2 {
          margin-bottom: 1rem;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
        }
        input[type="password"] {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        button {
          background-color: #dc143c;
          color: #fff;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
        }
        button:hover {
          background-color: #b3001b;
        }
        .message {
          margin-top: 1rem;
          font-weight: bold;
          color: #dc143c;
        }
      `}</style>
    </div>
  );
};

export default ResetPassword;
