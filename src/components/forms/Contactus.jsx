import React, { useState } from 'react';
import './ContactForm.css'

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = [];
  
    // Validate form fields
    if (name.trim() === '') {
      newErrors.push('Name is required.');
    }
  
    if (email.trim() === '') {
      newErrors.push('Email address is required.');
    }
  
    if (phone.trim() === '') {
      newErrors.push('Phone number is required.');
    }
  
    if (subject.trim() === '') {
      newErrors.push('Subject is required.');
    }
  
    if (message.trim() === '') {
      newErrors.push('Message is required.');
    }
  
    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await fetch('http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/contact/v0', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            subject,
            message,
          }),
        });
  
        if (response.ok) {
          // Submission successful
          console.log('Form submitted successfully.');
          // Clear form fields
          setName('');
          setEmail('');
          setPhone('');
          setSubject('');
          setMessage('');
          setErrors([]);
        } else {
          // Error occurred during submission
          const errorData = await response.json();
          console.log('Form submission failed:', errorData);
          // Handle the error as needed
        }
      } catch (error) {
        // Network error occurred
        console.log('Error submitting the form:', error);
        // Handle the error as needed
      }
    }
  };
  

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 id="con">Contact us</h2>

        {errors.length > 0 && (
          <div className="error-div">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <input
          name="name"
          type="text"
          placeholder="Name"
          className="inp"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="inp"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          name="phoneNumber"
          type="text"
          placeholder="Phone"
          className="inp"
          id="phone-number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />

        <select
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required
        >
          <option value="" disabled>Subject</option>
          <option value="Admission Enquiry">Admission Enquiry</option>
          <option value="Feedback">Feedback</option>
          <option value="Grievances">Grievances</option>
          <option value="Right to Information">Right to Information</option>
        </select>

        <textarea
          name="message"
          className="textarea"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        ></textarea>

        <input
          name="submit"
          type="submit"
          value="Submit"
          className="submit-btn"
        />
      </form>
    </div>
  );
}

export default ContactForm;
