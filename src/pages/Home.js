import React ,{useEffect}from "react";
import Footer from "../components/Footer";
import HappyCustomers from "../components/HappyCustomers";
import Header from "../components/Header";
import LatestPosts from "../components/LatestPosts";
import OurCourses from "../components/OurCourses";
import SubHeader from "../components/SubHeader";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <React.Fragment>
      <Header />
      <SubHeader />
      <OurCourses />
      <HappyCustomers />
      <LatestPosts />
      <Footer/>
    </React.Fragment>
  );
}
