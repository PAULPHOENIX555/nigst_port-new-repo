import React, { useEffect, useState } from "react";
import './Tendertable.css'
import axios from "axios";
import { AiFillFilePdf } from 'react-icons/ai';


function Announcementtable() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [buttonText, setButtonText] = useState("Archived Announcements");
  const [viewAnn , setViewAnn] = useState([]);
  const [viewAnnArchive , setViewAnnArchive] = useState([]);

  const handleButtonClick = () => {
    setShowDiv1(!showDiv1);
    setShowDiv2(!showDiv2);
    setButtonText(showDiv1 ? "Latest Announcements" : "Archived Announcements");
  };
  const [searchDate1, setSearchDate1] = useState("");
  const [searchDate2, setSearchDate2] = useState("");

  const handleInputChange1 = (event) => {
    setSearchDate1(event.target.value);
    const input = event.target.value.toLowerCase();
    const rows = document.querySelectorAll("#Names tr");

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      let shouldHide = true;

      cells.forEach((cell) => {
        if (cell.textContent.toLowerCase().includes(input)) {
          shouldHide = false;
        }
      });

      if (shouldHide) {
        row.classList.add("hidden");
      } else {
        row.classList.remove("hidden");
      }
    });
  };
  const handleInputChange2 = (event) => {
    setSearchDate2(event.target.value);
    const input = event.target.value.toLowerCase();
    const rows = document.querySelectorAll("#names tr");

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      let shouldHide = true;

      cells.forEach((cell) => {
        if (cell.textContent.toLowerCase().includes(input)) {
          shouldHide = false;
        }
      });

      if (shouldHide) {
        row.classList.add("hidden");
      } else {
        row.classList.remove("hidden");
      }
    });
  };

useEffect(()=>{
  viewAnnouncement();
  viewArchiveAnn();
},[]);

  function viewAnnouncement(){
    const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/viewweb/webannouncement";
    axios.get(url).then((res)=>{
      setViewAnn(res.data.announcement)
    }).catch((error)=>{
      console.log(error);
    })
  }

  function viewArchiveAnn(){
    const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/viewweb/view_archive";
    axios.get(url).then((res)=>{
      setViewAnnArchive(res.data.pdfs)
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div>
    <button className="togglebtn" onClick={handleButtonClick}>{buttonText}</button>
    {viewAnn && viewAnn.length ? (
      <div>
        {showDiv1 && (
          <div id="postedNotices" style={{ height: "600px", overflowY: "scroll" }}>
            <input
              type="text"
              id="SearchInput"
              placeholder="Search Announcements"
              value={searchDate1}
              onChange={handleInputChange1}
            />
  
            <table>
              <thead>
                <tr>
                  <th colSpan="4" style={{ textAlign: "center", backgroundColor: "#ffcb00" }}>
                    Latest Announcements
                  </th>
                </tr>
                <tr>
                  <th>S.No</th>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
  
              <tbody className="main-wrapper" id="Names">
                {viewAnn.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.posteddate}</td>
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showDiv2 && (
          <div id="postedNotices" style={{ height: "600px", overflowY: "scroll" }}>
            <input
              type="text"
              id="searchInput"
              placeholder="Enter date YYYY-MM-DD"
              value={searchDate2}
              onChange={handleInputChange2}
            />
  
            <table>
              <thead>
                <tr>
                  <th colSpan="5" style={{ textAlign: "center", backgroundColor: "#ffcb00" }}>
                    Archived Announcements
                  </th>
                </tr>
                <tr>
                  <th>S.No</th>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>PDF</th>
                </tr>
              </thead>
  
              <tbody className="main-wrapper" id="names">
                {viewAnnArchive.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.title}</td>
                    <td>{data.postedat}</td>
                    <td>{data.description}</td>
                    <td>
                      <AiFillFilePdf style={{ fontSize: "30px", color: "red" }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    ) : (
      <div>Nothing to show</div>
    )}
  </div>
  
  
  );
}


export default Announcementtable;