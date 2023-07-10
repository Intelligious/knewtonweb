import React, { useEffect, useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSection = () => {
  const [isImageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setImageVisible(window.innerWidth > 992);
    };

    handleResize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="container-fluid" id="home">
      <div className="row">
        <div
          className={`col-12 col-md-6 col-lg-6 ${
            !isImageVisible && "col-md-12"
          }`}
        >
          <div className="hero_heading">
            Empower Your Digital Transformation Journey
          </div>
          <div className="hero_para">
            At Knewton Consulting we offer a comprehensive range of services to
            fuel your digital success.
          </div>
          <div className="mt-5 d-flex flex-column flex-sm-row ">
            <a href="https://wa.me/qr/47O6U47IHJNZD1">
              <button type="button" className="hero__button button_margin">
                Let’s Talk{" "}
                <ChatBubbleOutlineIcon
                  style={{
                    width: "24px",
                    height: "24px",
                    marginLeft: "3px",
                  }}
                />
              </button>
            </a>

            <a href="#ourservices" className="pointer mt-3  ">
              <span className="hero_services mobile-padding mt-3">
                Check our Services{" "}
                <ArrowForwardIcon
                  style={{
                    width: "24px",
                    height: "24px",
                    marginLeft: "0px",
                    color: "#ffb400",
                    cursor: "pointer",
                  }}
                />
              </span>
            </a>
          </div>
        </div>
        {isImageVisible && (
          <div className="col-12 col-md-6 col-lg-6">
            <img
              src="images/landing-img.png"
              className="img-fluid"
              alt="Landing"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
