import React from "react";
import "./Environmental.css";
import trustimg from "../../Assets/Enviromental.png";
import proof from "../../Assets/Proof.png";
import Contact from "../GetinTouch/Contact";
import Brand from "../Brands/Brand";


const Environmental = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="content-head py-5">
              <h2 className="mdk">
                ENVIRONMENTAL & SAFETY<span> MATERIAL</span>
              </h2>
            </div>
            <div className="col-md-6 trustsec">
              <p>
                We are committed to offer you healthy life and environmental
                materials. Even every detail in the carcase which may not be
                visible is measured by highest standard E1 Environmental
                standard, the symbol of quality life.
              </p>
              <div className="trustimg">
                <img src={trustimg} alt="Trusted" />
              </div>
            </div>
            <div className="col-md-6">
                <div className="proof">
                    <img src={proof} alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Environmental;
