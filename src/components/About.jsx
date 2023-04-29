import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Apple is a company that designs and manufactures a wide range of
              consumer electronics, computer software, and online services. Some
              of Apple's most popular products include: iPhone: A smartphone
              that runs on Apple's iOS operating system and is known for its
              high-quality camera, user-friendly interface, and integration with
              other Apple products. iPad: A tablet that runs on Apple's iOS
              operating system and is designed for productivity, creativity, and
              entertainment. Mac: A series of desktop and laptop computers that
              run on Apple's macOS operating system and are known for their
              sleek design, powerful performance, and user-friendly interface.
              Apple Watch: A smartwatch that can track health and fitness
              metrics, receive notifications, and run apps. AirPods: Wireless
              earbuds that can connect to Apple devices and offer high-quality
              audio and a convenient, wireless design. Apple TV: A digital media
              player that can stream movies, TV shows, and other content to a
              television.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
