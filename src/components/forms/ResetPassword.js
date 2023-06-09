import React, { useState } from 'react';
import './forgetpassword.css'
import axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/secure/reset";
    const data={
      email:`${email}`,
      resetToken:`${ window.location.href.split("/")[5]}`
    }
    axios.patch(url,data).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })
  };

  return (
    <div className="content-container">
      <div className="forgot-password-container">
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <h2 className="header-reset">Reset password</h2>
          <input
            type="email"
            placeholder="Email"
            className="user-email"
            name="cpassword"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div onChange={(e) => setError(e.target.value)}className="error-message" style={{ color: 'rgba(255, 0, 0, 0.589)', fontSize: '15px' }}>{error}</div>
          <button type="submit" className="password-button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
