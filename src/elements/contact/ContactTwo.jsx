import React, { Component } from "react";
import ContactForm from "./ContactForm";

class ContactTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "100%",
      height: window.innerWidth <= 768 ? "450px" : "625px",
    };
  }

  updateDimensions = () => {
    this.setState({ height: window.innerWidth <= 768 ? "400px" : "625px" });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-end">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-center mb--50 ">
                <h2 className="title">Contact Us.</h2>
                <p className="description text-justify text-center">
                  Unlocking Tomorrow's Tech Today <hr />
                  Join Hands with Asia Tech & Trading Limited!
                </p>
              </div>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 order-1 order-lg-2 p-5 pl-5 mt-5">
              {/* <div className="thumbnail mb_md--30 mb_sm--30 ">
                <img
                  src="/assets/images/about/about-420.jpg"
                  alt="asistech"
                  height={"600px"}
                  width={"600px"}
                  style={{ marginBottom: "30px" }}
                /> */}
              <div className="rn-contact-map-area position-relative">
                <div
                  id="map"
                  style={{ height: this.state.height, width: this.state.width }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactTwo;
