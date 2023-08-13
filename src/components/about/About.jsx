import React from "react";
import "./about.css";
import { meabout } from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={meabout} alt="about_image" />
          </div>
        </div>
        <div className="about__content"></div>
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>Internship at AppFactory</small>
          </article>
          <article className="about__card">
            <AiFillProject className="about__icon" />
            <h5>Projects</h5>
            <small>Written 2000+ lines of code</small>
          </article>
        </div>
       </div>
    </section>
  );
};

export default About;
