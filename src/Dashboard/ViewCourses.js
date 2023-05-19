import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ViewCourses() {
    const [viewData , setViewData] = useState([]);
    const [userData,setUserData] = useState({})

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
        console.log(res)
      }).catch((error)=>{
        console.log(error)
      })
    }


  return (
    <div>
      <div className='user-details-wrapper'>
    <table>
      <tbody>
        <tr>
            <th>S.No</th>
            <th>Course No</th>
            <th>Course Code</th>
            <th>Batch No</th>
            <th>Course Name</th>
            <th>Commencement Date</th>
            <th>Course Duration</th>
            <th>Course Capacity</th>
            <th>Eligibilty</th>
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
                <td>NA</td>
                <td>NA</td>
                <td>{data.category}</td>
                <td>{data.mode}</td>
                <td>{data.type}</td>
                <td>{data.officer}</td>
                <td>{data.faculty}</td>
                <td>{data.coursedescription}</td>
                <td><button scheduling_id={data.scheduling_id} onClick={handleSubmit}>Enroll</button></td>
              </tr>
            )
          })
        }
          </tbody>
    </table>
    </div>
    </div>
  )
}
