import React, { useState } from "react";
import './Tendertable.css'

function Announcementtable() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [buttonText, setButtonText] = useState("Archived Announcements");

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


  return (
    <div>
      <button className="togglebtn" onClick={handleButtonClick}>{buttonText}</button>
      {showDiv1 && <div>
        <div id="postedNotices" style={{ height: "600px", overflowY: "scroll" }}>
          <input type="text" id="SearchInput" placeholder="Search Announcements" value={searchDate1} onChange={handleInputChange1} />

          <table>
            <thead>
              <tr>
                <th colspan="3" style={{ textAlign: "center", backgroundColor: "#ffcb00" }}>Latest Announcements</th>
              </tr>
              <tr>
              
              <th>Date</th>
            <th>Title</th>
            <th>Description</th>
              </tr>
            </thead>

            <tbody className="main-wrapper" id="Names">
            <tr>
            <td>2023-02-27</td>
            <td>Notice 4</td>
            <td>Ponec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
            </tbody>
          </table>
        </div></div>}
      {showDiv2 && <div>
        <div id="postedNotices" style={{ height: "600px", overflowY: "scroll" }}>
          <input type="text" id="searchInput" placeholder="Enter date YYYY-MM-DD" value={searchDate2} onChange={handleInputChange2} />

          <table>
            <thead>
              <tr>
                <th colspan="4" style={{ textAlign: "center", backgroundColor: "#ffcb00" }}>Archived Announcements</th>
              </tr>
              <tr>
              
              <th>Date</th>
            <th>Title</th>
            <th>Description</th>
              </tr>
            </thead>

            <tbody className="main-wrapper" id="names">
            <tr>
            <td>2023-02-27</td>
            <td>Notice 4</td>
            <td>Ponec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
            <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          
            </tbody>
          </table>
        </div>
        </div>}
    </div>
  );
}


export default Announcementtable;