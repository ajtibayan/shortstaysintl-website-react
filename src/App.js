import { Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faSquareFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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

library.add(fas, faTwitter, faSquareFacebook, faLinkedin, faInstagram);

function App() {
  return (
    <Routes>
      <Route path="/staging">
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/About`} element={<About />} />
        <Route
          path={`${process.env.PUBLIC_URL}/OurServices`}
          element={<OurServices />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/TrainingAndCoaching`}
          element={<TrainingAndCoaching />}
        />
        <Route path={`${process.env.PUBLIC_URL}/FAQs`} element={<FAQs />} />
        <Route
          path={`${process.env.PUBLIC_URL}/Contact`}
          element={<Contact />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/BookWithUs`}
          element={<BookWithUs />}
        />
        <Route path={`${process.env.PUBLIC_URL}/*`} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
