import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const dataBase = require("../dataBase/data.json");

export default function Header() {
  const [allData, setData] = useState(dataBase);

  const [itemIndex, setItemIndex] = useState(0);

  const [selectedItem, setSelectedItem] = useState(allData[0]);

  function functionA(item, i) {
    setSelectedItem(item);
    setItemIndex(i);
  }

  useEffect(() => {
    var vid = document.getElementsByClassName("video-hover");

    [].forEach.call(vid, function (item) {
      item.addEventListener("mouseover", hoverVideo, false);
      item.addEventListener("mouseout", hideVideo, false);
    });

    function hoverVideo(e) {
      if (e.target) {
        e.target.play();
      }
    }

    function hideVideo(e) {
      if (e.target) {
        e.target.pause();
        e.target.currentTime = 0;
      }
    }
  });

  useEffect(() => {
    setSelectedItem(allData[itemIndex]);

    const timer = setTimeout(() => {
      next();
    }, 8000);
    return () => clearTimeout(timer);
  });

  function next(e) {
    if (itemIndex < 2) {
      setItemIndex(itemIndex + 1);
    } else {
      setItemIndex(0);
      console.log("false");
    }
  }

  function prev(e) {
    if (itemIndex === 0) {
      setItemIndex(2);
    } else {
      setItemIndex(itemIndex - 1);
      console.log("false");
    }
  }

  return (
    <header
      id="header"
      className="header d-flex justify-content-around flex-column"

      // style={{
      //   background: `  radial-gradient(circle, transparent 10%, #000 80%) , linear-gradient(180deg, transparent 0, #000) , url(${selectedItem.MainImg})`,
      // }}
    >
      <p class="header-trans">Professional athlete experiences</p>

      <Fade spy={itemIndex} duration={4000}>
        <div
          className=" my-bg"
          style={{
            background: `  radial-gradient(circle, transparent 10%, #000 80%) , linear-gradient(180deg, transparent 0, #000) , url(${selectedItem.MainImg})`,
          }}
        ></div>
      </Fade>

      <div className=" d-flex justify-content-start align-items-center  h-75  overflow-hidden">
        <Fade spy={itemIndex} duration={4000}>
          <span>
            <div className="header-caption ">
              <h3 className="upper">{selectedItem.upper}</h3>
              <h2 className="title color1">{selectedItem.title1}</h2>

              <h2 className="title color2"> {selectedItem.title2}</h2>
              <h2 className="title3 color1"> {selectedItem.title3}</h2>

              <div class="description">
                {selectedItem.Description}{" "}
                <span className="color1"> {selectedItem.plusDescription} </span>
              </div>

              <Link to="/">
                <button> {selectedItem.btn} </button>
              </Link>
            </div>
          </span>
        </Fade>
      </div>

      <div className="">
        <div className=" d-flex justify-content-end align-items-center mt-3 mx-auto container  thum-cont ">
          {allData.map((item, i) => (
            <div
              id="figure"
              onClick={() => functionA(allData[i], i)}
              className={
                " fig  test m-3    " +
                (selectedItem.data_id === item.data_id ? " test2 " : "")
              }
            >
              <img
                src={item.MainImg}
                className={" img-fluid " + (i === 2 ? " " : "img2")}
                alt={item.title1}
              />
              <div className="  d-flex justify-content-end align-items-start p-3 flex-column thum-caption">
                <p className="title1"> {item.title1}</p>
                <p className="title2"> {item.title2}</p>
              </div>

              <video id="video" preload="auto" muted className="video-hover ">
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>

        <div className=" d-flex justify-content-end  align-items-center   mx-auto container">
          <div class="marker my-4">
            <div
              class="line"
              style={
                itemIndex === 1
                  ? { width: "50%" }
                  : itemIndex === 2
                  ? { width: "100%" }
                  : { width: "0" }
              }
            ></div>
          </div>

          <button
            className="prog  mx-3"
            style={{ width: "20px" }}
            onClick={() => prev()}
          >
            <i class="fas fa-chevron-left"></i>
          </button>

          <button
            className="prog  mx-3"
            style={{ width: "20px" }}
            onClick={() => next()}
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
