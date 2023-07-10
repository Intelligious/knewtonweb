import React from "react";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";

const OurCustomer = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-color recent-p">
      <div className="container customer_card ">
        <div className="row ">
          <div className="text-center mt-5 ">
            <div className="recent-text p_text lh-sm">
              What Our Customer Say About Us
            </div>
          </div>
          <div>
            <Slider {...settings}>
              <div className=" mt-5">
                <div className="card shadow">
                  <img
                    src="images/“.png"
                    width="60px"
                    height="38px"
                    className="mt-4 ms-5"
                  />
                  <div className="card-body">
                    <span className="text-start">
                      I highly recommend Knewton Consulting . They was attentive
                      to our needs and worked tirelessly to find us the perfect
                      Website. We couldn't be happier with our new place!
                    </span>
                    <hr />
                    <div className="d-flex align-items-center">
                      <img
                        src="images/Ellipse 15.png"
                        width="50px"
                        height="50px"
                        className="ms-2"
                        alt="Avatar"
                      />
                      <div className="d-flex flex-grow-1 justify-content-between">
                        <span className="customer_name">Barbara D. Smith</span>
                        <div className="star_icon">
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-5">
                <div className="card shadow">
                  <img
                    src="images/“.png"
                    width="60px"
                    height="38px"
                    className="mt-4 ms-5"
                  />
                  <div className="card-body">
                    <span className="text-start">
                      I highly recommend Knewton Consulting . They was attentive
                      to our needs and worked tirelessly to find us the perfect
                      Website. We couldn't be happier with our new place!
                    </span>
                    <hr />
                    <div className="d-flex align-items-center">
                      <img
                        src="images/Ellipse 15.png"
                        width="50px"
                        height="50px"
                        className="ms-2"
                        alt="Avatar"
                      />
                      <div className="d-flex flex-grow-1 justify-content-between">
                        <span className="customer_name">Barbara D. Smith</span>
                        <div className="star_icon">
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-5">
                <div className="card shadow">
                  <img
                    src="images/“.png"
                    width="60px"
                    height="38px"
                    className="mt-4 ms-5"
                  />
                  <div className="card-body">
                    <span className="text-start">
                      I highly recommend Knewton Consulting . They was attentive
                      to our needs and worked tirelessly to find us the perfect
                      Website. We couldn't be happier with our new place!
                    </span>
                    <hr />
                    <div className="d-flex align-items-center">
                      <img
                        src="images/Ellipse 15.png"
                        width="50px"
                        height="50px"
                        className="ms-2"
                        alt="Avatar"
                      />
                      <div className="d-flex flex-grow-1 justify-content-between">
                        <span className="customer_name">Barbara D. Smith</span>
                        <div className="star_icon">
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurCustomer;
