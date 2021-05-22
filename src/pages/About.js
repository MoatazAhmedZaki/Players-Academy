import React ,{useEffect} from "react";
import Footer from "../components/Footer";
import "../styles/About.css";
import Fade from "react-reveal/Fade";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <React.Fragment>
      <div className="container">
        <Fade>
        <div className="about-title">
          <h1>
            The blueprint to <br /> <span> greatness </span> is here
          </h1>
        </div>

        <div className="videoWrapper my-5">
          <iframe title="Website-Video"
            src="https://players.brightcove.net/6060751434001/default_default/index.html?videoId=6080451328001"
            frameborder="0"
            allowfullscreen
            width="560"
            height="349"
          ></iframe>
        </div>

        <div className="about-prah">
          <h2>About</h2>

          <main class="text">
            <p>
              Players Academy (www.playersacademy.com), headquartered in New
              York City, is the home for premium sports instruction and insight,
              taught by the greatest names in sports. Our online training
              academy is more than just a series of “how to” videos. It’s an
              exclusive blueprint straight from the minds of the top athletes in
              the world. Each class will be a combination of demonstrations and
              interviews, discussing specific skill development and tips,
              drills, training guidelines, and game analysis; each with a
              downloadable summarized workbook.
            </p>
            <p>
              Beyond that, the classes will provide personal perspective and
              anecdotes from the athletes on commitment, focus, teamwork and
              popular development topics such as specialization, strength and
              conditioning, nutrition, and deliberate practice.
            </p>
          </main>
        </div>
        </Fade>
      </div>

      <Footer />
    </React.Fragment>
  );
}
