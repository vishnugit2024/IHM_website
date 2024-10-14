import React from "react";
import Contact from "../GetinTouch/Contact";
import Brand from "../Brands/Brand";
import Feedback from "../ClientFeedback/feedback";
import Home from "../../Pages/Home/Home";
import Environmental from "../Environmental&Safety/Environmental";

function Homemain() {
  return (
    <div>
      <Home />
      <Environmental />
      <Feedback />
      <Contact />
      <Brand />
    </div>
  );
}

export default Homemain;
