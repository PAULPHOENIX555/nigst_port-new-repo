import React, { useEffect, useState, useRef } from 'react'
import Inputs from '../components/Inputs';
import Button from '../components/Buttons/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';


export default function Signup() {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    mname: "",
    phone: "",
    email: "",
    password: "",
    dob: "",
    cpassword: ""
  })
  const [gender, setGender] = useState();
  const [org, setOrg] = useState();
  const [orgView, setOrgView] = useState([])
  const dobRef = useRef(null);
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [passwordMatched, setPasswordMatched] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitButtonRef = useRef(null);



  useEffect(() => {
    const urlView = `http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/admin/organizationfilter?type=${""}&category=${""}`;
    axios.get(urlView).then((res) => {
      setOrgView(res.data)
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  function handleInputs(e) {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput, [name]: value
    }))
    if (name === 'email') {
      if (!validateEmail(value)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError(''); // Clear the error message
      }
    }
    if (name === 'password') {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    } else if (name === 'cpassword') {
      setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    }
    if (name === 'cpassword') {
      if (value !== input.password) {
        setError('Passwords do not match');
        setPasswordMatched(false);
      } else {
        setError(''); // Clear the error message
        setPasswordMatched(true);
      }
    } else {
      setError(''); // Clear the error message for other fields
      setPasswordMatched(false);
    }
    if (name === 'password') {
      if (!validatePassword(value)) {
        setPasswordError('Invalid password format.');
      } else {
        setPasswordError(''); // Clear the error message
      }
    }
  }
  const handlePhoneInput = (e) => {
    const { value } = e.target;
    const onlyDigits = value.split('').filter((char) => /^\d+$/.test(char)).join('');
    setInput((prevInput) => ({
      ...prevInput,
      phone: onlyDigits,
    }));
  };
  function validateEmail(email) {
    // Simple email format check using regular expression
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  function validatePassword(password) {
    // Regex to validate password rules
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  function handleSignUp() {
    // fname,mname,lname,dob,phone,gender,email password,organization
    if (
      input.fname &&
      input.lname &&
      input.dob &&
      gender &&
      org &&
      input.phone &&
      validateEmail(input.email) &&
      validatePassword(input.password) &&
      input.password === input.cpassword &&
      emailError === '' &&
      passwordError === '' &&
      !isSubmitting
    ){
      const url = "http://ec2-13-233-110-121.ap-south-1.compute.amazonaws.com/secure/signup"
      const data = {
        fname: `${input.fname}`,
        mname: `${input.mname}`,
        lname: `${input.lname}`,
        dob: `${input.dob}`,
        phone: `${input.phone}`,
        gender: `${gender}`,
        email: `${input.email}`,
        password: `${input.password}`,
        organization: `${org}`

      }
      axios.post(url, data).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(console.log(error))
      })
    }
  }

  //submit button bounce
  // function handleBounceEffect() {
  //   if (!isSubmitting) {
  //     const submitButton = submitButtonRef.current;
  //     submitButton.classList.add('bounce'); // Add the "bounce" CSS class
  //     setTimeout(() => {
  //       submitButton.classList.remove('bounce'); // Remove the "bounce" CSS class after a delay
  //     }, 1000);
  //   }
  // }


    return (
      <div className='flex justify-center py-20 '>
        <div className="department-creation-wrapper rounded-md mx-auto my-auto md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h3 className="text-center mb-6">Sign Up</h3>
          <div className="flex flex-wrap mb-2">
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <div className="relative">
                <Inputs type="text" placeholder="First Name" name="fname" required={true} value={input.fname} fun={handleInputs} />
                {!input.fname && <span className="absolute top-1 right-1 text-red-500 text-xl">*</span>}
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <Inputs type={"text"} placeholder={"Middle Name"} name={"mname"} fun={handleInputs} />
            </div>
            <div className="w-full md:w-1/3 px-2">
              <div className="relative">
                <Inputs type={"text"} placeholder={"Last name"} name={"lname"} required={true} value={input.lname} fun={handleInputs} />
                {!input.lname && <span className="absolute top-1 right-1 text-red-500 text-xl">*</span>}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mb-2">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <div className="relative">
              <input type="text" onFocus={() => {   dobRef.current.type = 'date'; }} onBlur={() => {   dobRef.current.type = 'text'; }} onChange={handleInputs} value={input.dob}name="dob"  placeholder="Date of Birth" ref={dobRef}/>
      {!input.dob && <span className="absolute top-0 right-1 text-red-500 text-xl">*</span>}
  
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="relative">
                <select className="w-full border rounded px-3 py-2" onChange={(e) => setGender(e.target.value)}>
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {!gender && <span className="absolute top-0 right-1 text-red-500 text-xl">*</span>}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <div className="relative">
                <select className="w-full border rounded px-3 py-" onChange={(e) => setOrg(e.target.value)}>
                  <option>Select Organization</option>
                  {
                    orgView.map((data, index) => {
                      return <option value={data.organization} key={index}>{data.organization}</option>
                    })
                  }
                </select>
                {!org && <span className="absolute top-0 right-1 text-red-500 text-xl">*</span>}
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="relative">
                <Inputs type="tel" placeholder={"Enter Phone"} pattern={"[0-9]*"} name={"phone"} fun={handlePhoneInput} />
                {!input.phone && <span className="absolute top-0 right-1 text-red-500 text-xl">*</span>}
              </div>
            </div>
          </div>

          <div className="w-full px-2 mb-2 ">
            <div className="relative">
              <Inputs type={"email"} placeholder={"Enter email"} name={"email"} fun={handleInputs} />
              {!input.email && <span className="absolute top-0 right-1 text-red-500 text-xl">*</span>}
            </div>
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>



          <div className="w-full px-2 mb-2 ">
            <div className='grid grid-cols-1 md:grid-cols-2'>


              <div className='flex flex-col'>


                <div className="w-full md:full px-2 mb-4 md:mb-2 relative">
                  <Inputs
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Password"
                    name="password"
                    fun={handleInputs}
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <div className="w-full md:w-full px-2 mb-4 md:mb-2 relative">
                  <Inputs
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    name="cpassword"
                    fun={handleInputs}
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {error && <p className="text-red-500">{error}</p>}
                  {passwordMatched && <p className="text-green-500">Passwords matched!</p>}
                  {passwordError && <p className="text-red-500">{passwordError}</p>}
                </div>

              </div>

              <p className='text-sm'>Password must be at least 8 characters, contain at least one numeric value, one special character, have atleast one uppercase and one lowercase.</p>
              <div>


              </div>


            </div>




          </div>
          <div style={{ textAlign: 'left' }}><p className='italic'>NOTE: Fields with <span className="text-red-500 text-xl" style={{ verticalAlign: 'middle' }}>*</span> are mandatory</p></div>


          <Button
          id="submit-button" // Give the button an ID for easier DOM manipulation
          ref={submitButtonRef}
          value={"Submit"}
          className="w-3/4"
          fun={() => {
            handleSignUp();
          }}
          disabled={!passwordMatched || emailError !== 'invalid email' || passwordError !== 'invalid password'}
        />
        </div>
      </div>
    )
  }

