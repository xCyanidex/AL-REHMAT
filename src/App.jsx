
import companylogo from "./assets/logos.png"
import  { lazy, Suspense } from "react";
const Footer=lazy(()=> import("./Components/Footer/Footer"));
const Navbar=lazy(()=> import("./Components/Navbar/Navbar"));
const Home=lazy(()=> import("./Pages/Home"))  ;
const About=lazy(()=> import("./Pages/About"));
const Contact=lazy(()=> import("./Pages/Contact"));
const DealersRegistration=lazy(()=> import("./Pages/DealersRegistration"));
const Projects=lazy(()=> import("./Pages/Projects"));
const Meriton=lazy(()=> import("./Pages/Meriton"));

import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
// import { ReactComponent as CompanyIcon } from "./assets/CompanySVG";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <span className="loading loading-infinity loading-lg"></span>
      <span>
        <img className="max-w-xs w-full" src={companylogo} alt="" />
      </span>
    </div>
  ); // You can customize this loading indicator
}


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
      <Suspense fallback={<Loading />}>
        <Router>
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
        </Router>
      </Suspense>
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
