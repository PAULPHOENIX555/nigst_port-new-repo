import React, { useState } from 'react';
import './forgetpassword.css'

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="content-container">
      <div className="forgot-password-container">
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <h2 className="header-reset">Forgot password</h2>
          <input
            type="email"
            placeholder="Email"
            className="user-email"
            name="cpassword"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <select name="type" id="select-role" value={type} onChange={(e) => setType(e.target.value)} >
            <option value="" selected disabled>Select Type</option>
            <option value="student/departmental">Student /Departmental</option>
            <option value="faculty">Faculty</option>
          </select>
          <div onChange={(e) => setError(e.target.value)}className="error-message" style={{ color: 'rgba(255, 0, 0, 0.589)', fontSize: '15px' }}>{error}</div>
          <button type="submit" className="password-button">
            Forgot password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
