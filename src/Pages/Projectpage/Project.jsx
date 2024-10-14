import React, { useEffect } from "react";

import kitchen1 from "../../Assets/kitchen1.jpg";
import kitchen2 from "../../Assets/kitchen2.jpg";
import kitchen3 from "../../Assets/kitchen3.jpg";
import kitchen4 from "../../Assets/kitchen4.jpg";
import kitchen5 from "../../Assets/kitchen5.jpg";
import kitchen6 from "../../Assets/kitchen6.jpg";
import kitchen7 from "../../Assets/kitchen7.jpg";
import kitchen8 from "../../Assets/kitchen8.jpg";
import kitchen9 from "../../Assets/kitchen9.jpg";
import kitchen10 from "../../Assets/kitchen10.jpg";
import kitchen11 from "../../Assets/kitchen11.jpg";
import kitchen12 from "../../Assets/kitchen12.png";
import kitchen13 from "../../Assets/kitchen13.jpg";
import kitchen14 from "../../Assets/kitchen14.jpg";
import kitchen15 from "../../Assets/kitchen15.jpg";
import kitchen16 from "../../Assets/kitchen16.jpeg";
import kitchen17 from "../../Assets/kitchen17.jpg";
import kitchen18 from "../../Assets/kitchen18.jpg";
import Wardrobeimg1 from "../../Assets/Wardrobe1.jpg";
import Wardrobeimg2 from "../../Assets/Wardrobe2.jpg";
import Wardrobeimg3 from "../../Assets/Wardrobe3.jpg";
import Wardrobeimg4 from "../../Assets/Wardrobe4.jpg";
import HIngedWard1 from "../../Assets/HInged-Ward1.jpg";
import HIngedWard2 from "../../Assets/HInged-Ward2.jpg";
import HIngedWard3 from "../../Assets/HInged-Ward3.webp";
import HIngedWard4 from "../../Assets/HInged-Ward4.png";
import SIMPLEWHITE1 from "../../Assets/SIMPLE WHITE1.jpg";
import SIMPLEWHITE2 from "../../Assets/SIMPLE WHITE2.jpg";
import SIMPLEWHITE3 from "../../Assets/SIMPLE WHITE3.png";
import SIMPLEWHITE4 from "../../Assets/SIMPLE WHITE4.avif";
import Entertainment1 from "../../Assets/ENTERTAINMENT UNIT1.jpeg";
import Entertainment2 from "../../Assets/ENTERTAINMENT UNIT2.jpg";
import Entertainment3 from "../../Assets/ENTERTAINMENT UNIT3.jpg";
import Entertainment4 from "../../Assets/ENTERTAINMENT UNIT4.jpg";
import Study1 from "../../Assets/STUDY UNIT1.jpg";
import Study2 from "../../Assets/STUDY UNIT2.jpg";
import Study3 from "../../Assets/STUDY UNIT3.jpeg";
import Study4 from "../../Assets/STUDY UNIT4.jpg";
import CROCKERY1 from "../../Assets/CROCKERY CABINET1.png";
import CROCKERY2 from "../../Assets/CROCKERY CABINET2.png";
import CROCKERY3 from "../../Assets/CROCKERY CABINET3.jpg";
import CROCKERY4 from "../../Assets/CROCKERY CABINET4.png";
import Brand from "../../Components/Brands/Brand";
const Project = () => {

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
         
            <div className="heroimg">
              <div className="overlay">
                <h2>OUR PROJECTS</h2>
              </div>
            </div>
          </div>
       
      </section>

      <section className="wardrobe">

      <section>
        <div className="container">
          <div className="row ">
            <div className="content-head py-4">
              <h2 className="mdk">
                SLIDING SHUTTER <span> WARDROBE</span>
              </h2>
            </div>
            <div className="col-md-8">
              <img
                src={Wardrobeimg1}
                alt="Modular Wardrobe"
                className="img-fluid main-image"
                
              />

              <div className="row mt-3">
                <div className="col-6 ">
                  <img
                    src={Wardrobeimg3}
                    alt="Modular Wardrobe"
                    className="img-fluid small-image"
                   
                  />
                </div>
                <div className="col-6">
                  <img
                    src={Wardrobeimg4}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                   
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-4">
              <img
                src={Wardrobeimg2}
                alt="Wardrobe"
                className="img-fluid main-image h-100"
                // onClick={() => handleShowModal(Wardrobeimg1)}
              />
            </div>
          </div>
        </div>

        
      </section>

      <section>
        <div className="container">
          <div className="row ">
            <div className="content-head py-4">
              <h2 className="mdk">
                HINGED <span> WARDROBE</span>
              </h2>
            </div>
            <div className="col-md-8">
              <img
                src={HIngedWard3}
                alt="Modular Wardrobe"
                className="img-fluid main-image"
            
              />

              <div className="row mt-3">
                <div className="col-6 ">
                  <img
                    src={HIngedWard2}
                    alt="Modular Wardrobe"
                    className="img-fluid small-image"
                   
                  />
                </div>
                <div className="col-6">
                  <img
                    src={HIngedWard1}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                   
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-4">
              <img
                src={HIngedWard4}
                alt="Wardrobe"
                className="img-fluid main-image h-100"
                // onClick={() => handleShowModal(Wardrobeimg1)}
              />
            </div>
          </div>
        </div>

      </section>

      <section>
        <div className="container">
          <div className="row ">
            <div className="content-head py-4">
              <h2 className="mdk">
                SIMPLE WHITE <span> WARDROBE</span>
              </h2>
            </div>
            <div className="col-md-8">
              <img
                src={SIMPLEWHITE4}
                alt="Modular Wardrobe"
                className="img-fluid main-image"
               
              />

              <div className="row mt-3">
                <div className="col-6 ">
                  <img
                    src={SIMPLEWHITE2}
                    alt="Modular Wardrobe"
                    className="img-fluid small-image"
                   
                  />
                </div>
                <div className="col-6">
                  <img
                    src={SIMPLEWHITE1}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                   
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-4">
              <img
                src={SIMPLEWHITE3}
                alt="Wardrobe"
                className="img-fluid main-image h-100"
                // onClick={() => handleShowModal(Wardrobeimg1)}
              />
            </div>
          </div>
        </div>

      </section>


      </section>

      <section className="kitchen">

      <section>
        <div className="container">
          <div className="row ">
            <div className="content-head py-5">
              <h2 className="mdk">
                L-SHAPED <span>MODULAR KITCHEN</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={kitchen1}
                alt="Modular Kitchen"
                className="img-fluid main-image"
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={kitchen2}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen3}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src={kitchen4}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen5}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={kitchen6}
                    alt="Living Room"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

    
      </section>
      <section>
        <div className="container">
          <div className="row ">
            <div className="content-head py-5">
              <h2 className="mdk">
                STRAIGHT <span>MODULAR KITCHEN</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={kitchen7}
                alt="Modular Kitchen"
                className="img-fluid main-image"
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={kitchen8}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen9}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src={kitchen10}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen11}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={kitchen12}
                    alt="Living Room"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <section>
        <div className="container">
          <div className="row ">
            <div className="content-head py-5">
              <h2 className="mdk">
                U-SHAPED <span>MODULAR KITCHEN</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={kitchen13}
                alt="Modular Kitchen"
                className="img-fluid main-image"
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={kitchen14}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen15}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src={kitchen16}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen17}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={kitchen18}
                    alt="Living Room"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </section>

      </section>

      <section className="furniture">

      <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  ENTERTAINMENT <span> UNIT</span>
                </h2>
              </div>
              <div className="col-md-8">
                <img
                  src={Entertainment4}
                  alt="Modular Wardrobe"
                  className="img-fluid main-image"
                />

                <div className="row mt-3">
                  <div className="col-6 ">
                    <img
                      src={Entertainment3}
                      alt="Modular Wardrobe"
                      className="img-fluid small-image"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Entertainment2}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-4">
                <img
                  src={Entertainment1}
                  alt="Wardrobe"
                  className="img-fluid main-image h-100"
                  // onClick={() => handleShowModal(Wardrobeimg1)}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  STUDY <span> UNIT</span>
                </h2>
              </div>
              <div className="col-md-8">
                <img
                  src={Study4}
                  alt="Modular Wardrobe"
                  className="img-fluid main-image"
                />

                <div className="row mt-3">
                  <div className="col-6 ">
                    <img
                      src={Study3}
                      alt="Modular Wardrobe"
                      className="img-fluid small-image"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Study2}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-4">
                <img
                  src={Study1}
                  alt="Wardrobe"
                  className="img-fluid main-image h-100"
                  // onClick={() => handleShowModal(Wardrobeimg1)}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  CROCKERY <span> CABINETS</span>
                </h2>
              </div>
              <div className="col-md-8">
                <img
                  src={CROCKERY1}
                  alt="Modular Wardrobe"
                  className="img-fluid main-image"
                />

                <div className="row mt-3">
                  <div className="col-6 ">
                    <img
                      src={CROCKERY3}
                      alt="Modular Wardrobe"
                      className="img-fluid small-image"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={CROCKERY4}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-4">
                <img
                  src={CROCKERY2}
                  alt="Wardrobe"
                  className="img-fluid main-image h-100"
                  // onClick={() => handleShowModal(Wardrobeimg1)}
                />
              </div>
            </div>
          </div>
        </section>

      </section>

      <section className="py-3">
      <Brand />
      </section>
    </>
  );
};

export default Project;
