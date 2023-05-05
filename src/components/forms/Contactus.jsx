import React, { useState } from 'react';
import './ContactForm.css'

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
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
      // Submit form data
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Subject:', subject);
      console.log('Message:', message);

      // Clear form fields
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      setErrors([]);
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
