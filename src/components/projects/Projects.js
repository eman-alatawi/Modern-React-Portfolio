import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img from "../../images/programer-working.jpg";

export default function Projects() {
  return (
    <>
      <div className="projects-section" id="projects">
        <div className="projects-section-container">
          <div className="image-Box">
            <a href="https://www.freepik.com/free-photos-vectors/technology">
              <img src={img} width="95%" alt=""/>
            </a>
          </div>

          <div className="striped-Box">
            <div className="container-fluid">
              <div className="card-header-container p-3">
                <h1>Projects</h1>
              </div>
              <Carousel>
                <Carousel.Item interval={1000} className="carouselItem ">
                  <img
                    className=" w-100 "
                    src="https://images.unsplash.com/flagged/photo-1553028826-ccdfc006d078?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="First slide"
                  />
                  <Carousel.Caption className="card">
                    <h3>Project 1</h3>
                    <p>Brief discription</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} className="carouselItem">
                  <img
                    className=" w-100"
                    src="https://images.unsplash.com/photo-1617264862369-fec440d23265?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="Second slide"
                  />
                  <Carousel.Caption className="card">
                    <h3>Project 2</h3>
                    <p>Brief discription</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                  <img
                    className=" w-100"
                    src="https://images.unsplash.com/photo-1579389082947-e54d8e911928?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="Third slide"
                  />
                  <Carousel.Caption className="card">
                    <h3>Project 3</h3>
                    <p> Brief discription</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
