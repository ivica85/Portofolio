import React from "react";
import Zoom from "react-reveal/Zoom";

import javascript from "../../resources/images/icons/javascript.png";
import react from "../../resources/images/icons/react-icon.webp";
import redux from "../../resources/images/icons/redux-icon.png";
import css from "../../resources/images/icons/css.png";

const Info = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${javascript})` }}
                  ></div>
                  <div className="vn_title">Javascript</div>
                  <div className="vn_desc">JS technology</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${react})` }}
                  ></div>
                  <div className="vn_title">Rect</div>
                  <div className="vn_desc"> React technology</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${redux})` }}
                  ></div>
                  <div className="vn_title">Redux</div>
                  <div className="vn_desc"> Redux technology</div>
                </div>
              </div>
            </div>
          </Zoom>


          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${css})` }}
                  ></div>
                  <div className="vn_title">CSS</div>
                  <div className="vn_desc"> CSS3 technology</div>
                </div>
              </div>
            </div>
          </Zoom>




        </div>
      </div>
    </div>
  );
};

export default Info;
