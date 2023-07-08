import React, { useEffect, useState } from "react";
import './Tendertable.css';
import axios from "axios";
import { AiFillFilePdf } from 'react-icons/ai';

function Announcementtable() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [buttonText, setButtonText] = useState("Archived Announcements");
  const [viewAnn, setViewAnn] = useState([]);
  const [viewAnnArchive, setViewAnnArchive] = useState([]);

  const handleButtonClick = () => {
    setShowDiv1(!showDiv1);
    setShowDiv2(!showDiv2);
    setButtonText(showDiv1 ? "Latest Announcements" : "Archived Announcements");
  };

  const [searchDate1, setSearchDate1] = useState("");
  const [searchDate2, setSearchDate2] = useState("");

  const handleInputChange1 = (event) => {
    setSearchDate1(event.target.value);
    // Rest of the code...
  };

  const handleInputChange2 = (event) => {
    setSearchDate2(event.target.value);
    // Rest of the code...
  };

  useEffect(() => {
    viewAnnouncement();
    viewArchiveAnn();
  }, []);

  function viewAnnouncement() {
    const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/viewweb/webannouncement";
    axios.get(url)
      .then((res) => {
        setViewAnn(res.data.announcement);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function viewArchiveAnn() {
    const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/viewweb/view_archive";
    axios.get(url)
      .then((res) => {
        setViewAnnArchive(res.data.pdfs);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handlePdfClick = (aid) => {
    const apiEndpoint = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/viewweb/view_ann/${aid}`;
    axios.get(apiEndpoint, { responseType: 'blob' })
      .then((response) => {
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  


 const handleAPdfClick = (aid) => {
  const apiEndpoint = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/viewweb/view_archive/${aid}`;
  axios.get(apiEndpoint, { responseType: 'blob' })
    .then((response) => {
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    })
    .catch((error) => {
      console.log(error);
    });
};


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
                    <th colSpan="5" style={{ textAlign: "center", backgroundColor: "#ffcb00" }}>
                      Latest Announcements
                    </th>
                  </tr>
                  <tr>
                    <th>S.No</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Attachments</th>
                  </tr>
                </thead>

                <tbody className="main-wrapper" id="Names">
                  {viewAnn.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.posteddate}</td>
                      {data.url === '' ? (
                        <td className={data.url === '' ? '' : 'underline'}>
                          {data.title}
                        </td>
                      ) : (
                        <td className={data.url === '' ? '' : 'underline'}>
                          <a href={`http://${data.url}`} target="_blank" rel="noopener noreferrer">
                            {data.title}
                          </a>
                        </td>
                      )}              
                      
                      {data.url === '' ? (
                        <td className={data.url === '' ? '' : 'underline'}>
                          {data.description}
                        </td>
                      ) : (
                        <td className={data.url === '' ? '' : 'underline'}>
                          <a href={`http://${data.url}`} target="_blank" rel="noopener noreferrer">
                            {data.description}
                          </a>
                        </td>
                      )}  
                      <td>
                        {data.pdf && data.pdf !== "null" && (
                          <button onClick={() => handlePdfClick(data.aid, data.pdf)}>
                          <AiFillFilePdf style={{ fontSize: "30px", color: "red" }} />
                        </button>
                        
                        )}
                      </td>
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
                    <th>Attachments</th>
                  </tr>
                </thead>

                <tbody className="main-wrapper" id="names">
                  {viewAnnArchive.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.postedat}</td>
                      {data.url === '' ? (
                        <td className={data.url === '' ? '' : 'underline'}>
                          {data.title}
                        </td>
                      ) : (
                        <td className={data.url === '' ? '' : 'underline'}>
                          <a href={`http://${data.url}`} target="_blank" rel="noopener noreferrer">
                            {data.title}
                          </a>
                        </td>
                      )}
                      {data.url === '' ? (
                        <td className={data.url === '' ? '' : 'underline'}>
                          {data.description}
                        </td>
                      ) : (
                        <td className={data.url === '' ? '' : 'underline'}>
                          <a href={`http://${data.url}`} target="_blank" rel="noopener noreferrer">
                            {data.description}
                          </a>
                        </td>
                      )}                        <td>
                        {data.pdf && data.pdf !== "null" && (
                         <button onClick={() => handleAPdfClick(data.aid, data.pdf)}>
                         <AiFillFilePdf style={{ fontSize: "30px", color: "red" }} />
                       </button>
                       
                        )}
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
