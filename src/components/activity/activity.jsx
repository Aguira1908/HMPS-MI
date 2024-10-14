import React from "react";
import "./activity.css";
import PMB23 from "../../img/PMB23.png";
import MC1 from "../../img/MC1.png";
import INAUGRATION24 from "../../img/INAUGRATION24.png";
import PMB24 from "../../img/PMB24.png";

const Activity = () => {
  return (
    <>
      <section className="Section-Activity">
        <h1 className="header-title">Kegiatan Kami</h1>

        <div>
          <div className="image-grid">
            <div className="section pmb23-container">
              <img
                src={PMB23}
                alt="PMB23 Activity"
                className="activity-image"
              />
            </div>
            <div className="section">
              <div className="top-section">
                <div className="image-container mc1-container">
                  <img
                    src={MC1}
                    alt="MC1 Activity"
                    className="activity-image"
                  />
                </div>
                <div className="image-container inauguration-container">
                  <img
                    src={INAUGRATION24}
                    alt="INAUGRATION24 Activity"
                    className="activity-image"
                  />
                </div>
              </div>
              <div className="image-container pmb24-container">
                <img
                  src={PMB24}
                  alt="PMB24 Activity"
                  className="activity-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Activity;
