import React, { useEffect } from "react";
import "./About.css";
import { Tab, Tabs, ProgressBar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import sliderImage1 from "../../Assets/WardrobeBanner.png";
import aboutimg1 from "../../Assets/About1.png";
import aboutimg2 from "../../Assets/About2.png";
import Feedback from "../../Components/ClientFeedback/feedback";
import Contact from "../../Components/GetinTouch/Contact";
import Brand from "../../Components/Brands/Brand";
import teamMember1 from "../../Assets/Teamperson1.jpg"; 
import teamMember2 from "../../Assets/Teamperson2.jpg"; 
import teamMember3 from "../../Assets/Teamperson3.jpg"; 
import teamMember4 from "../../Assets/Teamperson4.jpg"; 
import teamMember5 from "../../Assets/Teamperson5.jpg"; 
import teamMember6 from "../../Assets/Teamperson6.jpg"; 
import teamMember7 from "../../Assets/Teamperson7.jpg"; 

const About = () => {
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
              <h2>ABOUT US</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Container fluid>
          <Row>
            <Col md={6}>
              <div className="title-head">
                <h3>
                  ABOUT <span>IHOME MASTERS</span>
                </h3>
                <p>
                  Welcome to iHome Masters - the complete interior company. We
                  provide interior designing and interior works for homes at
                  reasonable costs. iHome Masters Private Limited was incepted
                  with the idea of providing seamless solutions for complete
                  home interiors to customers of new homes. Our production works
                  are done at the factory, as per design and customized
                  measurements, using the finest brand materials, delivered and
                  installed at your place following all safety protocols. iHome
                  Masters assures quality interiors at reasonable costs, so go
                  ahead with confidence and get in touch with us for a free
                  consultation and estimate to the best interior works.
                </p>
              </div>
            </Col>

            <Col md={6} className="titleimg">
              <img src={sliderImage1} alt="office Img" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid className="py-3">
          <Row>
            <Col md={6} className="aboutimg">
              <img src={aboutimg1} alt="" className="img-fluid" />
            </Col>
            <Col md={4} className="sideinfo">
              <div className="tabstyle">
                <Tabs defaultActiveKey="history" className="mb-3">
                  <Tab eventKey="history" title="History">
                    <div className="content-box">
                      <p>
                        Founded in 1997, Interiorz was born out of a passion for
                        creating beautiful and functional spaces. Over the
                        years, we have grown from a small team of dedicated
                        designers into a leading interior design firm. Our
                        journey began with a simple mission: to transform
                        ordinary spaces into extraordinary experiences. Through
                        innovative design solutions and a commitment to
                        excellence, we have successfully completed numerous
                        projects, each reflecting our dedication to quality and
                        creativity.
                      </p>

                      <div className="progress-section">
                        <p>
                          Renovation <span className="progress-value">75%</span>
                        </p>
                        <ProgressBar now={75} />
                        <p>
                          Functional Spaces{" "}
                          <span className="progress-value">85%</span>
                        </p>
                        <ProgressBar now={85} />
                        <p>
                          Architecture{" "}
                          <span className="progress-value">95%</span>
                        </p>
                        <ProgressBar now={95} />
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="mission" title="Mission">
                    <div className="content-box">
                      <p>
                        Offer a wide range of well-designed, functional home
                        furnishing products at prices so low that as many people
                        as possible will be able to afford them. We stand for
                        “technology, education, and design,” and will implement
                        these factors in our culture at iHome Masters.
                      </p>
                      <div className="progress-section">
                        <p>
                          Renovation <span className="progress-value">75%</span>
                        </p>
                        <ProgressBar now={75} />
                        <p>
                          Functional Spaces{" "}
                          <span className="progress-value">85%</span>
                        </p>
                        <ProgressBar now={85} />
                        <p>
                          Architecture{" "}
                          <span className="progress-value">95%</span>
                        </p>
                        <ProgressBar now={95} />
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="vision" title="Vision">
                    <div className="content-box">
                      <p>
                        Bring inspiration and innovation to every design we
                        create. To create a better every day life for the many
                        people. We believe passionately in the power of ideas to
                        change attitudes, lives and, ultimately, the world.
                      </p>
                      <div className="progress-section">
                        <p>
                          Renovation <span className="progress-value">75%</span>
                        </p>
                        <ProgressBar now={75} />
                        <p>
                          Functional Spaces{" "}
                          <span className="progress-value">85%</span>
                        </p>
                        <ProgressBar now={85} />
                        <p>
                          Architecture{" "}
                          <span className="progress-value">95%</span>
                        </p>
                        <ProgressBar now={95} />
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </section>

      <section>
  <div className="container my-5">
    <div className="ourteam">
      <h2>
        OUR <span> TEAM</span>
      </h2>
    </div>
    <div className="row team">
      {/* First Row */}
      <div className="col-md-3 col-sm-6">
        <div className="card team-card">
          <img
            src={teamMember1}
            className="card-img-top"
            alt="Team Member 1"
          />
          <div className="card-overlay">
            <div className="overlay-text">
            <h3>Guddu Alam</h3>
            <p>Director - Projects</p>
            </div>
           
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card team-card">
          <img
            src={teamMember2}
            className="card-img-top"
            alt="Team Member 2"
          />
          <div className="card-overlay">
            <div className="overlay-text">
              <h3>Vinod Chandiramani</h3>
              <p>Director Marketing & Sales</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card team-card">
          <img
            src={teamMember3}
            className="card-img-top"
            alt="Team Member 3"
          />
          <div className="card-overlay">
            <div className="overlay-text">
              <h3>Mikhael William</h3>
              <p>Director IT & Marketing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card team-card">
          <img
            src={teamMember7}
            className="card-img-top"
            alt="Team Member 3"
          />
          <div className="card-overlay">
            <div className="overlay-text">
              <h3>Sounak Majumder</h3>
              <p>Interior Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4 team">
      {/* Second Row */}
      <div className="col-md-3 col-sm-6">
        <div className="card team-card">
          <img
            src={teamMember4}
            className="card-img-top"
            alt="Team Member 4"
          />
          <div className="card-overlay">
            <div className="overlay-text">
              <h3>Yashika</h3>
              <p>Interior Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card team-card">
          <img
            src={teamMember5}
            className="card-img-top"
            alt="Team Member 5"
          />
          <div className="card-overlay">
            <div className="overlay-text">
              <h3>Vinti Agarwal</h3>
              <p>Interior Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card team-card">
          <img
            src={teamMember6}
            className="card-img-top"
            alt="Team Member 6"
          />
          <div className="card-overlay">
            <div className="overlay-text">
              <h3>Parul Saxena</h3>
              <p>Interior Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section>
        <Container>
          <Row>
            <Col md={6} className="rightimg">
              <img src={aboutimg2} alt="" className="img-fluid" />
            </Col>
            <Col md={6}>
              <div className="content">
                <div className="contenthead">
                  <h2>
                    OUR <span>MANAGEMENT TEAM</span>
                  </h2>
                </div>
                <p>
                  <span>A</span>t Interioz, we believe that exceptional design
                  should seamlessly blend aesthetics, functionality, and
                  sustainability. Our approach is rooted in a profound
                  understanding of our clients’ needs and the unique context of
                  each project.
                </p>
                <p>
                  We collaborate closely with our clients throughout the entire
                  design process, ensuring that their vision is brought to life
                  in a way that is both beautiful and practical. By integrating
                  environmentally responsible practices, we create spaces that
                  are not only visually stunning but also harmonious with the
                  environment.
                </p>
                <p>
                  Our commitment to excellence drives us to deliver designs that
                  are timeless, innovative, and tailored to enhance the lives of
                  those who inhabit them.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col md={6}>
              <div className="content">
                <div className="contenthead">
                  <h2>
                    OUR <span>PEOPLE</span>
                  </h2>
                </div>
                <p>
                  <span>A</span>t Interioz, we believe that exceptional interior
                  design goes beyond aesthetics; it’s about creating spaces that
                  inspire, function seamlessly, and respect the environment. Our
                  passion lies in understanding the unique needs and desires of
                  our clients, ensuring that each project reflects their
                  individuality and enhances their daily lives.
                </p>
                <p>
                  We immerse ourselves in the latest design trends and
                  sustainable practices, constantly pushing the boundaries of
                  what’s possible. Our commitment to innovation and excellence
                  allows us to transform ordinary spaces into extraordinary
                  experiences, blending beauty with practicality in every
                  detail.
                </p>
                <p>
                  With a keen eye for detail and a dedication to quality, we
                  strive to create interiors that are not only visually stunning
                  but also harmonious and functional. At Interioz, we are driven
                  by the belief that great design has the power to improve
                  lives, and we are dedicated to making that vision a reality
                  for each of our clients.
                </p>
              </div>
            </Col>

            <Col md={6} className="rightimg">
              <img src={aboutimg1} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Feedback />
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

export default About;
