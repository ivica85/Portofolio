import React, { useState, useEffect } from "react";
import Button from "../utils/Button";
import Fade from "react-reveal/Fade";
import GitHubIcon from "@material-ui/icons/GitHub";
import Slide from "react-reveal/Slide";

const ProcentsProgres = () => {
  const [procentStart, setProcentStart] = useState(0);
  const [procentEnd] = useState(80);

  const porcentage = () => {
    if (procentStart < procentEnd) {
      setProcentStart(procentStart + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      porcentage();
    }, 30);
  });

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade onReveal={() => porcentage()}>
          <div className="discount_porcentage">
            <span>{procentStart}%</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <Button link={'https://github.com/ivica85'}>
            <h2 style={{color: 'white'}}>GitHub</h2>
            </Button>
          </div>
        </Slide>
        <Slide right>
          <div className="discount_description">
           <Button link={`https://www.linkedin.com/in/ivica-ivan%C4%8Di%C4%87-9b8987187/`}>
           <h2 style={{color: 'white'}}>LinkedIn</h2>
            </Button>
          </div>
        </Slide>
        
        
      </div>
    </div>
  );
};

export default ProcentsProgres;
