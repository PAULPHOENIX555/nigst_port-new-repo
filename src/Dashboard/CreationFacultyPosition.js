import React, {  useState } from "react";
import Inputs from "../components/Inputs";
import Button from "../components/Buttons/Button";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function CreationFacultyPosition() {
 
  const [responseCircular, setCircularResponse] = useState(false);
  const [inputs, setInputs] = useState({
    facultyPosition: "",
    description: "",
  });


  function handleInputs(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    console.log(inputs)
  }

  function handleFacultyCreation() {
    setCircularResponse(true);
    const data = {
      faculty_pos: `${inputs.facultyPosition}`,
      description: `${inputs.description}`,
    };
    console.log(
     data
    );
    const url = "https://nigst.onrender.com/sauth/position";
    axios
      .post(url, data)
      .then((res) => {
        setCircularResponse(false);
        console.log(res);
      })
      .catch((error) => {
        setCircularResponse(false);
        console.log(error);
      });
  }
  return (
    <div className="department-creation-wrapper">
      {responseCircular ? (
        <div
          style={{
            width: "32%",
            height: "35%",
            left: "32%",
            backgroundColor: "rgb(211,211,211)",
            borderRadius: "10px",
            top: "70px",
            position: "absolute",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress style={{ height: "50px", width: "50px" }} />
        </div>
      ) : (
        ""
      )}
      <h3>Faculty Positions Creation</h3>
      <Inputs
        type={"text"}
        placeholder={"Faculty Position"}
        name={"facultyPosition"}
        fun={handleInputs}
      />
      <Inputs
        type={"text"}
        placeholder={"Description"}
        name={"description"}
        fun={handleInputs}
      />
      <Button value={"Submit"} fun={handleFacultyCreation} />
    </div>
  );
}
