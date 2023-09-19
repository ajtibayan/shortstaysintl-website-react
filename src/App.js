import { Route, Routes } from "react-router-dom";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import {
//   faTwitter,
//   faSquareFacebook,
//   faLinkedin,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// Components and Styles
import Home from "./views/Home";
import About from "./views/About";
import OurServices from "./views/OurServices";
import TrainingAndCoaching from "./views/TrainingAndCoaching";
import FAQs from "./views/FAQs";
import Contact from "./views/Contact";
import BookWithUs from "./views/BookWithUs";
import ErrorPage from "./views/ErrorPage";
import "./App.css";
import { NavProvider } from "./NavContext";

// library.add(fas, faTwitter, faSquareFacebook, faLinkedin, faInstagram);

function App() {
  return (
    <NavProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/TrainingAndCoaching" element={<TrainingAndCoaching />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BookWithUs" element={<BookWithUs />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </NavProvider>
  );
}

export default App;
