import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Footer from "./Footer";


const Home = () => {
  return (
  <div >
      <Navbar />
      <section id="home">
        <Header />
      </section>
      {/* <ContactUs /> */}
      <section id="about">
        <AboutMe />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="blog">
        <Blog />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
