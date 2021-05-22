import React from "react";
import "../styles/Footer.css";
import Fade from "react-reveal/Fade";

import logo from "../imags/logo.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="pt-5 d-flex align-items-center flex-column container ">
      <Fade>
      <img src={logo} alt="logo" className="py-5 img-fluid logo" />

      <form className="newsLetter  d-flex align-items-center flex-column container">
        <label>Signup to our newsletter</label>

        <input placeholder="Your email here" />
        <div className="form-border"></div>
        <button class="submit my-5" disabled="">
          <span>Join newsletter</span>
        </button>
      </form>

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

      <div className="to-up-arrow">
        <button className=" yellow-circle"  onClick={ () => window.scrollTo(0, 0)}
>
          <i class="fas fa-chevron-up"></i>
        </button>
      </div>

      <div className="d-flex justify-content-center align-item-center pages-links">
        <Link to="/About"><p className="px-2"> About </p></Link> <p> / </p>
        <Link to="/"> <p className="px-2"> Courses </p></Link>
      </div>

      <div className="footer-border"></div>

      <div className="footer-links d-flex align-items-center justify-content-center py-3">
        <Link to="/"> Club & Team Sales </Link>

        <p> / </p>

        <Link to="/">Terms of Use </Link>
        <p> / </p>
        <Link to="/">Privacy Policy </Link>
      </div>

      <div className="footer-links pb-4">
        <p>© 2021 Players Academy</p>
      </div>
      </Fade>
    </footer>
  );
}
