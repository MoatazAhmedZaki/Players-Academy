import React from "react";
import "../styles/SubHeader.css";
import Fade from "react-reveal/Fade";


export default function SubHeader() {
  return (
    <section id="sub-header" className="py-5 my-4">
        <div className="container">
          <Fade>
      <h2 className="container">
        Professional athlete experiences <span> for everyone </span>
      </h2>

      <p className="w-75 mx-auto">
        Experience courses from the top athletes in professional sports. With
        expert guidance, take your game to the next level through in-depth
        analysis, courses, and training workbooks.
      </p>
      </Fade>
      </div>
    </section>
  );
}
