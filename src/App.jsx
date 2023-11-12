
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import DealersRegistration from "./Pages/DealersRegistration";
import Projects from "./Pages/Projects";
import Meriton from "./Pages/Meriton";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import { useEffect } from "react";
// import { ReactComponent as CompanyIcon } from "./assets/CompanySVG";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<DealersRegistration />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/meriton" element={<Meriton />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <WhatsAppWidget
        style={{ zIndex: "99999999999", position: "relative" }}
        inputPlaceHolder={"Type your message"}
        companyName={"Al-Rehmat"}
        message={
          "Welcome to Al-Rehmat Developers,\n Please type your query and our agent will respond to you soon.\n Thank you."
        }
        phoneNumber="+923044659952"
      />
    </>
  );
}

export default App
