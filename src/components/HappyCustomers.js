import React, { useState, useEffect } from "react";
import "../styles/HappyCustomers.css";
import Fade from "react-reveal/Fade";

const Customers = require("../dataBase/happyCustomers.json");

export default function HappyCustomers() {
  const [allData, setData] = useState(Customers);

  const [itemIndex, setItemIndex] = useState(0);

  const [selectedItem, setSelectedItem] = useState(allData[0]);

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
    <section id="HappyCustomers" className="my-5 py-5 HappyCustomers">
      <Fade>
      
      <h1 className="title">Happy customers </h1>
      </Fade>


      <div className="image d-flex justify-content-end align-items-start flex-column">
        <Fade>
        <img
          src="https://playersacademy.com/wp-content/uploads/2019/08/Rob-Pannell-1920x1080.jpg"
          className="src"
        />
        <div className="image-btn-holder">
          <button onClick={() => next()} className="image-btn ">
            <i class="fas fa-chevron-left"></i>
          </button>

          <button onClick={() => prev()} className="image-btn ">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        </Fade>
      </div>

      <div className=" d-flex justify-content-center align-items-start flex-column  container coma">
        <div className="comments p-5 ">
          <Fade spy={itemIndex}>
            <div>
              <div class="text">

                <p>"{selectedItem.comment}"</p>

                <span class="person">{selectedItem.customer}</span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
