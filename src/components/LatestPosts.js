import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LatestPosts.css";
import Fade from "react-reveal/Fade";

const Posts = require("../dataBase/LatestPosts.json");

export default function LatestPosts() {
  

  const [line, setLine] = useState(0);
  const [pointer, setPointer] = useState(0);

  function scrollRight() {
    const allStep = document.getElementById("line").offsetWidth;
    const step = allStep / 6;

    document.getElementById("containerr").scrollLeft += document.getElementById(
      "slide"
    ).scrollWidth;

    if (pointer < 6) {
      setLine(line + step);

      setPointer(pointer + 1);
    }
  }

  function scrollLeft() {
    const allStep = document.getElementById("line").offsetWidth;
    const step = allStep / 6;

    document.getElementById("containerr").scrollLeft -= document.getElementById(
      "slide"
    ).scrollWidth;

    if (pointer > 0) {
      setLine(line - step);
      setPointer(pointer - 1);
    }
  }

  return (
    <section id="LatestPosts " className="LatestPosts py-5">
      <div className="d-flex justify-content-between align-items-end container py-5 ">
        <Fade>
        <h4 className="">Latest posts</h4>
        <Link to="/Blog" className="view-all">
          View all news <i class="fas fa-chevron-right"></i>
        </Link>
        </Fade>
      </div>

      <div class="containerr  " id="containerr">


        {Posts.map((Post, i) => (
          <div class="slide" id="slide">
            <div className="img-holder">
              <img src={Post.img} className="img-fluid" alt={Post.caption} />
            </div>

            <div className="slide-caption p-3">
              <div className="d-flex  justify-content-between align-items-center ">
                <p className="slide-caption-type">{Post.type}</p>
                <p className="slide-caption-date">{Post.date}</p>
              </div>

              <p className="slide-caption-title">{Post.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container py-5  d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <div className="my-2">
          <button
            class="posts-btn"
            id="left-button"
            onClick={() => scrollLeft()}
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <button
            class="posts-btn"
            id="right-button"
            onClick={() => scrollRight()}
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <div id="line" class="marker  my-2" style={{ width: "80%" }}>
          <div class="line" style={{ width: line + "px" }}></div>
        </div>
      </div>
    </section>
  );
}
