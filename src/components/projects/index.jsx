import React from "react";
import Button from "../utils/Button";
import uuid from "react-uuid";
import Zoom from "react-reveal/Zoom";

const boxes = [
  {
    projectName: "Typeracer!",
    icon: `Link to project...`,
    description: "How many words you can type in 20 seconds",
    linkto: "https://igrabrzogtipkanja.netlify.com/",
    delay: 500,
  },
  {
    projectName: "App decision!",
    icon: `link to project...`,
    description: "Put your life in maschine hands",
    linkto: "https://appodluke.netlify.com/",
    delay: 0,
  },

  {
    projectName: "Advice App!",
    icon: `link to project...`,
    description: "App with advices...",
    linkto: "https://izrekedana.netlify.com/",
    delay: 500,
  },
  {
    projectName: "Corona Tracker",
    icon: `link to project...`,
    description: "Select region to see statistics of COVID-19",
    linkto: "https://coronastatistic.netlify.app/",
    delay: 500,
  }
];

const showBoxes = () =>
  boxes.map((box) => (
    <Zoom key={uuid()} delay={box.delay}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">{box.projectName}</div>
          <div className="pricing_description">{box.description}</div>
          <div className="pricing_buttons">
            <Button link={box.linkto}>{box.icon}</Button>
          </div>
        </div>
      </div>
    </Zoom>
  ));

const Projects = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>My projects</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Projects;
