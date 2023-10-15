import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import { Link } from "react-router-dom";

const PortfolioList = [
  {
    image: "team-1",
    category: "Products",
    title: "Computer Components",
    link: "/product",
  },
  {
    image: "team-2",
    category: "Products",
    title: "Mobile Parts and Accessories",
    link: "/product",
  },
  {
    image: "team-3",
    category: "Products",
    title: "Television Innovations",
    link: "/product",
  },
  {
    image: "team-4",
    category: "Products",
    title: "Audio Equipments",
    link: "/product",
  },
  {
    image: "team-5",
    category: "Products",
    title: "Networking Devices",
    link: "/product",
  },
  {
    image: "team-6",
    category: "Products",
    title: "Home Automation",
    link: "/product",
  },
  {
    image: "team-7",
    category: "Products",
    title: "Office Equipments",
    link: "/product",
  },
  {
    image: "team-8",
    category: "Products",
    title: "Health and Fitness Tech",
    link: "/product",
  },
  {
    image: "team-9",
    category: "Products",
    title: "Outdoor Tech",
    link: "/product",
  },
  //   {
  //     image: "image-10",
  //     category: "Products",
  //     title: "Home Entertainment Accessories",
  //     link: "/product-",
  //   },
  //   {
  //     image: "image-11",
  //     category: "Products",
  //     title: "Smart Home Devices",
  //     link: "/product-0",
  //   },
  //   {
  //     image: "image-12",
  //     category: "Products",
  //     title: "Audio and Music Equipment",
  //     link: "/product-1",
  //   },
  //   {
  //     image: "image-13",
  //     category: "Products",
  //     title: "Smart Wearables",
  //     link: "/product-2",
  //   },
  //   {
  //     image: "image-14",
  //     category: "Products",
  //     title: "Gaming Accessories",
  //     link: "/product-3",
  //   },
  //   {
  //     image: "image-15",
  //     category: "Products",
  //     title: "Other Tech Marvels",
  //     link: "/product-4",
  //   },
  //   {
  //     image: "image-16",
  //     category: "Products",
  //     title: "Photography and Videography Gear",
  //     link: "/product-5",
  //   },
  //   {
  //     image: "image-17",
  //     category: "Products",
  //     title: "Virtual and Augmented Reality",
  //     link: "/product-6",
  //   },
  //   {
  //     image: "image-18",
  //     category: "Products",
  //     title: "Electronic Components",
  //     link: "/product-7",
  //   },
];

class Portfolio extends Component {
  render() {
    let title = "Our Works",
      description =
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.";
    return (
      <React.Fragment>
        <div className="portfolio-wrapper">
          {/* <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
          <div className="portfolio-slick-activation mt--70 mt_sm--40">
            <Slider {...portfolioSlick2}>
              {PortfolioList.map((value, index) => (
                <div className="portfolio" key={index}>
                  <div className="thumbnail-inner">
                    <div className={`thumbnail ${value.image}`}></div>
                    <div className={`bg-blr-image ${value.image}`}></div>
                  </div>
                  <div className="content">
                    <div className="inner">
                      <p>{value.category}</p>
                      <h4 className="title">
                        {/* <a href="/portfolio->{value.title}</a> */}
                      </h4>
                      <div className="portfolio-button">
                        <a className="rn-btn" href={value.link}>
                          Explore
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <Link className="link-overlay" to="/product"></Link> */}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Portfolio;
