import React from "react";
import { Link } from "react-router-dom";
import "../styles/OurCourses.css";
import Fade from "react-reveal/Fade";

const Cousres = require("../dataBase/coursesData.json");

export default function OurCourses() {
  return (
    <section className="mycontainer OurCourses mx-auto my-4" id="OurCourses">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Fade>
        <h2 className="title">Our Courses</h2>
        <Link to="/About">
          <button className="section-btn"> About us </button>
        </Link>
        </Fade>
      </div>

      <div className="row">
      <Fade>

        {Cousres.map((course, i) => (
          <div className="col-md-6 col-xs-12 my-4 box">
            <div id="figure2" className="fig">
              <img
                src={course.MainImg}
                className={" img-fluid " + (i === 2 ? " " : "img2")}
                alt={course.title1 + " pic "}
              />

              <video id="video" preload="auto" muted className="video-hover ">
                <source src={course.video} type="video/mp4" />
              </video>

              <div className="thum-caption d-flex justify-content-between align-items-center ">
                <div>
                  <p className="title1"> {course.title1}</p>
                  <p className="title2"> {course.title2}</p>
                </div>

                {course.classes ? (
                  <p className=" classes ">
                    
                    <i class="fas fa-video"></i> {course.classes} classes
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
                        </Fade>

      </div>
    </section>
  );
}
