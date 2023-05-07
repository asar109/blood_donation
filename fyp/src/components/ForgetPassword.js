import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/forgot/password",
        { email }
      );
      setMessage(res.data.message);
    } catch (error) {
      alert(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2 style={{ fontWeight: "bold" }}>Forgot Your Password?</h2>
      <p style={{ color: "#999", width: "70%", margin: "3rem" }}>
        Please provide your email address and we'll send you a password reset
        link. Once you submit your email, we'll take care of the rest. You'll
        receive a confirmation message below once the email has been
        successfully sent. Thank you for choosing our blood donation platform!"
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" style={{ marginLeft: "1rem" }}>
          {isLoading ? "Loading..." : "Reset Password"}
        </button>
      </form>
      {message && (
        <p
          style={{
            color: "red",
            margin: "2rem",
            fontWeight: "bold",
            background: "#ddd",
            borderRadius: "10px",
            padding: "8px 16px",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default ForgotPassword;
