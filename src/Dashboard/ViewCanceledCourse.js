import axios from "axios";
import { useEffect, useState } from "react";



function ViewCanceledCourse(){
    const [viewCancelEnrollCourse , setViewCancelEnrollCourse] = useState([]);
    useEffect(()=>{
        let userData = JSON.parse(localStorage.getItem("user"));
      const url = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/enrollment/view_cancel/${userData.id}`;
      axios.get(url).then((res)=>{
            setViewCancelEnrollCourse(res.data.data);
      })
    },[]);

    function handleReEnroll(e){
        const enrollId = e.target.getAttribute("enroll_id");
        const url = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/enrollment/renroll/${enrollId}`;
        axios.put(url).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }

 return(
    <>
         <div>
      <div className='user-details-wrapper'>
    <table>
      <tbody>
        <tr>
            <th>S.No</th>
            <th>Course Name</th>
            <th>Enrollment Status</th>
            <th>Course Status</th>
            <th>Cancelled Date</th>
            <th>Course Paid Status</th>
            <th>Course Fee</th>
            <th>Re-Enroll</th>
        </tr>
        {
          viewCancelEnrollCourse.map((data,index)=>{
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{data.name}</td>
                <td>{data.enrolment_status}</td>
                <td>{data.course_status}</td>
                <td>{data.cancelled_date}</td>
                <td>{data.course_paid_status ? "Paid" : "Not Paid"}</td>
                <td>{data.fee}</td>
                <td><button enroll_id={data.enrolment_id} onClick={handleReEnroll}>Re-Enroll</button></td>
              </tr>
            )
          })
        }
          </tbody>
    </table>
    </div>
    </div>
    </>
 )
}


export default ViewCanceledCourse;