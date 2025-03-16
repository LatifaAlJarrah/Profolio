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
    <main>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Portfolio />
      <Blog />
      <Footer />
    </main>
  );
};

export default Home;
