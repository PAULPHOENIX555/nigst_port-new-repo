import axios from "axios";
import { useEffect, useState } from "react";



function ViewEnrolledCourse(){
    const [viewEnrollCourse , setViewEnrollCourse] = useState([]);
    useEffect(()=>{
        let userData = JSON.parse(localStorage.getItem("user"));
      const url = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/enrollment/view_enrol/${userData.id}`;
      axios.get(url).then((res)=>{
            setViewEnrollCourse(res.data.data);
      })
    },[]);

    function handleCancelEnroll(e){
        const enrollId = e.target.getAttribute("enroll_id");
        const url = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/enrollment/cancel/${enrollId}`;
        axios.patch(url).then((res)=>{
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
            <th>Course Status</th>
            <th>Completion Date</th>
            <th>Running Date</th>
            <th>Course Paid Status</th>
            <th>Course Fee</th>
            <th>Cancel</th>
        </tr>
        {
          viewEnrollCourse.map((data,index)=>{
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{data.name}</td>
                <td>{data.course_status}</td>
                <td>{data.completiondate}</td>
                <td>{data.runningdate}</td>
                <td>{data.course_paid_status ? "Paid" : "Not Paid"}</td>
                <td>{data.fee}</td>
                <td><button enroll_id={data.enrolment_id} onClick={handleCancelEnroll}>Cancel</button></td>
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


export default ViewEnrolledCourse;