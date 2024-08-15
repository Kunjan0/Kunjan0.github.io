import React from "react";
import GitHubCalendar from "react-github-calendar";
import ProjectCard from "./ProjectCard";
import "../Style/projects.css";
import html from "../Components/Images/Html.png";
import css from "../Components/Images/Css.png";
import react from "../Components/Images/react.png";
import js from "../Components/Images/js.png";
import chakra from "../Components/Images/chakra.png";
import express from "../Components/Images/express.png"
import node from "../Components/Images/nodejs.png";
import mongo from "../Components/Images/mongodb-seeklogo.com.svg";

const Projects = () => {

  let Little_Lion = [
    {
      imgarr: [
        {
          img: "https://camo.githubusercontent.com/b8de904cfbf52a4b246f34e0f95a3485d980ce0bc84a216a4b536ae0af0e3c3e/68747470733a2f2f692e696d6775722e636f6d2f5945586e58674d2e706e67",
        },
        {
          img: "https://camo.githubusercontent.com/aee659ce889222cea83e183dd27af016ea3f6d54244604ccd892c91bfceb8ac3/68747470733a2f2f692e696d6775722e636f6d2f735461467656712e706e67",
        },
        {
          img: "https://camo.githubusercontent.com/ad3ba93b959ef3685d8dab15283ffd81d637b3baffe251cae4ba132bf2937b6c/68747470733a2f2f692e696d6775722e636f6d2f337051566959792e706e67",
        },
        {
          img: "https://camo.githubusercontent.com/6f18fd013ba4b9d690785485f18ae69a384e27368ec7e24ef30414a6ac74351a/68747470733a2f2f692e696d6775722e636f6d2f5a6a35533837712e706e67",
        },
        {
          img: "https://camo.githubusercontent.com/b71c2305ed57adb94467a3ebaf4bd4193593f05065e574faf46df0694fff9227/68747470733a2f2f692e696d6775722e636f6d2f38726d72584c372e706e67",
        },
        {
          img: "https://camo.githubusercontent.com/f5bb939313bdac6f14bdfe7ded86034e6ec87a8a0356b887077705142f69cee9/68747470733a2f2f692e696d6775722e636f6d2f6c57614b4d494f2e706e67",
        },
        {
          img: "https://camo.githubusercontent.com/7e80a1132f9afab3531b9d3960618f8736c0970d35a680d2c1c37ffbe6b30e32/68747470733a2f2f692e696d6775722e636f6d2f38453746706e722e706e67",
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
        { src: node, name: "node" },
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
      Smart Shop is the perfect online marketplace to buy and sell locally! No need to visit the local market to find the best deals on pre-owned items! Here you’ll find a wide selection of like new products.`,
      title: "Smart Shop",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
        { src: react, name: "React" },
        { src: node, name: "node" },
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
      AXOX is a British online fashion and cosmetic retailer. The company was founded in 2000 in London, primarily aimed at young adults.`,
      title: "AXOX",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
        { src: react, name: "React" },
        { src: mongo, name: "mongodb" },
        { src: express, name: "express" },
        { src: node, name: "node" },
        { src: chakra, name: "Chakra" },
      ],
      live: `https://animated-fudge-83fd4f.netlify.app/`,
      github: `https://github.com/Kunjan0/civil-kettle-7397`,
      dplink: "",
    },
  ];

  let health_cube = [
    {
      imgarr: [
        {
          img: "https://github.com/Shanky43/subdued-stocking-2928/raw/main/frontend/src/Assests/HomePage%20Image.png?raw=true",
        },
        {
          img: "https://github.com/Shanky43/subdued-stocking-2928/raw/main/frontend/src/Assests/allproductpage1.png?raw=true",
        },
        {
          img: "https://github.com/Shanky43/subdued-stocking-2928/raw/main/frontend/src/Assests/SignUpPage.png?raw=true",
        },
        {
          img: "https://github.com/Shanky43/subdued-stocking-2928/raw/main/frontend/src/Assests/SignInPage.png?raw=true",
        },
        {
          img: "https://user-images.githubusercontent.com/91946820/174493141-4bd45232-ecf2-4e7f-b91a-703b67bff5a9.png",
        },
        {
          img: "https://github.com/Shanky43/subdued-stocking-2928/raw/main/frontend/src/Assests/ProductsPage.png?raw=true",
        },
        {
          img: "https://github.com/Shanky43/subdued-stocking-2928/raw/main/frontend/src/Assests/cartpage.png?raw=true",
        },
        {
          img: "https://github.com/Shanky43/subdued-stocking-2928/raw/main/frontend/src/Assests/checkout%20page.png?raw=true",
        },
        {
          img: "https://github.com/Shanky43/subdued-stocking-2928/raw/main/frontend/src/Assests/OrderPage.png?raw=true",
        },
        {
          img: "https://user-images.githubusercontent.com/91946820/174493499-5077e966-2309-4c4c-84fa-5e3e88d0497b.png",
        }

      ],
      des: `
      Health Cube is a healthcare platform, it provides a range of services, including online doctor consultation, lab tests, health packages, and health content.`,
      title: "Health Cube",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
        { src: react, name: "React" },
        { src: mongo, name: "mongodb" },
        { src: express, name: "express" },
        { src: node, name: "node" },
        { src: chakra, name: "Chakra" },
      ],
      live: `https://healthcube-bisht1418.vercel.app/`,
      github: `https://github.com/Shanky43/subdued-stocking-2928`,
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
          <ProjectCard arr={health_cube} />
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

      <div>
        <img style={{ height: "195px", marginLeft: "5%" }}
          id="github-top-langs"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="most used languages"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kunjan0&layout=compact"
        />

        <img style={{ marginLeft: "5%" }}
          id="github-streak-stats"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="status github, commits, etc..."
          src="https://github-readme-streak-stats.herokuapp.com?user=Kunjan0"
        />

        <img style={{ marginLeft: "5%" }}
          id="github-stats-card"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="Kunjan's Github Stats"
          src="https://github-readme-stats.vercel.app/api?username=Kunjan0"
        />
      </div>

    </section>
  );
};

export default Projects;
