import React from "react";
import "./work.css";
import Works from "./Works";


const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section-title">Projects</h2>
      <span className="section-subtitle">Most recent work</span>

      <Works />
    </section>
  );
};

export default Work;
