import React ,{useEffect} from "react";
import Footer from "../components/Footer";
import "../styles/Blog.css";
import Fade from "react-reveal/Fade";


const Posts = require("../dataBase/LatestPosts.json");

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="mt-5 container  ">
      <div className="py-5 blog row ">

        {Posts.map((Post, i) => (
          <React.Fragment>
            {i === 0 ? (
              <div class="slide slide1  col-sm-12 mt-5 " id="slide1">
                <Fade>
                <div className="img-holder">
                  <img src={Post.img} className="img-fluid" alt={Post.caption}/>
                </div>

                <div className="slide-caption p-3">
                  <div className="d-flex  justify-content-between align-items-center ">
                    <p className="slide-caption-type">{Post.type}</p>
                    <p className="slide-caption-date">{Post.date}</p>
                  </div>

                  <p className="slide-caption-title">{Post.caption}</p>
                </div>
                </Fade>
              </div>
              
            ) : (
              
              <div class="slide col-md-6 col-sm-12 " id="slide">
                <Fade>
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
                </Fade>
              </div>
            )}
          </React.Fragment>
        ))}
     </div>

      <Footer />
    </div>
  );
}
