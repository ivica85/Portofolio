import React from "react";
import Featured from "./components/featured";
import Footer from "./components/header_footer/Footer";
import Header from "./components/header_footer/Header";
import Highlights from "./components/Highlights";
import Info from "./components/Info";
import Location from "./components/location";
import Projects from "./components/projects";

import "./resources/styles.css";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div>
      <Header />

      <Element name="start">
        <Featured />
      </Element>

      <Element name="tech">
        <Info />
      </Element>

      <Element name="desc">
        <Highlights />
      </Element>

      <Element name="myprojects">
        <Projects />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
