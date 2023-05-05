import React, { useState,useEffect } from "react";
import './Tendertable.css'

function Tendertable() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [buttonText, setButtonText] = useState("Archived Tenders");

  const handleButtonClick = () => {
    setShowDiv1(!showDiv1);
    setShowDiv2(!showDiv2);
    setButtonText(showDiv1 ? "Latest Tenders" : "Archived Tenders");
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

 

  const [tenderData, setTenderData] = useState([]);

  useEffect(() => {
    fetch('https://nigst.onrender.com/tender/view')
      .then(response => response.json())
      .then(data => setTenderData(data.tender))
      .catch(error => console.error(error));
  }, []);

  const [archiveData, setArchiveData]= useState([]);

  useEffect(() => {
    fetch('https://nigst.onrender.com/tender/view_archive')
      .then(response => response.json())
      .then(data => setArchiveData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <button className="togglebtn" onClick={handleButtonClick}>{buttonText}</button>
      {showDiv1 && <div>
        <div id="postedNotices" style={{ height: "600px", overflowY: "scroll" }}>
          <input type="text" id="SearchInput" placeholder="Search Tenders" value={searchDate1} onChange={handleInputChange1} />

          <table>
            <thead>
              <tr>
                <th colspan="8" style={{ textAlign: "center", backgroundColor: "#ffcb00" }}>Latest Tenders</th>
              </tr>
              <tr>
                <th>Serial no.</th>
                <th>Title</th>
                <th>Tendor No.</th>
                <th>Description</th>
                <th>Corrigendom</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Attachments</th>
              </tr>
            </thead>

            <tbody className="main-wrapper" id="Names">
  {tenderData.map((tender, index) => (
    <React.Fragment key={index}>
      <tr>
        <td>{index + 1}</td>
        <td>{tender.title}</td>
        <td>{tender.tender_ref_no}</td>
        <td>{tender.description}</td>
        <td></td>
        <td>{tender.start_date}</td>
        <td>{tender.end_date}</td>
        <td>{tender.corrigenda.length > 0 ? 'Yes' : 'No'}</td>
      </tr>
      {tender.corrigenda.map((corrigendum, index) => (
        <tr key={index}>
          <td></td>
           <td>{tender.title}</td>
        <td>{tender.tender_ref_no}</td>
        <td>{tender.description}</td>
          <td>{corrigendum.corrigendum}</td>
          
          <td>{corrigendum.created_at}</td>
          <td></td>
          <td></td>
        </tr>
      ))}
    </React.Fragment>
  ))}
</tbody>




          </table>
        </div></div>}
      {showDiv2 && <div>
        <div id="postedNotices" style={{ height: "600px", overflowY: "scroll" }}>
          <input type="text" id="searchInput" placeholder="Enter date YYYY-MM-DD" value={searchDate2} onChange={handleInputChange2} />

          <table>
            <thead>
              <tr>
                <th colspan="8" style={{ textAlign: "center", backgroundColor: "#ffcb00" }}>Archived Tenders</th>
              </tr>
              <tr>
                <th>Serial no.</th>
                <th>Title</th>
                <th>Tendor ref. no.</th>
                <th>Description</th>
                <th>Corrigendom</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Attachments</th>
              </tr>
            </thead>

            <tbody className="main-wrapper" id="names">
  {archiveData.data.map((tender, index) => (
    <React.Fragment key={index}>
      <tr>
        <td>{index + 1}</td>
        <td>{tender.title}</td>
        <td>{tender.tender_ref_no}</td>
        <td>{tender.description}</td>
        <td></td>
        <td>{tender.startdate}</td>
        <td>{tender.enddate}</td>
        <td>{tender.corrigendum.length > 0 ? 'Yes' : 'No'}</td>
      </tr>
      {tender.corrigendum.map((corrigendum, index) => (
        <tr key={index}>
          <td></td>
           <td>{tender.title}</td>
        <td>{tender.tender_ref_no}</td>
        <td>{tender.description}</td>
          <td>{corrigendum.corrigendum}</td>
          
          <td>{corrigendum.created_at}</td>
          <td></td>
          <td></td>
        </tr>
      ))}
    </React.Fragment>
  ))}
</tbody>
          </table>
        </div>
      </div>}
    </div>
  );
}


export default Tendertable;