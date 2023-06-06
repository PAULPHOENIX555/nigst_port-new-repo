import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTimes } from 'react-icons/fa';

export default function VerificationPage() {
    const [verificationState, setVerificationState] = useState([]);
    const [user, setUser] = useState({});
    const [showOTPField, setShowOTPField] = useState(false);
    const [otp, setOTP] = useState('');

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
        axios.patch(url, data).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        });
    }

    function handleResendOTP() {
        setShowOTPField(true);
        setOTP('');
        const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/sms/resend";
        const data = {
            email: user.email,
            otp:`${user.otp}`
        };
        axios.patch(url, data).then((res) => {
            console.log(res);
        }).catch((error) => {
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
        axios.post(url, data).then((res) => {
            console.log(res);
            // Perform further actions based on the verification response
            // For example, if verification is successful, update the state or redirect to another page
            if (res.data.success) {
                // Verification successful
                // Update the verification state or redirect to another page
                // For example:
                 setVerificationState(prevState => ({ ...prevState, mobile_verified: true }));
                // window.location.hash = "/student";
            } else {
                // Verification failed
                // Display an error message or handle it accordingly
            }
        }).catch((error) => {
            console.log(error);
            // Handle the error case
        });
    };
    

    const mainDivStyle = {
        width: "100%",
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
                    {verificationState.email_verified ? <button className="mx-5"><span className="text-green-500">Verified</span></button> : <><button onClick={handleEmailVerification} style={buttonStyle}>Resend Email</button></>}
                </div>
                <div style={{ display: "flex", alignItems: "center", margin: "10px 0px" }}>
                    <span style={{ fontSize: "20px" }}>Phone Verification</span>
                    {verificationState.mobile_verified ? <button className="mx-5"><span className="text-green-500">Verified</span></button> : (
                        <>
                            {showOTPField ? (
                                <div>
                                    <input
                                        type="text"
                                        value={otp}
                                        onChange={handleOTPChange}
                                        placeholder="Enter OTP"
                                    />
                                    <button type="submit" onClick={handleSubmitOTP}>Verify</button>
                                </div>
                            ) : (
                                <button onClick={handleResendOTP} style={buttonStyle}>Send OTP</button>
                            )}
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}
