import React from 'react'
import './Courses.css'

const Courses = () => {
    return (
        <div>
            <div id="heading">
                <h3>Course Calendar</h3>
            </div>
                <div>
           
    <table>
      <thead>
       
        <tr>
          <th>Sl. No.</th>
          <th>Course No.</th>
          <th>Course Code</th>
          <th>Batch No.</th>
          <th>Nomenclature of Course</th>
          <th>Date of Commencement</th>
          <th>Duration/Tuition Fee (per trainee)</th>
          <th>Course Capacity</th>
          <th>Eligibility Criteria (Applicable to extra-departmental candidates)</th>
        </tr>
        <tr>
        <th colspan="9" style={{ textAlign: "center", backgroundColor: "#ffcb00" }}>Basic Courses</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>500</td>
          <td>500</td>
          <td>82</td>
          <td>Surveying Engineer</td>
          <td> 15-02-2023</td>
          <td>52+52 @ Weeks 
(Rs. 5,47,500)
</td>
          <td>20</td>
          <td>a) B.E./ B. Tech from any discipline or M.Sc. in the discipline of Mathematics /computer science /physics /Geo-Informatics. <br/> 
b) The academic qualification may be relaxed based on the experience in the Geospatial field on case-to-case basis.
</td>
        </tr>
       
      </tbody>
    </table>


                </div>
            </div>

      

    )
}

export default Courses
