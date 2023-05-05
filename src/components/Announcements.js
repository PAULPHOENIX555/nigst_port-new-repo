import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import images from "../carousel/index";
import axios from 'axios'
export default function Announcements() {
  const StyledBox = styled(Box)({
    maxWidth: "100%",
    margin: "0 auto",
  });

  const [activeStep, setActiveStep] = useState(0);
  const [announcement , setAnnouncements] = useState([])
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveStep((prevActiveStep) =>
        prevActiveStep === images.length - 1 ? 0 : prevActiveStep + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(()=>{
    const url = "https://nigst.onrender.com/announcement/view"
    axios.get(url).then((response)=>{
        console.log(response.data)
        setAnnouncements(response.data)
    }).catch((error)=>{
        console.log(error)
    })
  },[])

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === images.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? images.length - 1 : prevActiveStep - 1
    );
  };

  return (
    <div sx={{ position: "absolute", width: "20%" }}>
      <StyledBox
        sx={{
          width: "20%",
          position: "absolute",
          zIndex: "2",
          backgroundColor: "#1050A2",
          right: "20px",
          top: "280px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          {
            announcement.map((data,id)=>{
               <div key={id}>
                    <p>{data.description}</p>
                </div>
            })
          }

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: "2",
              cursor: "pointer",
              left: "0",
            }}
            onClick={handleBack}
          >
            <Typography
              variant="h3"
              component="span"
              sx={{ mx: 1, fontWeight: "bold" }}
            >
              &#8249;
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
              zIndex: "2",
              cursor: "pointer",
            }}
            onClick={handleNext}
          >
            <Typography
              variant="h3"
              component="span"
              sx={{ mx: 1, fontWeight: "bold" }}
            >
              &#8250;
            </Typography>
          </Box>
        </Box>
      </StyledBox>
    </div>
  );
}
