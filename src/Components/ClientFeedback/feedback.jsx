import React from "react";
import "./feedback.css";
import test1 from "../../Assets/test1.png";

const Feedback = () => {
const testimonials = [
  {
    name: "Madriya Merin",
    title: "Spatial Design",
    review: "Arrangements are made to transport cargo by sea to meet customers’ international transportation needs.",
    rating: 4,
    image: test1,
  },
  {
    name: "Mike Hardson",
    title: "Spatial Design",
    review: "Arrangements are made to transport cargo by sea to meet customers’ international transportation needs.",
    rating: 4.2,
    image: test1,
  },
  {
    name: "Marlon Samuls",
    title: "Spatial Design",
    review: "Arrangements are made to transport cargo by sea to meet customers’ international transportation needs.",
    rating: 4.5,
    image: test1,
  },
  {
    name: "Marco Jansen",
    title: "Spatial Design",
    review: "Arrangements are made to transport cargo by sea to meet customers’ international transportation needs.",
    rating: 4.7,
    image: test1,
  },
  {
    name: "Mithel Mars",
    title: "Spatial Design",
    review: "Arrangements are made to transport cargo by sea to meet customers’ international transportation needs.",
    rating: 4.9,
    image: test1,
  },
  {
    name: "Vishnu Sahu",
    title: "Spatial Design",
    review: "Arrangements are made to transport cargo by sea to meet customers’ international transportation needs.",
    rating: 4.9,
    image: test1,
  },
];

  return (
    <>
    <div className="conbg">
     <div className="container-fluid">
     <div className="container">
      <h2 className="feebtitle py-2">What Our Clients Say</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-6 col-lg-4 pb-2" key={index}>
            <div className="card testimonial-card p-3">
              <div className="innercard align-items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="img-fluid rounded-circle testimonial-img me-3"
                />
                <div>
                  <h5 className="mb-0">{testimonial.name}</h5>
                  <p>{testimonial.title}</p>
                </div>
              </div>
              <p className="mt-3">{testimonial.review}</p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="rating">
                  {[...Array(6)].map((_, i) => (
                    <span
                      key={i}
                      className={i < Math.round(testimonial.rating) ? "star-filled" : "star-empty"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <small>{testimonial.rating}/6 on Design</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Feedback;
