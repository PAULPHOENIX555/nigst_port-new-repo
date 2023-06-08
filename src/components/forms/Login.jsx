import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';

function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function generateCaptcha() {
    // Code for generating captcha
  }

  function validateCaptcha(e) {
    e.preventDefault()
    setLoading(true); // Enable loading state
    const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/secure/login";
    const data ={
      email:`${input.email}`,
      password:`${input.password}`
    }
    axios.post(url,data).then((res)=>{
      console.log(res)
      localStorage.setItem("user" , JSON.stringify(res.data))
      const data = JSON.parse(localStorage.getItem("user"));
      if(res.data.verification){
        window.location.hash='/student';
      }
      else if(res.data.message = "Email not verified" ){
        window.location.hash='/verification';
      }
      else if( res.data.message = "Phone not verified"){
        window.location.hash='/verification';
      }
      else if(res.data.message = "Admin not verified"){
        window.location.hash='/verification';
      }
    }).catch((error)=>{
      console.log(error)
    })
    .finally(() => {
      setLoading(false); // Disable loading state
    });
  }

  const [loading, setLoading] = useState(false);

  function route() {
    // Code for routing to forgot password page
  }

  return (
    <div className="login-container">
      <h2 id="heading">Login</h2>
      <p id="signup-link">
        Don't have an account?<Link to="/registration">SignUp</Link>
      </p>
      <form className="login-form">
        <div className="input">
          <input type="text" placeholder="Email" name="email" className="user-details" id="email" onChange={handleInput} />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" name="password" className="user-details" id="password" onChange={handleInput} />
        </div>
        {/* <div className="input">
          <select name="user-type" id="user-type">
            <option value="user-type" selected disabled>User Type</option>
            <option value="student">Student / Departmental Student</option>
            <option value="faculty">Faculty</option>
          </select>
        </div> */}
        {/* <iframe className='captchaframe' src="" frameborder="0"></iframe> */}
        {/* <div className="input">
          <div className="mainContainer" id="CaptchaBlock">
            <div className="captcha_div">
              <div className="form_div"><br/>
                <input type="text" name="userInput" id="userInput" placeholder="Enter text" />
                <canvas id="canvas" className="canvas"> </canvas>
                <i className="fa fa-refresh reload" onClick={generateCaptcha} aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div> */}
        {loading && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <SpinnerCircular size={40} color="#ffffff" thickness={100} speed={100} />
            </div>
          </div>
        )}

        <input type="submit" value="Login" name="submit" className="user-details" id="log-button" onClick={validateCaptcha} />

        <div className="error-div"></div>
        <div className="signUp-div">
          <p id="signup-link">
            Don't have an account?<Link to="/registration">SignUp</Link>
          </p>
          <Link to="/components/forms/forgetpassword" style={{ marginLeft: '11px' }} onClick={route}>Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
