import { Alert } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs';
export default function ViewCourses() {
    const [viewData , setViewData] = useState([]);
    const [userData,setUserData] = useState({})
    const [errorAlert,setErrorAlert] = useState(false);
    const [successAlert,setSuccessAlert] = useState(false);

    useEffect(()=>{
    let userData = JSON.parse(localStorage.getItem("user"));
    setUserData(userData) 
      const data={
        name:`${userData.org}`,
        studentID:`${userData.id}`
      }
        
    const url = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/enrollment/view_courses`;
    axios.post(url,data).then((res)=>{
      setViewData(res.data.course);
    }).catch((error)=>{
      console.log(error)
    })
    },[])


    function handleSubmit(e){
      const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/enrollment/enrol";
      const data={
        studentId:`${userData.id}`,
        scheduleId:`${e.target.getAttribute("scheduling_id")}`
      }
      axios.post(url,data).then((res)=>{
        setSuccessAlert(true);
      }).catch((error)=>{
        console.log(error.response.data.error)
        if(error.response.data.error === "Course does not exist or is not currently active"){
          setErrorAlert(true);
          setTimeout(() => {
            setErrorAlert(false);
          }, 5000);
        }
      })
    }


  return (
    <div>
      {errorAlert && <div style={{textAlign:"center",width:"20%",margin:"auto"}}><Alert severity='error' style={{marginTop:"20px"}}>Course does not exist or is not currently active</Alert></div>}
      {successAlert && <div style={{textAlign:"center",width:"20%",margin:"auto"}}><Alert severity='success' style={{marginTop:"20px"}}>Course Enroll Successfully</Alert></div>}

      <div className='user-details-wrapper'>
   {viewData.length >0 && <table style={{marginTop:"30px",overflowY:"scroll",maxHeight:"300px"}}>
      <tbody style={{marginTop:"30px",overflowY:"scroll",maxHeight:"300px"}}>
        <tr>
            <th>S.No</th>
            <th>Course No</th>
            <th>Course Code</th>
            <th>Batch No</th>
            <th>Course Name</th>
            <th>Commencement Date</th>
            <th>Course Duration</th>
            <th>Course Capacity</th>
            <th>Eligibility</th>
            <th>Course Category</th>
            <th>Course Mode</th>
            <th>Course Type</th>
            <th>Course Officer</th>
            <th>Faculty</th>
            <th>Course Description</th>
            <th>Enroll</th>
        </tr>
        {
          viewData.map((data,index)=>{
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{data.course_no}</td>
                <td>{data.code}</td>
                <td>{data.batch_no}</td>
                <td>{data.coursename}</td>
                <td>{data.commencementdate}</td>
                <td>{data.duration}</td>
                <td>{data.capacity}</td>
                <td>{data.eligibility}</td>
                <td>{data.category}</td>
                <td>{data.mode}</td>
                <td>{data.type}</td>
                <td>{data.officer}</td>
                <td>{data.faculty}</td>
                <td>{data.coursedescription}</td>
                <td><button scheduling_id={data.scheduling_id} onClick={handleSubmit}><BsFillPlusCircleFill/></button></td>
              </tr>
            )
          })
        }
          </tbody>
    </table> }
    {
        viewData.length === 0  && 
        <div style={{ width: "100%", textAlign: "center", fontSize: "30px", marginTop: "200px" }}>No data to show</div>
      }
    </div>
    </div>
  )
}