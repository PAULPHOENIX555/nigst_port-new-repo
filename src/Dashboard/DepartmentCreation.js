import React, { useEffect, useRef, useState } from "react";
import Inputs from "../components/Inputs";
import Button from "../components/Buttons/Button";
import axios from "axios";
import { CircularProgress } from "@mui/material";
const countryCodes = require("country-codes-list");

export default function DepartmentCreation() {
  const ministryDepartments = {
    "Select Ministry": "",
    "Ministry of Agriculture and Farmers Welfare": [
      "Select Department",
      "Department of Agriculture and Co-operation (AGRICOOP)",
      "Department of Agricultural Research and Education (DARE)",
      "Indian Council of Agricultural Research (ICAR)",
    ],
    "Ministry of Education": [
      "Select Department",
      "Department of Primary Education",
      "Department of Secondary Education",
      "Department of Higher Education",
    ],
    "Ministry of Health": [
      "Select Department",
      "Department of Medical Services",
      "Department of Public Health",
      "Department of Nutrition",
    ],
    "Ministry of AYUSH": "",
    "Ministry of Chemical and Fertilizers": [
      "Department of Chemicals and Petrochemicals (DCPC)",
      "Department of Fertilizers (FERT)",
      "Department of Pharmaceutical",
    ],
    "Ministry of Civil Aviation": "",
    "Ministry of Coal": "",
    "Ministry of Commerce and Industry": [
      "Select Department",
      "Department of Commerce",
      "Department for Promotion of Industry and Internal Trade (DPIIT)",
    ],
    "Ministry of Consumer Affairs, Food and Public Distribution (DCA)": [
      "Select Department",
      "Department of Consumer Affairs",
      "Department of Food and Public Distribution",
    ],
    "Ministry of Communications": [
      "Select Department",
      "Department of Posts",
      "Department of Telecommunications (DOT)",
    ],
    "Ministry of Corporate Affairs (MCA)": "",
    "Ministry of Culture": "",
    "Ministry of Defence (MoD)": [
      "Select Department",
      "Department of Defence",
      "Department of Defence Production",
      "Department of Ex-Servicemen Welfare",
    ],
    "Ministry of Development of North Eastern Region (DoNER)": "",
    "Ministry of Earth Sciences (MoES)": [
      "Select Department",
      "India Meteorological Department (IMD)",
    ],
    "Ministry of Electronics and Information Technology(MEITY)": "",
    "Ministry of Environment, Forest and Climate Change(MoEFCC) ": "",
    "Ministry of External Affairs(MEA)": "",
    "Ministry of Finance(MoF)": [
      "Select Department",
      "Department of Economic Affairs",
      "Department of Expenditure",
      "Department of Financial Services",
      "Department of Investment and Public Asset Management",
      "Department of Revenue",
    ],
    "Ministry of Fisheries, Animal Husbandry and Dairying": [
      "Select Department",
      "Department of Animal Husbandry, Dairying & Fisheries (AH&D)",
      "Department of Fisheries",
    ],
    "Ministry of Food Processing Industries (MOFPI)": "",
    "Ministry of Health & Family Welfare (MoHFW)": [
      "Select Department",
      "Department of Health and Family Welfare",
      "Department of Health Research",
    ],
    "Ministry of Heavy Industries & Public Enterprises": [
      "Select Department",
      "Department of Heavy Industry (DHI)",
      "Department of Public Enterprises (DPE)",
    ],
    "Ministry of Home Affairs (MHA)": "",
    "Ministry of Housing and Urban Affairs (MoHUA)": "",
    "Ministry of Education (MoE)": [
      "Select Department",
      "Department of Higher Education",
      "Department of School Education and Literacy",
    ],
    "Ministry of Information and Broadcasting (Ministry of I&B)": "",
    "Ministry of Jal Shakti (MoWR)": [
      "Select Department",
      "Department of Drinking Water and Sanitation",
      "Department of Water Resources",
      "River Development and Ganga Rejuvenation",
    ],
    "Ministry of Labour & Employment": "",
    "Ministry of Law and Justice": [
      "Select Department",
      "Department of Justice",
      "Department of Legal Affairs",
      "Legislative Department",
    ],
    "Ministry of Micro, Small and Medium Enterprises (MSME)": "",
    "Ministry of Mines": "",
    "Ministry of Minority Affairs": "",
    "Ministry of New and Renewable Energy (MNRE)": "",
    "Ministry of Panchayati Raj": "",
    "Ministry of Parliamentary Affairs (MPA)": "",
    "Ministry of Personnel, Public Grievances and Pension (PERSMIN)": [
      "Select Department",
      "Department of Administrative Reforms and Public Grievances (DARPG)",
      "Department of Pension & Pensioner's Welfare",
      "Department of Personnel and Training",
    ],
    "Ministry of Petroleum and Natural Gas (MOP&NG)": "",
    "Ministry of Power": "",
    "Ministry of Railways": "",
    "Ministry of Rural Development": "",
    "Ministry of Science and Technology": [
      "Select Department",
      "Department of Bio-Technology (DBT)",
      "Department of Science and Technology (DST)",
      "Department of Scientific and Industrial Research (DSIR)",
    ],
    "Ministry of Shipping": "",
    "Ministry of Skill Development and Entrepreneurship": "",
    "Ministry of Social Justice and Empowerment": [
      "Select Department",
      "Department of Empowerment of Persons with Disabilities",
    ],
    "Ministry of Statistics and Programme Implementation (MoSPI)": "",
    "Ministry of Steel": "",
    "Ministry of Textiles (TEXMIN)": "",
    "Ministry of Tourism": "",
    "Ministry of Tribal Affairs": "",
    "Ministry of Women and Child Development": "",
    "Ministry of Youth Affairs and Sports": [
      "Select Department",
      "Department of Sports",
      "Department of Youth Affairs",
    ],
    "Independent Departments": [
      "Select Department",
      "Department of Atomic Energy (DAE)",
      "Department of Space",
      "Indian Space Research Organisation (ISRO)",
    ],
    Other: "",
  };
  const statesAndUnionTerritories = [
    "Select State Government",
    "Govt. of Andhra Pradesh",
    "Govt. of Arunachal Pradesh",
    "Govt. of Assam",
    "Govt. of Bihar",
    "Govt. of Chhattisgarh",
    "Govt. of Goa",
    "Govt. of Gujarat",
    "Govt. of Haryana",
    "Govt. of Himachal Pradesh",
    "Govt. of Jharkhand",
    "Govt. of Karnataka",
    "Govt. of Kerala",
    "Govt. of Madhya Pradesh",
    "Govt. of Maharashtra",
    "Govt. of Manipur",
    "Govt. of Meghalaya",
    "Govt. of Mizoram",
    "Govt. of Nagaland",
    "Govt. of Odisha",
    "Govt. of Punjab",
    "Govt. of Rajasthan",
    "Govt. of Sikkim",
    "Govt. of Tamil Nadu",
    "Govt. of Telangana",
    "Govt. of Tripura",
    "Govt. of Uttar Pradesh",
    "Govt. of Uttarakhand",
    "Govt. of West Bengal",
    "Govt. of Andaman and Nicobar Islands",
    "Govt. of Chandigarh",
    "Govt. of Dadra & Nagar Haveli and Daman & Diu",
    "Govt. of Delhi",
    "Govt. of Jammu and Kashmir",
    "Govt. of Lakshadweep",
    "Govt. of Puducherry",
    "Govt. of Ladakh",
  ];

  const [ministryDepartment, setMinisterDepartments] = useState([]);
  const [responseCircular, setCircularResponse] = useState(false);
  const [OrganisationType, setOrganisationType] = useState();
  const [categoryOfOrganisation, setCategoryOfOrganisation] = useState();
  const [ministryDepartmentValue, setMinisterDepartmentsValue] = useState();
  const [department, setDepartment] = useState();
  const [countryCode, setCountryCode] = useState([]);
  const [countryCodeObject, setCountryCodeObject] = useState({});
  const [ministryDisplay, setMinistryDisplay] = useState(false);
  const [displayCategoryStateCenter, setDisplayCategoryDisplayCenter] =
    useState(false);
  const [displayCategoryPrivate, setDisplayCategoryPrivate] = useState(false);
  const [displayCategoryInternational, setDisplayCategoryInternational] =
    useState(false);
  const [displayCategoryOther, setDisplayCategoryOther] = useState(false);
  const [displayInputOther, setDisplayInputOther] = useState(false);
  const [otherOrganizationValue, setOtherOrganizationValue] = useState();
  const [state, setState] = useState(false);
  const [stateValue , setStateValue] = useState()
  const [inputs, setInputs] = useState({
    organization: "",
    email: "",
    contact: "",
    category: "",
  });
let typeRef = useRef();

  useEffect(() => {
    let objectData = Object.keys(ministryDepartments);
    setMinisterDepartments(objectData);
  }, []);

  useEffect(() => {
    const myCountryCodesObject = countryCodes.customList(
      "countryCode",
      "+{countryCallingCode}"
    );
    let objectKeys = Object.keys(myCountryCodesObject);
    setCountryCode(objectKeys);
    setCountryCodeObject(myCountryCodesObject);
    // console.log(typeRef.current.options[selectedIndex])
  }, []);

  function handleInputs(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    // console.log(inputs)
  }

  function handleDepartmentCreation() {
    setCircularResponse(true);
    const data = {
      organization: `${inputs.organization}`,
      email: `${inputs.email}`,
      phone: `${inputs.contact}`,
      ministry: OrganisationType === "Other" ? "" :  OrganisationType === "State Government Organization" ? `${stateValue}` : OrganisationType ===  "PSU – State Government" ? `${stateValue}` : OrganisationType === "PSU – Central Government"  ? `${ministryDepartmentValue}` : OrganisationType === "Central Government Organization" ? `${ministryDepartmentValue}` : "",
      type:  `${OrganisationType}`,
      department: OrganisationType === "PSU – Central Government" || OrganisationType === "Central Government Organization" ? department !== "" ? `${department}` : "" : "",
      category: OrganisationType === "Other" ? `${otherOrganizationValue}` ? otherOrganizationValue === "Add new"  ? inputs.category : `${otherOrganizationValue}` : "" : `${OrganisationType}`,
    };
    console.log(
      data
    );
    const url = "https://nigst.onrender.com/dep/d";
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

  useEffect(() => {
    if (
      OrganisationType === "PSU – Central Government" ||
      OrganisationType === "Central Government Organization"
    ) {
      console.log("hello");
      ministryDisplayShowFun();
    } else {
      ministryDisplayHideFun();
    }
    if (
      OrganisationType === "PSU – Central Government" ||
      OrganisationType === "Central Government Organization" ||
      OrganisationType === "PSU – State Government" ||
      OrganisationType === "State Government Organization"
    ) {
      setDisplayCategoryDisplayCenter(true);
      setDisplayCategoryInternational(false);
      setDisplayCategoryPrivate(false);
      setDisplayCategoryOther(false);
      setState(false);
      setDisplayInputOther(false);
    }
    if (OrganisationType === "International") {
      setDisplayCategoryInternational(true);
      setDisplayCategoryDisplayCenter(false);
      setDisplayCategoryPrivate(false);
      setDisplayCategoryOther(false);
      setState(false);
      setDisplayInputOther(false);
    }
    if (OrganisationType === "Private") {
      setDisplayCategoryPrivate(true);
      setDisplayCategoryInternational(false);
      setDisplayCategoryDisplayCenter(false);
      setDisplayCategoryOther(false);
      setState(false);
      setDisplayInputOther(false);
    }
    if (OrganisationType === "Other") {
      setDisplayCategoryOther(true);
      setDisplayCategoryPrivate(false);
      setDisplayCategoryInternational(false);
      setDisplayCategoryDisplayCenter(false);
      setState(false);
      setDisplayInputOther(false);
    }
    if (
      OrganisationType === "PSU – State Government" ||
      OrganisationType === "State Government Organization"
    ) {
      setState(true);
      setDisplayInputOther(false);
    }
  }, [OrganisationType]);

  function ministryDisplayShowFun() {
    setMinistryDisplay(true);
  }
  function ministryDisplayHideFun() {
    setMinistryDisplay(false);
  }
  useEffect(() => {
    if (otherOrganizationValue === "Add new") {
      addNewOtherCategoryFunShow();
    } else {
      addNewOtherCategoryFunHide();
    }
  }, [otherOrganizationValue]);

  function addNewOtherCategoryFunShow() {
    setDisplayInputOther(true);
  }
  function addNewOtherCategoryFunHide() {
    setDisplayInputOther(false);
  }


  return (
    <div className="department-creation-wrapper">
      {responseCircular ? (
        <div
          style={{
            width: "29%",
            height: "30%",
            left: "33%",
            backgroundColor: "rgb(211,211,211)",
            borderRadius: "10px",
            top: "130px",
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
      <h3>Department Creation</h3>
      <Inputs
        type={"text"}
        placeholder={"Organization Name"}
        name={"organization"}
        fun={handleInputs}
      />
      <select onChange={(e) => setOrganisationType(e.target.value)} className='demo' ref={typeRef}>
        <option defaultValue={"PSU-STATE"}><span style={{color:"red"}}>Select Type of Organisation</span></option>
        <option value={"PSU – Central Government"}>
          PSU – Central Government
        </option>
        <option value={"Central Government Organization"}>
          Central Government Organization{" "}
        </option>
        <option value={"PSU – State Government"}>PSU – State Government</option>
        <option value={"State Government Organization"}>
          State Government Organization{" "}
        </option>
        <option value={"International"}>International</option>
        <option value={"Private"}>Private</option>
        <option value={"Other"}>Other</option>
      </select>

      {!displayCategoryOther ? (
        <select onChange={(e) => setCategoryOfOrganisation(e.target.value)}>
          <option defaultValue={"Departmental"}>
            Select Category Of Organization
          </option>
          {displayCategoryStateCenter ? (
            <option value={"Departmental"}>Departmental</option>
          ) : (
            ""
          )}
          {displayCategoryStateCenter ? (
            <option value={"Extra-Departmental"}>Extra-Departmental</option>
          ) : (
            ""
          )}
          {displayCategoryPrivate ? (
            <option value={"Private Organization"}>Private Organization</option>
          ) : (
            ""
          )}
          {displayCategoryPrivate ? (
            <option value={"Private Individual"}>Private Individual</option>
          ) : (
            ""
          )}
          {displayCategoryInternational ? (
            <option value={"International Organization"}>
              International Organization{" "}
            </option>
          ) : (
            ""
          )}
        </select>
      ) : (
        ""
      )}
      {ministryDisplay ? (
        <select
          onChange={(e) => {
            setMinisterDepartmentsValue(e.target.value);
            setDepartment();
          }}
        >
          {ministryDepartment.map((data) => {
            return (
              <option value={data} key={data}>
                {data}
              </option>
            );
          })}
        </select>
      ) : (
        ""
      )}
      {ministryDisplay ? (
        ministryDepartments[ministryDepartmentValue] ? (
          ministryDepartments[ministryDepartmentValue] !== "" ? (
            <select onChange={(e) => setDepartment(e.target.value)}>
              {ministryDepartments[ministryDepartmentValue].map((data) => {
                return (
                  <option value={data} key={data}>
                    {data}
                  </option>
                );
              })}
            </select>
          ) : (
            ""
          )
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {state ? (
        <select onChange={(e)=> setStateValue(e.target.value)}>
          {statesAndUnionTerritories.map((data, index) => {
            return (
              <option key={index} value={data}>
                {data}
              </option>
            );
          })}
        </select>
      ) : (
        ""
      )}

      {displayCategoryOther ? (
        <select onChange={(e) => setOtherOrganizationValue(e.target.value)}>
          <option>Option1</option>
          <option>Option1</option>
          <option>Option1</option>
          <option value={"Add new"}>Add new</option>
        </select>
      ) : (
        ""
      )}
      {displayInputOther ? (
        <Inputs
          placeholder={"Enter Category"}
          name={"category"}
          fun={handleInputs}
          type={"text"}
        />
      ) : (
        ""
      )}

      <Inputs
        type={"text"}
        placeholder={"Email of Organization"}
        name={"email"}
        fun={handleInputs}
      />

      <div style={{ display: "flex" }}>
        <select style={{ marginRight: "5px" }}>
          {countryCode.map((data, index) => {
            return <option key={index}>{countryCodeObject[data]}</option>;
          })}
        </select>
        <Inputs
          type={"text"}
          placeholder={"Contact No"}
          name={"contact"}
          fun={handleInputs}
        />
      </div>
      <Button value={"Submit"} fun={handleDepartmentCreation} />
    </div>
  );
}
