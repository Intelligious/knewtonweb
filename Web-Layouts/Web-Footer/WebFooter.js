export default function WebFooter() {
  return (
    <footer className="bg-color ">
      <div className="container mb-3">
        <div className="row ">
          <div className="col-12 col-md-4  mt-5 ">
            <a href="/">
              <img
                src="images/Intelliper-Logo.png"
                className="img-fuild  mb-3"
              />
            </a>
            <h6 className="f_text">
            We blend innovation, design, and technology to deliver exceptional solutions that empower our clients' growth. Join us on the path to digital transformation and unlock your true potential today.
            </h6>
          </div>
          <div className="col-12 col-md-4 mt-5 ps-md-5">
            <h2 className="text-bold">Follow Us </h2>
            <a href="https://www.facebook.com/" className="d-flex mt-4 ">
              <i className="fa-brands fa-facebook icon-2 "></i>
              <h6 className="ps-2 mt-1">fb.com/Knewton_Consulting</h6>
            </a>
            <a href="https://www.instagram.com/" className="d-flex mt-2 ">
              <i className="fa-brands fa-instagram icon-2"></i>
              <h6 className="ps-2 mt-1">@Knewton_Consulting</h6>
            </a>
            <a href="https://twitter.com/" className="d-flex mt-2 ">
              <i className="fa-brands fa-twitter icon-2"></i>
              <h6 className="ps-2 mt-1">@Knewton_Consulting</h6>
            </a>
            <a href="https://dribbble.com/" className="d-flex mt-2 ">
              <i className="fa-brands fa-dribbble icon-2"></i>
              <h6 className="ps-2 mt-1">Dribbble.comKnewton_Consulting</h6>
            </a>
          </div>
          <div className="col-12 col-md-4 mt-5 ps-md-5 footer_p">
            <h2 className="text-bold">Help</h2>
            <a href="/template">
              <h6 className="mt-4">Customer Support</h6>
            </a>
            <a href="/template">
              <h6 className="mt-3">Delivery Details</h6>
            </a>
            <a href="/template">
              <h6 className="mt-3">Terms & Conditions</h6>
            </a>
            <a href="/template">
              <h6 className="mt-3">Privacy Policy</h6>
            </a>
          </div>
        </div>
      </div>
      <div className="footer_hr " />
      <h4 className="text-center pb-2 pt-3">
        © 2023 Knewton Consulting | All Rights Reserved
      </h4>
    </footer>
  );
}
