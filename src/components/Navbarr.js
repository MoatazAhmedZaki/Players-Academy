import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import Logo from "../imags/logo.svg";

import "../styles/Navbarr.css";
export default function Navbarr() {
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.getElementById("line-one").style.left = "100%";
      document.getElementById("line-two").style.right = "100%";
      document.getElementById("line-three").style.top = "0";
      document.getElementById("line-four").style.top = "0";
      document.getElementById("sliding-words").style.top = "-19px";
      document.getElementById("menu-holder").style.height = "100vh";
    } else {
      document.getElementById("line-one").style.left = "0";
      document.getElementById("line-two").style.right = "0";
      document.getElementById("line-three").style.top = "100%";
      document.getElementById("line-four").style.top = "100%";
      document.getElementById("sliding-words").style.top = "0px";
      document.getElementById("menu-holder").style.height = "0";
    }
  }, [toggle]);

  const menu = () => {
    if (toggle) {
      settoggle(false);
    } else {
      settoggle(true);
    }
  };

  return (
    <React.Fragment>
      <nav
        className="d-flex justify-content-between align-items-center navbar"
        id="navbar"
      >
        <div
          className="hide-lg white-border pb-3 grow  justify-content-start "
          style={{ color: "white" }}
        >
          <button
            onClick={menu}
            className="menu-btn mr-3 d-inline-block "
            id="open"
          >
            <div className="line-three" id="line-three"></div>

            <div className="line-four" id="line-four"></div>

            <div className="line-one" id="line-one"></div>

            <div className="line-two" id="line-two"></div>
          </button>

          <p className="mb-0 d-inline-block">
            <div className="sliding-words-wrapper ">
              <div class="sliding-words" id="sliding-words">
                <span>MENU</span>
                <span>CLOSE</span>
              </div>
            </div>
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center hide-sm">
          <Link to="/"       
>Courses </Link>
          <Link to="/About">About</Link>

          <Link to="/Blog">blog</Link>
        </div>
        <div className="logo grow  justify-content-center">
          <img src={Logo} alt="Website Logo" />
        </div>

        <div className="d-flex justify-content-between align-items-center  hide-sm">
          <div className="d-flex flex-column text-right">
            <a href="mailto:someone@example.com">
              <p className="mb-0">
                <small className="label">need help?</small>
              </p>
              <p>
                <svg
                  className="mx-2 mb-1"
                  width="14px"
                  height="14px"
                  viewBox="0 0 14 14"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                >
                  <title>Group 6</title>
                  <desc>Created with Sketch.</desc>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <g
                      id="Group-6"
                      transform="translate(1.000000, 1.000000)"
                      stroke="#FFFFFF"
                    >
                      <g id="Group-5">
                        <path
                          d="M10.9090909,12 L1.09090909,12 C0.488181818,12 0,11.5112727 0,10.9090909 L0,4.63636364 L6,0 L12,4.63636364 L12,10.9090909 C12,11.5112727 11.5112727,12 10.9090909,12 Z"
                          id="Stroke-1"
                        ></path>
                        <path
                          d="M0,4.86725455 L4.81963636,7.96761818 C5.53854545,8.43016364 6.46145455,8.43016364 7.18036364,7.96761818 L12,4.86725455"
                          id="Stroke-3"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                Contact Us
              </p>
            </a>
          </div>
          <Link to="/">login</Link>
        </div>
        <div className="hide-lg white-border pb-3 text-right grow  justify-content-end ">
          <a href="mailto:someone@example.com">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 14 14"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
            >
              <title>Group 6</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g
                  id="Group-6"
                  transform="translate(1.000000, 1.000000)"
                  stroke="#FFFFFF"
                >
                  <g id="Group-5">
                    <path
                      d="M10.9090909,12 L1.09090909,12 C0.488181818,12 0,11.5112727 0,10.9090909 L0,4.63636364 L6,0 L12,4.63636364 L12,10.9090909 C12,11.5112727 11.5112727,12 10.9090909,12 Z"
                      id="Stroke-1"
                    ></path>
                    <path
                      d="M0,4.86725455 L4.81963636,7.96761818 C5.53854545,8.43016364 6.46145455,8.43016364 7.18036364,7.96761818 L12,4.86725455"
                      id="Stroke-3"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </nav>

      <div
        className="menu-holder d-flex flex-column justify-content-end align-items-center "
        id="menu-holder"
      >
        <Link to="/" onClick={() => settoggle(false)}>
          course
        </Link>
        <Link to="/About" onClick={() => settoggle(false)}>
          About
        </Link>

        <Link to="/Blog" onClick={() => settoggle(false)}>
          Blog
        </Link>

        <Link to="/" onClick={() => settoggle(false)}>
          Register
        </Link>
        <Link to="/" onClick={() => settoggle(false)}>
          <button>
            LOGIN <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </Link>

        <div className="d-flex justify-content-center align-items-center py-3 ">
          <div class="social-media-box">
            <i class="fab fa-instagram"></i>
          </div>
          <div class="social-media-box">
            <i class="fab fa-youtube"></i>
          </div>

          <div class="social-media-box">
            <i class="fab fa-facebook-f"></i>
          </div>

          <div class="social-media-box">
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
