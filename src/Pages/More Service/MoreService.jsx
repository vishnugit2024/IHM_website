import React, { useEffect } from "react";
import "./MoreService.css";
import interiorimg from "../../Assets/Interior.png";
import falsecelling from "../../Assets/falsecelling.png";
import ModularWood from "../../Assets/ModularWood.png";
import WallLighting from "../../Assets/WallLighting.png";
import FloorTiles from "../../Assets/FloorTiles.png";
import Wallpainting from "../../Assets/Wallpainting.png";
import Renovation from "../../Assets/Renovation.png";
import Contact from "../../Components/GetinTouch/Contact";

// ServiceCard component for reuse
const ServiceCard = ({ imgSrc, title, description, altText }) => (
  
  
  <div className="col-md-6">
    <div className="titleimg">
      <img src={imgSrc} alt={altText} />
      <div className="imgtitle">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const MoreService = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  
  const services = [
    {
      imgSrc: interiorimg,
      title: "1. INTERIOR DESIGNING",
      description:
        "Great design is transparent to the user and striking to the observer. If you are a house owner looking for a cozy space, we meet your needs. We at iHome Masters have facility for a consultation with a designer to start your home interior process.",
      altText: "Interior Design Service",
    },
    {
      imgSrc: ModularWood,
      title: "2. MODULAR WOODWORK",
      description:
        "Woodwork offers an artistic touch to the interior. It looks elegant and rich when done right. We at iHome Masters have our facility for PreLam factory-made boards with HD gloss/mat lamination finish for shutters of kitchen and bedroom woodwork.",
      altText: "Modular Woodwork",
    },
    {
      imgSrc: falsecelling,
      title: "3. FALSE CEILINGS",
      description:
        "Ceilings are sometimes the most neglected part of construction, but designed false ceilings add beauty to any room with their artistic look.",
      altText: "False Ceilings",
    },
    {
      imgSrc: WallLighting,
      title: "4. LIGHTING & ELECTRICAL",
      description:
        "Light critically influences atmosphere, enjoyment, health, and productivity. Whether it's a new residential project or renovation, we offer detailed electrical services for all types.",
      altText: "Lighting and Electrical Services",
    },
    {
      imgSrc: Wallpainting,
      title: "5. PAINTING & WALLPAPER",
      description:
        "A good paint job beautifies and adds character to your home. Wall designs can involve wood, stone, plaster, paint, wallpaper, or decorative panels.",
      altText: "Painting and Wallpaper",
    },
    {
      imgSrc: FloorTiles,
      title: "6. FLOORING & TILES",
      description:
        "Flooring adds an artistic touch to the interior. We provide a variety of flooring options that combine elegance and functionality.",
      altText: "Flooring and Tiles",
    },
    
  ];

  return (
    <>
      <section>
      <div className="container-fluid">
        <div className="heroimg4">
          <div className="overlay4">
            <h2>OUR SERVICES</h2>
          </div>
        </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="servicehead py-4">
              <h1>
                WHAT WE <span> DO</span>
              </h1>
              <p>
                We at iHome Masters provide services ranging from interior
                design, woodwork, furniture, home lighting, designer ceilings,
                wall painting and wallpaper, and any type of civil works related
                to home renovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                imgSrc={service.imgSrc}
                title={service.title}
                description={service.description}
                altText={service.altText}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-4">
              <div className="titleimg1">
                <img src={Renovation} alt="Renovation" />
                <div className="imgtitle1">
                  <h2>7. RENOVATION & CIVIL WORKS</h2>
                  <p>
                    Right from flooring to ceiling, we do complete renovation
                    and remodelling work for residential or any building. We
                    also undertake any type of civil work in homes, offices and
                    commercial establishments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
      <Contact />
      </section>
    </>
  );
};

export default MoreService;
