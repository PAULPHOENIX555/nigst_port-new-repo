import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { FaSyncAlt } from 'react-icons/fa';

export default function VerificationPage() {
    const [verificationState, setVerificationState] = useState([]);
    const [user, setUser] = useState({});
    const [showOTPField, setShowOTPField] = useState(false);
    const [otp, setOTP] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);
    const [showResendIcon, setShowResendIcon] = useState(false);
    const [resendTimer, setResendTimer] = useState(60); // 60 seconds for one minute


    useEffect(() => {
        let interval;
        if (resendTimer > 0) {
            interval = setInterval(() => {
                setResendTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [resendTimer]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
        const url = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/secure/view_veri_status/${user.email}`;
        axios.get(url).then((res) => {
            setVerificationState(res.data.data[0]);
            if (verificationState.admin_verified && verificationState.email_verified && verificationState.mobile_verified) {
                window.location.hash = "/student";
            }
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    function handleEmailVerification(e) {
        e.preventDefault();
        const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/secure/resend";
        const data = {
            email: user.email
        };
        axios.patch(url, data)
            .then((res) => {
                if (res.data.success) {
                    setIsSuccess(true);
                    setMessage(res.data.message);
                } else {
                    setIsSuccess(false);
                    setMessage(res.data.message || "Failed to send email verification link");
                }
            })
            .catch((error) => {
                setIsSuccess(false);
                setMessage("An error occurred while sending the email verification link");
                console.log(error);
            });
    }

    function handleResendOTP() {
        setShowOTPField(true);
        setOTP('');
        setShowResendIcon(true);
        setResendTimer(60);
        const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/sms/resend";
        const data = {
            email: user.email,
            otp: `${user.otp}`
        };
        axios.patch(url, data)
            .then((res) => {
                if (res.data.success) {
                    setIsSuccess(true);
                    setMessage(res.data.message);
                } else {
                    setIsSuccess(false);
                    setMessage(res.data.message || "Failed to send OTP");
                }
            })

            .catch((error) => {
                setIsSuccess(false);
                setMessage("An error occurred while sending the OTP");
                console.log(error);
            });
    }



    const handleOTPChange = (e) => {
        setOTP(e.target.value);
    };

    const handleSubmitOTP = (e) => {
        e.preventDefault();
        const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/sms/vs";
        const data = {
            email: user.email,
            otp: otp
        };
        setOTP('');
        setShowOTPField(false);
        axios.post(url, data)
            .then((res) => {
                if (res.data.success) {
                    setIsSuccess(true);
                    setMessage(res.data.message);
                    window.location.hash = window.location.hash; // Reload the page using the hash
                } else {
                    setIsSuccess(false);
                    setMessage(res.data.message || "Failed to send OTP");
                }
            })
            .catch((error) => {
                console.log(error);
                // Handle the error case
            });
    };
    
    
    



    const mainDivStyle = {
        width: "800px auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px",
    };
    const buttonStyle = {
        borderRadius: "5px",
        backgroundColor: "#1b3058",
        color: "white",
        height: "36.5px",
        marginLeft: "20px",
        padding: "5px",
        transition: "background-color 0.3s"
    };
    const handleCloseButtonClick = () => {
        window.location.hash = ('/login');
    };

    // ...

return (
    <div style={mainDivStyle}>
      <form className="relative" style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: "8px", width: "50%", padding: "30px", backgroundColor: "#f5f5f5" }}>
        <button style={{ position: "absolute", top: "8px", right: "8px" }} onClick={handleCloseButtonClick}>
          <FaTimes size={17} />
        </button>
        <h3 style={{ textAlign: "center", fontSize: "30px", margin: "10px" }}>Verification</h3>
        <div style={{ display: "flex", alignItems: "center", margin: "10px 0px" }}>
          <span style={{ fontSize: "20px" }}>NIGST Verification</span>
          {verificationState.admin_verified ? <button className="mx-5"><span className="text-green-500">Verified</span></button> : <><button className="mx-5"><span className="text-red-500">Not Verified</span></button></>}
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "10px 0px" }}>
          <span style={{ fontSize: "20px" }}>Email Verification</span>
          {verificationState.email_verified ? <button className="mx-5"><span className="text-green-500">Verified</span></button> : <><button onClick={handleEmailVerification} style={buttonStyle}>click here! to verify</button></>}
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "10px 0px" }}>
          <span style={{ fontSize: "20px" }}>Phone Verification</span>
          {verificationState.mobile_verified ? (
            <button className="mx-5"><span className="text-green-500">Verified</span></button>
          ) : (
            <>
              {showOTPField ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input style={{ margin: "5px", padding: "5px" }}
                    type="text"
                    value={otp}
                    onChange={handleOTPChange}
                    placeholder="Enter OTP"
                  />
                  {showResendIcon && (
                    <button onClick={handleResendOTP} style={{ marginLeft: "5px" }}>
                      {resendTimer > 0 ? (
                        <>
                          <FaSyncAlt style={{ marginRight: "5px" }} /> Resend OTP ({resendTimer}s)
                        </>
                      ) : (
                        "Resend OTP"
                      )}
                    </button>
                  )}
                  <button type="submit" style={buttonStyle} onClick={handleSubmitOTP}>Verify</button>
                </div>
              ) : (
                <>
                  <button onClick={handleResendOTP} style={buttonStyle}>Send OTP</button>
                  {showResendIcon && (
                    <button onClick={handleResendOTP} style={{ display: "flex", alignItems: "center" }}>
                    {resendTimer > 0 ? (
                      <>
                        <FaSyncAlt style={{ marginRight: "5px" }} /> Resend OTP ({resendTimer}s)
                      </>
                    ) : (
                      "Resend OTP"
                    )}
                  </button>
                  
                  )}
                </>
              )}
            </>
          )}
        </div>
        {message && (
          <div style={{ marginTop: "10px", padding: "10px", backgroundColor: isSuccess ? "green" : "red", color: "white" }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
 }  