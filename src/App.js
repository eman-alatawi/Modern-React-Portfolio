import React, { useEffect } from "react";
import $ from "jquery";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FloatBtn from "./components/FloatBtn";

function App() {
  useEffect(() => {
    $(document).ready(function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $("nav").css("background", "rgb(54, 5, 99)");
        } else {
          $("nav").css("background", "transparent");
        }
      });
      $("#btnScrollToUp").click(function () {
        window.scrollTo(0, 0);
      });
    });
  }, []);

  return (
    <>
      <Header />
      <FloatBtn />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
