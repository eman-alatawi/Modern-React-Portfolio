import React from "react";
import img from "../../images/creative-web-design-2.png";
import Skills from "./Skills";

export default function About() {
  return (
    <div className="container-fluid p-5 about-section">
      <h1 className="mb-4" id="About">
        About Me
      </h1>
      <p className="about-paragraph">
        Why do we use it? It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </p>

      <div className="about-section-container">
        <Skills />
        <img src={img} width="35%" />
      </div>
    </div>
  );
}
