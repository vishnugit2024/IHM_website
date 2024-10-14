import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/Aboutus/About";
import Homemain from "./Components/Homemain/Homemain";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ModularKitchen from "./Pages/Modular kitchen/ModularKitchen";
import Wardrobe from "./Pages/ModularWardrobe/Wardrobe";
import Furniture from "./Pages/Modular Furniture/Furniture";
import ContactUS from "./Pages/Contactus/Contact";
import MoreService from "./Pages/More Service/MoreService";
import Project from "./Pages/Projectpage/Project";
import WeWork from "./Pages/HowWeWork/WeWork";
import Wantjoin from "./Pages/WantJoin/Wantjoin";
import Costcalculation from "./Pages/Costcalculation/Costcalculation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="About" element={<AboutUs />} />
          <Route path="kitchen" element={<ModularKitchen />} />
          <Route path="Wardrobe" element={<Wardrobe />} />
          <Route path="Furniture" element={<Furniture />} />
          <Route path="Contact" element={<ContactUS />} />
          <Route path="MoreService" element={<MoreService />} />
          <Route path="Project" element={<Project />} />
          <Route path="WeWork" element={<WeWork />} />
          <Route path="Wantjoin" element={<Wantjoin />} />
          <Route path="Costcalculation" element={<Costcalculation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
