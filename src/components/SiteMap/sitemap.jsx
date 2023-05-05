import React from "react";
import './sitemap.css'
import { Link, useLocation } from 'react-router-dom';

function NavigationMenu() {
    return (
        <div>
            <div className="content-container">
                <div className="left-container" style={{ flex: 1 }}>
                    <ul className="main-navigation">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about/introduction">About NIGST</Link>
                        <ul><li><Link to="/about/introduction" className="introLink">Introduction</Link></li></ul></li>
                        <li><a >Governance Structure</a>
                            <ul>
                                <li id="sub-tab" ><Link to="/about/governance/board_of_governance">Board of Governance</Link></li>
                                <li id="sub-tab"><Link to="/about/governance/board_of_evaluation">Board of Evaluation</Link></li>
                                <li id="sub-tab"><Link to="/about/governance/board_of_studies">Board of Studies</Link></li>
                             </ul>
                        </li>
                            <li><Link to="/about/nigst_campus">NIGST Campus</Link></li>
                            <li><Link to="/location">Location </Link></li>

                        
                        <li><a href="#" className="dropbtn">Training</a></li>
                           
                                <li><a href="#">Faculties</a>
                                    <ul>
                                        <li id="sub-tab"><Link to="/faculty/geodesy">Faculty  of Geodesy</Link></li>
                                        <li id="sub-tab"><Link to="/faculty/photogrammetry">Faculty of Photogrammetry & Remote Sensing</Link></li>
                                        <li id="sub-tab"><Link to="/faculty/cartography">Faculty of Cartography</Link></li>
                                        <li id="sub-tab"><Link to="/faculty/topographical">Faculty of Faculty of Topographical </Link></li>
                                        <li id="sub-tab"><Link to="/faculty/geo_ict">Faculty of GEO-ICT</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/login">Courses</Link></li>
                                <li><Link to="/login">Course Enrollment</Link></li>
                                <li><Link to="/Feesandpayment">Fees and Payments</Link></li>
                            </ul>
                </div>
                <div className="right-container" style={{ flex: 2 }}>
                    <ul>


                        <li><Link to="/tenders" className="dropbtn">Tenders</Link></li>
                        <li><Link to="/components/rajbhasha/rajbhasha">Raj Bhasha</Link></li>
                        <li><Link to="/components/geospatial" className="dropbtn">Geo Spatial Policies</Link></li>
                        <li><Link to="/components/publicgrievances/Publicgrievance" className="dropbtn">Public Grievances Office</Link></li>
                        <li><Link to="/registration" className="dropbtn">Training Registration</Link></li>
                        <li><Link to="/components/SiteMap/sitemap" className="dropbtn">Site Map</Link></li>
                        <li><Link to="/gallery" className="dropbtn">Gallery</Link></li>
                        <li><Link to="/Contactus" className="dropbtn">Contact Us</Link></li>
                        <li><Link to="/publicgrievances">Grievances</Link></li>
                        <li><Link to="/citizen">Citize Charter</Link></li>

                        <li><Link to="/components/FAQ/faq" >FAQ</Link></li>
                    </ul>
                </div>
            </div >
        </div >

    )
}
export default NavigationMenu