import React from 'react'
import Contact from '../../Components/GetinTouch/Contact'
import Brand from '../../Components/Brands/Brand'
import Meet from "../../Assets/Meeting.png";
import Analise from "../../Assets/Analise.png";
import Currency from "../../Assets/Currency.png";


const Wantjoin = () => {
  return (
    <>
<section>
        <div className="container-fluid">
         
            <div className="heroimg">
              <div className="overlay">
                <h2>WANT TO JOIN</h2>
              </div>
            </div>
          </div>
        
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="servicehead py-4">
              <h1>
                BE OUR  <span> DESIGN EXPERT</span>
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
                <h1>MEET CLIENTS</h1>
                <p>
                Meet with our clients directly at the site or online for a consultation session.
                Exact measurements will also be given to proceed with the design work.
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
                <h1>PREPARE FINAL 3D DESIGN</h1>
                <p>
                You design, finalize the quote and oversee customer satisfaction while we manufacture and install the products!
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
                <img src={Currency} alt="Currency" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimgtitle">
                <h1>EARN ON EVERY PROJECT</h1>
                <p>
                You earn 6% of total project value - 3% on order confirmation, and remaining 3% on production plus an additional referral income on your clients.
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
  )
}

export default Wantjoin