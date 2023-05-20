import axios from "axios";
import React, { useEffect, useState } from "react";

export default function VerificationPage() {
    const [verificationState, setVerificationState] = useState([])
 

    useEffect(() => {
        const url = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/shababali672@gmail.com`;
        axios.get(url).then((res) => {
            setVerificationState(res.data.data[0])
            if(verificationState.admin_verified && verificationState.email_verified && verificationState.mobile_verified ){
                window.location.hash ="/student"
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    function handleEmailVerification(e) {
        e.preventDefault();
        const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/secure/resend";
        const data = {
            email: `${"shababali672@gmail.com"}`
        }
        axios.patch(url, data).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }

    function handleOTPVerification(e) {
        e.preventDefault();
        const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/sms/resend";
        const data = {
            email: "shababali672@gmail.com"
        }
        axios.patch(url, data).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <form>
                <h3>Verification Page</h3>
                <span>NIGST Verification</span>
                {verificationState.admin_verified ? <button style={{ backgroundColor: "green", color: "green", borderRadius: "50%", height: "40px", width: "40px" }} ></button> : <button style={{ height: "40px", width: "40px", backgroundColor: "red", color: "red", borderRadius: "50%" }}></button>}
                <span>Email Verification</span>
                {verificationState.email_verified ? <button style={{ backgroundColor: "green", color: "green", borderRadius: "50%", height: "40px", width: "40px" }} ></button> : <><button onClick={handleEmailVerification}>Resend Email</button></>}
                <span>Phone Verification</span>
                {verificationState.mobile_verified ? <button style={{ backgroundColor: "green", color: "green", borderRadius: "50%", height: "40px", width: "40px" }} ></button> : <> <button onClick={handleOTPVerification}>Resend OTP</button></>}
            </form>
        </div>
    )
}