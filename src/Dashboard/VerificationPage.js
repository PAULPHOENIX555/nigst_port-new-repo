import axios from "axios";
import React, { useEffect, useState } from "react";

export default function VerificationPage() {
    const [verificationState, setVerificationState] = useState([]);
    const [user,setUser]= useState({})
 

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user)
        const url = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/secure/view_veri_status/${user.email}`;
        axios.get(url).then((res) => {
            setVerificationState(res.data.data[0])
            if(verificationState.admin_verified && verificationState.email_verified && verificationState.mobile_verified ){
                window.location.hash ="/student";
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    function handleEmailVerification(e) {
        e.preventDefault();
        const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/secure/resend";
        const data = {
            email: `${user.email}`
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
            email: `${user.email}`
        }
        axios.patch(url, data).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }

    const mainDivStyle={
        width:"100%",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        padding:"30px",
    }
    const buttonStyle={
        borderRadius: "5px",
        backgroundColor:"#1b3058",
        color: "white",
        height: "36.5px",
        marginLeft:"20px",
        padding:"5px",
        transition:"background-color 0.3s"
    }
    return (
        <div style={mainDivStyle}>
            <form style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"fit-content",border:"3px solid grey",padding:"30px",backgroundColor:"#f5f5f5"}}>
            <h3 style={{textAlign:"center",fontSize:"30px"}}>Verification Page</h3>
                <div style={{display:"flex" , alignItems:"center" , margin:"10px 0px"}}>
                <span style={{fontSize:"20px"}}>NIGST Verification</span>
                {verificationState.admin_verified ? <button style={{ backgroundColor: "green", color: "green", borderRadius: "50%", height: "40px", width: "40px",marginLeft:"20px" }} ></button> : <button style={{ height: "40px", width: "40px", backgroundColor: "red", color: "red", borderRadius: "50%",marginLeft:"20px" }}></button>}
                </div>
                <div style={{display:"flex" , alignItems:"center",margin:"10px 0px"}}>
                <span style={{fontSize:"20px"}}>Email Verification</span>
                {verificationState.email_verified ? <button style={{ backgroundColor: "green", color: "green", borderRadius: "50%", height: "40px", width: "40px",marginLeft:"20px" }} ></button> : <><button onClick={handleEmailVerification} style={buttonStyle}>Resend Email</button></>}
                </div>
                <div style={{display:"flex" , alignItems:"center",margin:"10px 0px"}}>
                <span style={{fontSize:"20px"}}>Phone Verification</span>
                {verificationState.mobile_verified ? <button style={{ backgroundColor: "green", color: "green", borderRadius: "50%", height: "40px", width: "40px" ,marginLeft:"20px"}} ></button> : <> <button onClick={handleOTPVerification} style={buttonStyle}>Resend OTP</button></>}
                </div>
            </form>
        </div>
    )
}