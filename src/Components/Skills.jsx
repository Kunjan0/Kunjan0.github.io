import {
  Flex,
} from "@chakra-ui/react";
import React from "react";
import html from "../Components/Images/Html.png";
import css from "../Components/Images/Css.png";
import react from "../Components/Images/react.png";
import redux from "../Components/Images/redux-seeklogo.com.svg";
import mongo from "../Components/Images/mongodb-seeklogo.com.svg";
import node from "../Components/Images/nodejs.png";
import js from "../Components/Images/js.png";
import git from "../Components/Images/git.png";
import github from "../Components/Images/github.png";
import chakra from "../Components/Images/chakra.png";
import express from "../Components/Images/express.png";
import vs from "../Components/Images/vscode.png";
import typescript from "../Components/Images/typescript.png";
import npm from "../Components/Images/npm.876.svg";
import dsa from "../Components/Images/Dsa.png";
import cypress from "../Components/Images/cypress1.webp";
import next from "./Images/nextjs.png"
import tailwind from "./Images/tailwind.png"
import Aos from "aos";
import "../Style/skill.css";

import { useEffect } from "react";

const Skills = () => {
  const [tech, setTech] = React.useState("all");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const skillsarr = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "Java Script" },
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: mongo, name: "Mongo Db" },
    { img: node, name: "Node JS" },
    { img: express, name: "Express JS" },
    { img: typescript, name: "Type Script" },
    { img: npm, name: "Npm" },
    { img: dsa, name: "DSA" },
    { img: cypress, name: "Cypress" },
    { img: next, name: "next" },
  ];
  const frontend = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "Java Script" },
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: typescript, name: "Type Script" },
    { img: npm, name: "Npm" },
    { img: dsa, name: "DSA" },
    { img: cypress, name: "Cypress" },
    { img: next, name: "next" },
  ];
  const backend = [
    { img: mongo, name: "Mongo Db" },
    { img: node, name: "Node JS" },
    { img: npm, name: "Npm" },
    { img: express, name: "Express JS" },
    { img: dsa, name: "DSA" },
    { img: next, name: "next" },
  ];
  const toolsarr = [
    { img: vs, name: "VS Code" },
    { img: github, name: "Github" },
    { img: chakra, name: "Chakra UI" },
    { img: git, name: "Git" },
    { img: tailwind, name: "Tailwind css" },
  ];

  return (
    <section id="skills">
      <Flex
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        <h1 style={{ color: "var(--color-font)" }}>Technical Skills </h1>
      </Flex>
      <Flex
        id="skillsButton"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
        data-aos-offset="100"
        m="auto"
        w={400}
        mb={"60px"}
        justifycontent={"space-evenly"}
      >
        <button
        style={{marginRight:"9%"}}
          className={tech === "all" ? "active" : null}
          onClick={() => setTech("all")}
        >
          ALL
        </button>
        <button
         style={{marginRight:"9%"}}
          className={tech === "frontend" ? "active" : null}
          onClick={() => setTech("frontend")}
        >
          FRONTEND{" "}
        </button>
        <button
         style={{marginRight:"9%"}}
          className={tech === "backend" ? "active" : null}
          onClick={() => setTech("backend")}
        >
          BACKEND
        </button>
      </Flex>
      {tech === "all" ? <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        data-aos-offset="100"
        id="skillsdiv"
      >
  
        {tech === "all"
          ? skillsarr.map((el) => (
            <div className="skills-card" key={el.id}>
              {" "}
              <img className="skills-card-img" alt="" src={el.img} />
              <h3 className="skills-card-name">{el.name}</h3>
            </div>
          ))
          : null}
        {tech === "frontend"
          ? frontend.map((el) => (
            <div className="skills-card" key={el.id}>
              <img className="skills-card-img" alt="" src={el.img} />
              <h3 className="skills-card-name">{el.name}</h3>
            </div>
          ))
          : null}
        {tech === "backend"
          ? backend.map((el) => (
            <div className="skills-card" key={el.id}>
              {" "}
              <img className="skills-card-img" alt="" src={el.img} />
              <h3 className="skills-card-name">{el.name}</h3>
            </div>
          ))
          : null}
      </div> : null}
      {tech === "backend" ? <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        data-aos-offset="100"
        id="skillsdiv"
      >
        {tech === "all"
          ? skillsarr.map((el) => (
            <div key={el.id}>
              {" "}
              <img alt="" src={el.img} />
              <h3>{el.name}</h3>
            </div>
          ))
          : null}
        {tech === "frontend"
          ? frontend.map((el) => (
            <div key={el.id}>
              <img alt="" src={el.img} />
              <h3>{el.name}</h3>
            </div>
          ))
          : null}
        {tech === "backend"
          ? backend.map((el) => (
            <div key={el.id}>
              {" "}
              <img alt="" src={el.img} />
              <h3>{el.name}</h3>
            </div>
          ))
          : null}
      </div> : null}
      {tech === "frontend" ? <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        data-aos-offset="100"
        id="skillsdiv"
      >
        {tech === "all"
          ? skillsarr.map((el) => (
            <div key={el.id}>
              {" "}
              <img alt="" src={el.img} />
              <h3>{el.name}</h3>
            </div>
          ))
          : null}
        {tech === "frontend"
          ? frontend.map((el) => (
            <div key={el.id}>
              <img alt="" src={el.img} />
              <h3>{el.name}</h3>
            </div>
          ))
          : null}
        {tech === "backend"
          ? backend.map((el) => (
            <div key={el.id}>
              {" "}
              <img alt="" src={el.img} />
              <h3>{el.name}</h3>
            </div>
          ))
          : null}
      </div> : null}
      
      <Flex
        id="tools"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"
        margin={"auto"}
        justifycontent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)", marginLeft: "23%" }}>Tools </h1>
      </Flex>
      <div id="skillsdiv">
        {toolsarr.map((el) => (
          <div
            key={el.id}
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            data-aos-offset="100"
          >
            {" "}
            <img alt="" src={el.img} />
            <h3>{el.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
