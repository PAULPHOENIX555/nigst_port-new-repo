import React from 'react'
import './Courses.css'

const Courses = () => {
    return (
        <div>
            <div id="heading">
                <h3>Course Calendar</h3>
            </div>
            <div class="conntent-conntainer">
                   
o	To be added at the Top as Calendar Title
	NIGST Course Schedule from 01st April 2023 to 31st March 2024  (Calendar Title)
o	Following notes to be added at the bottom of the calendar:
	In Basic Courses, the second part of duration is meant for completion of a Project work for extra-departmental candidates. First six months consists of one month for Planning & Report preparation, one month for field work and four months for lab work. The next six months consists of on-job training with no profit and no loss basis.  However, for departmental trainees the project work of 26 weeks will be in his professional environment / his office, evaluation of which will be done by NIGST before award of Certificate and remaining duration will be on-job training. 2 weeks 'mid-term break' will be given at the time of training
	Advance Courses include 8 weeks of Project Work and 1 week 'mid-term break'
	The eligibility Criteria in Basic and Advance Courses may be relaxed based on the experience in the Geospatial field on case-to-case basis
	The course fee above is exclusive of GST (as applicable).


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
