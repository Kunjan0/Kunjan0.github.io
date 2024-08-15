import "../Style/topNavbar.css";
import React, { useState } from "react";
import NavDrawer from "./NavDrawer";
import resume from "../Components/Resume/Kunjan_Ballawar_Resume.pdf"
export const resumeLink = "https://drive.google.com/file/d/1q_4UXGLHsuLG6qWz5uPVoXeAwqObEODU/view?usp=sharing";

const TopNavbar = () => {
  const [current, setCurrent] = useState("#home");

  const handleResume = () => {
    window.open(resumeLink)
  }

  return (
    <div id="nav-menu">
      <div style={{ height: "10vh"}} id="topnav">
        <a href="https://kunjan0.github.io/">
          <div style={{ marginLeft: "40px", align: "center", padding: "4px" }}>
            <img width={"70px"} src={"https://i.postimg.cc/4NDkkttr/logo.jpg"} alt="logo" />
          </div>
        </a>
        <div id="navel">
          <div
            onClick={() => [
              setCurrent("#home"),
              (window.location.href = "#home"),
            ]}
          >
            {" "}
            <a href="#home">
              <h4 className={current === "#home" ? "nav-link home" : null}>
                Home
              </h4>
            </a>{" "}
          </div>
          <div
            onClick={() => [
              setCurrent("#about"),
              (window.location.href = "#about"),
            ]}
          >
            <a href="#about">
              <h4 className={current === "#about" ? "nav-link about" : null}>
                About
              </h4>
            </a>{" "}
          </div>
          <div
            onClick={() => [
              setCurrent("#skills"),
              (window.location.href = "#skills"),
            ]}
          >
            <a href="#skills">
              <h4 className={current === "#skills" ? "nav-link skills" : null}>
                Skills
              </h4>
            </a>{" "}
          </div>
          <div
            onClick={() => [
              setCurrent("#projects"),
              (window.location.href = "#projects"),
            ]}
          >
            <a href="#projects">
              <h4 className={current === "#projects" ? "nav-link projects" : null}>
                Projects
              </h4>
            </a>{" "}
          </div>
          <div
            onClick={() => [
              setCurrent("#contact"),
              (window.location.href = "#contact"),
            ]}
          >
            <a href="#contact">
              <h4 className={current === "#contact" ? "nav-link contact" : null}>
                Contact
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#resume")}>

            <button id="resume-button-1" onClick={handleResume}        >
              <a
                id="resume-link-1"
                href={resume}
                download="Kunjan_ballawar_resume"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </button>

          </div>
        </div>
        <div id="sidebar">
          <NavDrawer />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
