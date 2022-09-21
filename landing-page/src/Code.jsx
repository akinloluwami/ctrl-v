import { useEffect } from "react";
import { useState } from "react";

const Code = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");

  function verifyOTP(e) {
    const OTP = "6h5s3n";
    e.preventDefault();
    if (OTP === otp) {
      setError(false);
      setSuccess(true);
      setMessage("Email has been verified");
    } else {
      setSuccess(false);
      setError(true);
      setMessage("Invalid OTP");
    }
  }

  return (
    <div>
      <h1>Verify OTP</h1>

      {error && (
        <h1
          style={{
            color: "red",
          }}
        >
          {message}
        </h1>
      )}
      {success && (
        <h1
          style={{
            color: "green",
          }}
        >
          {message}
        </h1>
      )}

      <form onSubmit={verifyOTP}>
        <input
          type="text"
          onChange={(e) => {
            setOtp(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Code;
