// import React, { useState } from "react";
// import randomstring from "randomstring";
// import { FaSync } from "react-icons/fa";

// const styles = {
//   container: {
//     position: "relative",
//     fontSize: "36px",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     textTransform: "uppercase",
//     letterSpacing: "2px",
//     userSelect: "none",
//     backgroundImage: "url('https://example.com/background.jpg')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     padding: "20px",
//   },
//   overlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(255, 255, 255, 0.5)",
//     pointerEvents: "none",
//   },
  
//   icon: {
//     cursor: "pointer",
//     marginLeft: "10px",
//   },
//   input: {
//     marginTop: "20px",
//     padding: "10px",
//     fontSize: "18px",
//   },
//   submitButton: {
//     marginTop: "10px",
//     padding: "10px 20px",
//     backgroundColor: "#3f51b5",
//     color: "#fff",
//     fontSize: "18px",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

// function Captcha() {
//   const [captchaText, setCaptchaText] = useState(
//     randomstring.generate({
//       length: 6,
//       charset: "alphanumeric",
//     })
//   );
//   const [userInput, setUserInput] = useState("");

//   function regenerateCaptcha() {
//     setCaptchaText(
//       randomstring.generate({
//         length: 6,
//         charset: "alphanumeric",
//       })
//     );
//     setUserInput("");
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (userInput === captchaText) {
//       alert("Captcha verified successfully!");
//     } else {
//       alert("Captcha verification failed. Please try again.");
//     }
//   }

//   function getMirrorText(text) {
//     let mirror = "";
//     for (let i = text.length - 1; i >= 0; i--) {
//       mirror += text.charAt(i);
//     }
//     return mirror;
//   }

//   const mirrorText = getMirrorText(captchaText);

//   return (
//     <div style={styles.container}>
//       <div>
//         {captchaText} {mirrorText}
//         <FaSync style={styles.icon} onClick={regenerateCaptcha} />
//       </div>
//       <div style={styles.overlay}></div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter the captcha text"
//           value={userInput}
//           onChange={(event) => setUserInput(event.target.value)}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.submitButton}>
//           Verify
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Captcha;


import { useState, useEffect, useRef } from 'react';
import { FaRedoAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
const Captcha = () => {
    const [captchaText, setCaptchaText] = useState('');
    const canvasRef = useRef(null);
  
    const generateCaptcha = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Set up canvas context
        const fontFamilies = ['Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Verdana'];
        const fontIndex = Math.floor(Math.random() * fontFamilies.length);
        const fontFamily = fontFamilies[fontIndex];
        ctx.font = `bold 32px ${fontFamily}`;
        ctx.textAlign = 'center';
        
        // Generate random font color
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        
        // Generate random captcha text
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let text = '';
        for (let i = 0; i < 6; i++) {
          text += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        // Draw captcha text on canvas
        ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 10);
        
        // Add noise to captcha
        for (var i = 0; i < 50; i++) {
          var xx = Math.random() * canvas.width;
          var yy = Math.random() * canvas.height;
          var s = Math.random() * 2;
          ctx.fillStyle = 'rgba(0,0,0,' + Math.random() + ')';
          ctx.fillRect(xx, yy, s, s);
        }
        
        // Create a mirror image of the captcha
        ctx.save();
        ctx.translate(0, canvas.height + 25);
        ctx.scale(1, -1);
        ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
        ctx.restore();
        
        // Display captcha with noise and mirror
        for (var i = 0; i < 50; i++) {
          var xx = Math.random() * canvas.width;
          var yy = Math.random() * canvas.height;
          var s = Math.random() * 2;
          ctx.fillStyle = 'rgba(0,0,0,' + Math.random() + ')';
          ctx.fillRect(xx, yy, s, s);
        }
        
        // Set the captcha text state
        setCaptchaText(text);
      };
      
      
      
      
      
      
  
    const validateCaptcha = () => {
      const userInput = document.getElementById('userInput').value;
      if (userInput === captchaText) {
        alert('Captcha verified!');
      } else {
        alert('Incorrect captcha!');
        generateCaptcha();
      }
    };
  
    useEffect(() => {
      generateCaptcha();
    }, []);
  
      
      
  
  return (
<div className="mainContainer  flex items-center justify-center h-screen">
  <div className="captcha_div text-center">
    <canvas ref={canvasRef} className="canvas" width="200" height="50" />
    <div className="form_div">
      <input type="text" name="userInput" id="userInput" placeholder="Enter the above text here:" />
      <button className="reload" onClick={generateCaptcha}>
        <FaRedoAlt />
      </button>
      <button type="button" className="subm" onClick={validateCaptcha}>
        Verify
      </button>
    </div>
  </div>
</div>

  );
};

export default Captcha;

