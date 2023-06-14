import React, { useEffect, useState } from 'react'
import Logo from '../assests/Website Logo NIGST Small.png'
import "../CSS/app.css"
import ViewCourses from './ViewCourses';
import ViewEnrolledCourse from './ViewEnrolledCourse';
import ViewCanceledCourse from './ViewCanceledCourse';
// import VerificationPage from './VerificationPage';



export default function Student() {
 const [viewCourse , setViewCourse] = useState(true);
 const [ViewEnrollCourse , setViewEnrollCourse] = useState(false);
 const [viewCancelledEnroll,setViewCanceledEnroll] = useState(false);
 const [userName, setUserName] = useState('');




  useEffect(() => {
    // Retrieve user information from localStorage
    const user = localStorage.getItem('user');
    if (user) {
      const { name } = JSON.parse(user);
      setUserName(name);
    }
  }, []);
function viewCourseFun(){
    setViewCourse(true);
    setViewEnrollCourse(false);
    setViewCanceledEnroll(false)
}
function viewEnrollCourseFun(){
    setViewCourse(false);
    setViewEnrollCourse(true)
    setViewCanceledEnroll(false)
}
function viewCancelEnrollCourseFun(){
    setViewCanceledEnroll(true)
    setViewCourse(false);
    setViewEnrollCourse(false)
}
function logout(){
    window.location.hash = "/";
    localStorage.clear("user")
  }
  return (
    <div className='flex justify-between main-page-header'>
        <div className='side-bar border-r-2 side-bar-wrapper'> 
        <div className=' text-center pt-14 pb-14  border-b-2 mb-8'>
        <h3 className='text-lg   text-white font-bold ' style={{textAlign:"center"}}>Welcome {userName}</h3>
        </div>
        <div>
            <ul className=' text-white cursor-pointer '>
                {viewCourse ? <li className='p-3 ' style={{ background: "#1050a2",color:"#ffcb00" }} onClick={viewCourseFun}>Courses</li> : <li className='p-3 ' onClick={viewCourseFun}>Courses</li>}
                {ViewEnrollCourse ? <li className='p-3 ' style={{ background: "#1050a2",color:"#ffcb00" }} onClick={viewEnrollCourseFun}>Enrolled Courses</li> : <li className='p-3 ' onClick={viewEnrollCourseFun}>Enrolled Course</li>}
                {viewCancelledEnroll ? <li className='p-3 ' style={{ background: "#1050a2",color:"#ffcb00" }} onClick={viewCancelEnrollCourseFun}>Cancel Enrolled Courses</li> : <li className='p-3 ' onClick={viewCancelEnrollCourseFun}>Cancelled Enrolled Course</li>}
            </ul>
        </div>
        </div>
        <div className='content-wrapper-admin-panel w-full'>
            <header className='h-240  w-full flex justify-evenly items-center'>
                <div>
                    <img src={Logo} alt="logo" className='header-logo-admin-panel'></img>
                </div>
                <button className='pt-3 pb-3 pl-10 pr-10 bg-[#1050a2] text-white rounded-md' style={{ position: 'absolute', right: '20px' }} onClick={logout}>Logout</button>
            </header>
            <div className='min-h-max flex justify-center border-t-2 '>
                { viewCourse ? <ViewCourses/> : ""}
                {ViewEnrollCourse && <ViewEnrolledCourse/>}
                {viewCancelledEnroll && <ViewCanceledCourse/>}
            </div>
        </div>
    </div>
  )
}