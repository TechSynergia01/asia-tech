import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import { videoTagString, VideoTag } from "react-video-tag";
import ModalVideo from "react-modal-video";
import ServiceList from "../elements/service/ServiceList";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import { FiCast, FiLayers, FiUsers, FiCheck } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { NavLink } from "react-router-dom";

const ServiceListOne = [
  {
    icon: "icon-01.png",
    title: "Unbeatable Wholesale Prices",
    description:
      "Our strong relationships with manufacturers and brands allow us to offer you the most competetive prices.",
  },
  {
    icon: "icon-02.png",
    title: "Global Reach",
    description:
      "Our influence extends beyond Hong Kong, catering to international clients with the same level of dedication.",
  },
  {
    icon: "icon-03.png",
    title: "Best Customer Support",
    description:
      "When you partner with us, Our devoted support team is here to assist you at every step of the way.",
  },
  {
    icon: "icon-02.png",
    title: "Reliability and Trust",
    description:
      "With our extensive industry experience, we have built a reputation for reliability and quality that you can depend on.",
  },
  {
    icon: "icon-01.png",
    title: "Pioneering Excellence",
    description:
      "We lead in wholesale tech distribution, driving industry advancement through innovation and exceptional service.",
  },

  {
    icon: "icon-01.png",
    title: "Exceptional Product Selection",
    description:
      "We offer an extensive range of products, ensuring you have access to the latest and greatest in the market.",
  },
];

class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    let title = "About",
      description =
        "Welcome to Asia Tech & Trading Limited - Your Premier Wholesale Partner for Technological Solutions. At Asia Tech, located in the vibrant hub of Hong Kong, we take immense pride in being a dominant force in the world of wholesale distribution and trade. We stand as a stalwart figure in the industry, specializing in an extensive array of computer products, components, and cutting-edge tech marvels. With an unwavering focus on superior quality and unbeatable prices, we have firmly established ourselves as a prominent player in the global wholesale arena.";
    return (
      <React.Fragment>
        <PageHelmet pageTitle="About" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="ATT-Logo-_JPEG_.svg"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"About"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      height={"600px"}
                      src="/assets/images/about/chapman-chow-de1pD8bmFww-unsplash.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7 text-justify">
                  <div className="about-inner inner">
                    <div className="section-title">
                      {/* <h2 className="title">{title}</h2> */}
                      <p>{description}</p>
                    </div>
                    <hr />
                    <hr />
                    <hr />
                    <div className="row mt--30">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="section-title ">
                          <h3 className="title">Our Core Mission</h3>
                          <p>
                            Our core mission at Asia Tech is to redefine the
                            wholesale experience by offering an unparalleled
                            range of technology solutions, bolstered by our
                            unwavering commitment to top - notch service,
                            remarkable quality, and affordability
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start Service Area  */}
        <div className=" creative-service-wrapper bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="section-title text-left mb--30">
                  <h3>Industries We Cater To</h3>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12 ">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div
                className="row row--35 align-items-center"
                style={{ flexDirection: "row-reverse" }}
              >
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      height={"600px"}
                      src="/assets/images/about/section3.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7 text-justify">
                  <div className="about-inner inner">
                    <div className="section-title">
                      {/* <h2 className="title">{title}</h2> */}
                      {/* <p>{description}</p> */}
                    </div>
                    <hr />
                    <hr />
                    <hr />
                    <div className="row mt--30">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="section-title ">
                          <h3 className="title">
                            Explore Our Diverse Product Range
                          </h3>
                          <p>
                            Uncover an array of tech solutions within Asia
                            Tech's expansive catalog, encompassing over 1000
                            top-tier products. Our selection spans across
                            computer components, mobile parts, state-of-the-art
                            television innovations, and a host of other
                            offerings. We are dedicated to continually expanding
                            our inventory to ensure we meet your evolving
                            technological needs effectively.
                          </p>
                          <a className="rn-btn" href="/product">
                            Explore
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start About Area  */}

        {/* End About Area  */}

        {/* Start CounterUp Area */}
        {/* <div className="rn-counterup-area pb--120 bg_color--1">
                 <div className="counterup-area pb--80 pt--40 bg_image bg_image--33  theme-text-white" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 m-5">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500 text-danger">Quick Overview</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                        </div>
                        
                    </div>
                </div> */}

        <div
          className="service-area creative-service-wrapper  bg_color--1 "
          id="service"
        >
          <div className="container">
            <div className="row ">
              <div className="col-lg-8">
                <div className="feature-area">
                  <h2>Why Choose Asia Tech</h2>
                </div>
              </div>
            </div>
            <div className=" row service-one-wrapper mt--30 mb--60">
              {ServiceListOne.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a>
                    <div className="about-inner inner  ">
                      <div className="icon p-4 text-center ">
                        <img
                          src={`/assets/images/icons/${val.icon}`}
                          alt="Service Icon"
                        />
                      </div>
                      <div className="content text-justify ml-3">
                        <h4 className="title text-center">{val.title}</h4>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Start Finding Us Area  */}

        {/* End Finding Us Area  */}

        {/* Start Team Area  */}
        <div className="rn-team-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title service-style--3 text-center mb--25 text-justify ">
                  <h2 className="title">New Products</h2>
                  <p className=" text-justify">
                    Explore Asia Tech's extensive catalog featuring over 1000
                    high-quality products, including computer components, mobile
                    parts, television innovations, and much more. We
                    continuously expand our offerings to meet your evolving
                    technological needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <NavLink to={"/product"}>
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        height={"500px"}
                        src="/assets/images/team/team-01.jpg"
                        alt="Blog Images"
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <NavLink to={"/product"}>
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        height={"500px"}
                        src="/assets/images/team/team-02.jpg"
                        alt="Blog Images"
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <NavLink to={"/product"}>
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        height={"500px"}
                        src="/assets/images/team/team-03.jpg"
                        alt="Blog Images"
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <NavLink to={"/product"}>
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        height={"500px"}
                        src="/assets/images/team/team-04.jpg"
                        alt="Blog Images"
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <NavLink to={"/product"}>
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        height={"500px"}
                        src="/assets/images/team/team-05.jpg"
                        alt="Blog Images"
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <NavLink to={"/product"}>
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        height={"500px"}
                        src="/assets/images/team/team-06.jpg"
                        alt="Blog Images"
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <NavLink to={"/product"}>
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        height={"500px"}
                        src="/assets/images/team/team-07.jpg"
                        alt="Blog Images"
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <NavLink to={"/product"}>
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        height={"500px"}
                        src="/assets/images/team/team-08.jpg"
                        alt="Blog Images"
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <NavLink to={"/product"}>
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        height={"500px"}
                        src="/assets/images/team/team-09.jpg"
                        alt="Blog Images"
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* End Single Team  */}
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Brand Area */}
        {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* End Brand Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default About;
