import React from "react";
import GitHubCalendar from "react-github-calendar";
import ProjectCard from "./ProjectCard";
import "../Style/projects.css";
import html from "../Components/Images/Html.png";
import css from "../Components/Images/Css.png";
import react from "../Components/Images/react.png";
import js from "../Components/Images/js.png";
import chakra from "../Components/Images/chakra.png";
import typescript from "../Components/Images/typescript.png";
import node from "../Components/Images/nodejs.png";
import express from "../Components/Images/express.png";
import mongo from "../Components/Images/mongodb-seeklogo.com.svg";

const Projects = () => {

  let Little_Lion = [
    {
      imgarr: [
        {
          img: "https://camo.githubusercontent.com/2887290b7a44b1c8c339587c7976961bc4dedd737149ef555f683fdcd7aaf189/68747470733a2f2f692e696d6775722e636f6d2f5945586e58674d2e706e67",
        },
        {
          img: "https://camo.githubusercontent.com/43c1ca5bc9a81e559e2e5b4b50372d46a44861ad1b5fa912f99cc6f0dc62266b/68747470733a2f2f692e696d6775722e636f6d2f636750694e58462e706e67",
        },
        {
          img: "https://camo.githubusercontent.com/4369985c86945ae818b2faf76c32dba8b424433a1ad9408fc640a3171f708542/68747470733a2f2f692e696d6775722e636f6d2f337051566959792e706e67",
        },
        {
          img: "https://camo.githubusercontent.com/8755c802708e16295bd2b8527adaf3ee57453563d9779350c224d38f3b62aa05/68747470733a2f2f692e696d6775722e636f6d2f6c57614b4d494f2e706e67",
        },
      ],
      des: `Little Lion is a social
        media management platform for small to
        midsize businesses that helps users publish
        content, engage clients and analyze their
          social media performance.`,
      title: "Little Lion",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
        { src: react, name: "React" },
        { src: chakra, name: "Chakra" },
      ],
      live: `https://little-lion.netlify.app/`,
      github: `https://github.com/gouravluv2code/lean-school-408`,
      dplink: "",
    },
  ];
  let Smart_Shop = [
    {
      imgarr: [
        {
          img: "https://github.com/mak-1997/parsimonious-mouth-5256-/raw/main/public/homepage.png",
        },
        {
          img: "https://github.com/mak-1997/parsimonious-mouth-5256-/raw/main/public/register.png",
        },
        {
          img: "https://github.com/mak-1997/parsimonious-mouth-5256-/raw/main/public/products.png",
        },
        {
          img: "https://github.com/mak-1997/parsimonious-mouth-5256-/raw/main/public/singleProduct.png",
        },
      ],
      des: `
      Smart Shop is the perfect online marketplace to buy and sell locally! No need to visit the flea market to find the best deals on pre-owned items! Here you’ll find a wide selection of like new products.`,
      title: "Smart Shop",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
        { src: react, name: "React" },
        { src: chakra, name: "Chakra" },
      ],
      live: `https://smart-shop-alpha.vercel.app/`,
      github: `https://github.com/mak-1997/Smart-Shop`,
      dplink: "",
    },
  ];

  let AXOX = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/26YQktfC/home.png",
        },
        {
          img: "https://i.postimg.cc/N0m8wcSN/prod1.png",
        },
        {
          img: "https://i.postimg.cc/fTqfc5Yv/cart.png",
        },
        {
          img: "https://i.postimg.cc/RZj18Fs6/prod2.png",
        },
        {
          img: "https://i.postimg.cc/13gcJ6H1/signup.png",
        }
        
      ],
      des: `
      AXOX is a work management platform that helps business teams collaborate, plan projects, organize team member tasks and track project completion.`,
      title: "AXOX",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
        { src: react, name: "React" },
        { src: chakra, name: "Chakra" },
      ],
      live: `https://animated-fudge-83fd4f.netlify.app/`,
      github: `https://github.com/Kunjan0/civil-kettle-7397`,
      dplink: "",
    },
  ];
  let med_easy = [
    {
      imgarr: [
        {
          img: "https://camo.githubusercontent.com/eb265e75e13759533f7770feb5f8e33285cf9a0f6464bd4384e7f0ea86b81bbf/68747470733a2f2f692e706f7374696d672e63632f5071426e376d59472f686f6d652d706167652e706e67",
        },

        {
          img: "https://camo.githubusercontent.com/bca855bafe0fd1367fb36ad328b33c4b019620794c34bf2cfb13bf339a817685/68747470733a2f2f692e706f7374696d672e63632f6a645a30545650342f686f6d65322e706e67",
        },

        {
          img: "https://camo.githubusercontent.com/8f00d8e09536e2344f5e680611279cb5571f38183d3970e2967fb15ce808ec3f/68747470733a2f2f692e706f7374696d672e63632f5762324c787046342f737572676572792e706e67",
        },
        {
          img: "https://camo.githubusercontent.com/4419594c69a663c8774e25d8e25ee25c317c8f7bee36a1faf498cbec19e26b78/68747470733a2f2f692e706f7374696d672e63632f35796d636a5447312f72656769737465722e706e67",
        }
      ],
      des: `
      Med Easy is a clone of PharmEasy web Site. Its a website for buy medicines online`,
      title: "Med Easy",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
      ],
      live: `https://flourishing-fox-0351ce.netlify.app/`,
      github: `https://github.com/Bhaskar977/wild-request-6662`,
      dplink: "",
    },
  ];

  return (
    <section id="projects">
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifycontent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Projects </h1>
      </div>
      <div id="procard">

        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={AXOX} />
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={Little_Lion} />
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={Smart_Shop} />
        </div>

        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={med_easy} />
        </div>
      </div>


      <div
        id="gitname"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifycontent={"space-around"}
      >
        <h2 style={{ color: "var(--color-font)" }}>
          Github Contribution Calender{" "}
        </h2>
      </div>
      <div
        className="react-activity-calendar"
        id="calendar"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"

      >
        <GitHubCalendar
          className="react-activity-calendar"
          fontSize={14}
          color="#008001"
          blockRadius={1}
          blockMargin={6}
          blockSize={16}
          showWeekdayLabels
          username="Kunjan0"
        />
      </div>
      <div
        id="gitname"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifycontent={"space-around"}
      >
        <h2 style={{ color: "var(--color-font)" }}>Github Stats</h2>
      </div>
      <div id="gitstats">
        <img
          id="github-top-langs.aos-init"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="most used languages"
          src="https://camo.githubusercontent.com/675af4f724f256426cbbbd0b9ef3480e9cbf7f0a5e04ddda255ad8fa6db22436/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6b756e6a616e302673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
        />

        <img
          id="github-streak-stats.aos-init"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="status github, commits, etc..."
          src="https://camo.githubusercontent.com/500da173e8746576426a08f9df5ffdd97306ab0ecf33c612d6d98e42749fb793/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d6b756e6a616e3026"
        />

        <img
          id="github-stats-card.aos-init"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="Kunjan's Github Stats"
          src="https://camo.githubusercontent.com/26443279cee015d97dd7523e15c8bde950c449852918ad8dfdfe7d3018ade16a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6b756e6a616e302673686f775f69636f6e733d74727565266c6f63616c653d656e"
        />

      </div>
    </section>
  );
};

export default Projects;
