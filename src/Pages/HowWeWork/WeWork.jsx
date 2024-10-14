import React, { useEffect } from "react";
import "./WeWork.css";
import Meet from "../../Assets/Meeting.png";
import Size from "../../Assets/Size.png";
import Analise from "../../Assets/Analise.png";
import Planning from "../../Assets/Planning.png";
import Contactimg from "../../Assets/Contact.png";
import Manufactore from "../../Assets/Manufactore.png";
import Dayhome from "../../Assets/30Dayhome.png";
import Brand from "../../Components/Brands/Brand";
import Contact from "../../Components/GetinTouch/Contact";

const WeWork = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg4">
            <div className="overlay4">
              <h2>OUR WORK PROCEDURE</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="servicehead py-4">
              <h1>
                HOW WE <span> WORK</span>
              </h1>
              <p>
                We at iHome Masters provide services ranging from interior
                design, woodwork, furniture, home lighting, designer ceilings,
                wall painting and wallpaper and any type of civil works related
                to home renovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimg">
                <img src={Meet} alt="Meet" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimgtitle">
                <h1>MEETING THE DESIGNER</h1>
                <p>
                  The first step in the process is meeting with the designer who
                  will give shape to your dreams. This interaction will give our
                  designers a valuable insight into your vision for your house.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimgtitle1">
                <h1>ON-SITE MEASUREMENTS</h1>
                <p>
                  For an accurate look to your interiors, we ensure to take
                  measurements that help us in creating perfect designs for the
                  presentation.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimg">
                <img src={Size} alt="Size" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimg">
                <img src={Planning} alt="Planning" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimgtitle">
                <h1>PRESENTING DESIGNS</h1>
                <p>
                  Our designers will create 3D interior designs of your home
                  based on your layout plan of your home and the interior work
                  measurments and present it to you for approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimgtitle1">
                <h1>SHARING THE ESTIMATE</h1>
                <p>
                  Once all the stakeholders are aligned on the designs and
                  layouts, the quote is shared on the basis of the approved
                  designs.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="workimg">
                <img src={Analise} alt="Analise" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimg">
                <img src={Contactimg} alt="Contact" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimgtitle">
                <h1>CONTRACT AND PAYMENT</h1>
                <p>
                  Signing the dotted line and payments just fortify our trust in
                  each other. Now the action for procuring the products and
                  manufacturing take place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimgtitle1">
                <h1>INTELLIGENT MANUFACTURING</h1>
                <p>
                  The manufacturing starts at our facility for panel based
                  products which helps us in keeping a track on the quality. The
                  accessories are purchased from authorised brand distributors.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="workimg">
                <img src={Manufactore} alt="Manufactore" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimg">
                <img src={Dayhome} alt="Dayhome" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimgtitle">
                <h1>30 DAYS WONDER HOME</h1>
                <p>
                  We make sure our promise of 30 days is kept for the
                  installation and services, without hassle. After all, we take
                  great pride in being a small yet crucial part in creating your
                  dream home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Brand />
      </section>
    </>
  );
};

export default WeWork;
