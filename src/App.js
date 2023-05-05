
import { HashRouter as Router, Routes, Route, NavLink, HashRouter } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Training from './components/NavComponents/Training';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import About from './about/About';
import Fixed from './components/Fixed';
import FacultyGeodesy from './components/faculty/FacultyGeodesy';
import FacultyPhotogrammetry from './components/faculty/FacultyPhotogrammetry';
import RightToInformation from './components/RTI/rti'
import LoginForm from './components/forms/Login';
import Nigst_campus from './about/Nigst_campus';
import Faq from './components/FAQ/faq';
// import Announcements from './components/Announcements';
import NIGSTAdmin from './Dashboard/NIGSTAdmin';
import FacultyAdmin from './Dashboard/FacultyAdmin';
import Signup from './Dashboard/Signup'
import NigstCampus from './about/Nigst_campus';
import OpenPageFromTop from './components/OpenPageFromTop';
import Board_of_governance from './about/Board_of_governance';
import Publicgrievance from './components/publicgrievances/Publicgrievance';
import Websitepolicy from './components/Policies/Websitepolicy';
import FacultyCarto from './components/faculty/FacultyCarto';
import FacultyTopo from './components/faculty/FacultyTopo';
import FacultyGeo from './components/faculty/FacultyGeo';
import Captcha from './components/Captcha';
import Board_of_evaluation from './about/Board_of_evaluation';
import Board_of_studies from './about/Board_of_studies';
import Privacypolicy from './components/Policies/Privacypolicy';
import Hyperlinkpolicy from './components/Policies/Hyperlinkpolicy';
import { Feesandpayment } from './components/NavComponents/Feesandpayment/Feesandpayment';
import Location from './components/NavComponents/Location/Location';
import Copyrightpolicy from './components/Policies/Copyrightpolicy';
import Tendertable from './components/Buttons/Tables/Tendertable';
import ContactForm from './components/forms/Contactus';
import ForgotPasswordForm from './components/forms/forgetpassword';
import Announcementtable from './components/Buttons/Tables/Announcementtable';
import Carousel from './components/Gallery/gallery';
import Geospatialpolicy from './components/Geospatial/geospatial';
import SimpleSlider from './components/SOI project/soiprojects';
import RajBhasha from './components/rajbhasha/rajbhasha';
import NavigationMenu from './components/SiteMap/sitemap';
import Citizen from './components/NavComponents/citizencharacter/citizen';


function App() {
  return (
    <>
      <HashRouter>

        <OpenPageFromTop />
        <Fixed/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/training' element={<Training />} />
          <Route path='/about/introduction' element={<About />} />
          <Route path='/faculty/geodesy' element={<FacultyGeodesy />} />
          <Route path='/about/nigst_campus' element={<NigstCampus />} />
          <Route path='/registration' element={<Signup />} />
          <Route path='/about/governance/board_of_governance' element={<Board_of_governance />} />
          <Route path='/about/governance/board_of_evaluation' element={<Board_of_evaluation />} />
          <Route path='/about/governance/board_of_studies' element={<Board_of_studies />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/privacypolicy' element={<Privacypolicy />} />
          <Route path='/publicgrievances' element={<Publicgrievance />} />
          <Route path='/websitepolicy' element={<Websitepolicy />} />
          <Route path='/faculty/cartography' element={<FacultyCarto />} />
          <Route path='/faculty/photogrammetry' element={<FacultyPhotogrammetry />} />
          <Route path='/faculty/topographical' element={<FacultyTopo />} />
          <Route path='/faculty/geo_ict' element={<FacultyGeo />} />
          <Route path='/location' element={<Location />} />
          <Route path='/captcha' element={<Captcha />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/components/FAQ/faq' element={<Faq />} />
          <Route path='/Policies/Privacypolicy' element={<Privacypolicy />} />
          <Route path='/components/publicgrievances/Publicgrievance' element={<Publicgrievance />} />
          <Route path='/components/Policies/Websitepolicy' element={<Websitepolicy />} />
          <Route path='/rti' element={<RightToInformation />} />
          <Route path='/Hyperlinkpolicy' element={<Hyperlinkpolicy />} />
          <Route path='/Feesandpayment' element={<Feesandpayment />} />
          <Route path='/Location' element={<Location />} />
          <Route path='/Copyrightpolicy' element={<Copyrightpolicy />} />
          <Route path='/tenders' element={<Tendertable />} />
          <Route path='/Contactus' element={<ContactForm />} />
          <Route path='/components/forms/forgetpassword' element={<ForgotPasswordForm />} />
          <Route path='/Tables/Announcementtable' element={<Announcementtable />} />
          <Route path='/gallery' element={<Carousel />} />
          <Route path='/components/geospatial' element={<Geospatialpolicy />} />
          <Route path='/components/SOI project/soiprojects' element={<SimpleSlider />} />
          <Route path='/components/rajbhasha/rajbhasha' element={<RajBhasha />} />
          <Route path='/components/SiteMap/sitemap' element={<NavigationMenu />} />
          <Route path='/citizen' element={<Citizen />} />


        </Routes>
        <Footer />
        <Copyright />

      </HashRouter>
    </>
  );
}

export default App;

