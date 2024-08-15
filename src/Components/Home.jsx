import React, { useEffect, useState } from "react";
import "../Style/home.css";
// import pdf from "./Images/"
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import { Tooltip } from "@chakra-ui/react";
import resume from "../Components/Resume/Kunjan_Ballawar_Resume.pdf"
export const resumeLink = "https://drive.google.com/file/d/1q_4UXGLHsuLG6qWz5uPVoXeAwqObEODU/view?usp=sharing";


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const [width, setWidth] = useState(1200);

  const handleResume = () => {
    window.open(resumeLink)
  }

  return (
    <section id="home">
      <div

        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"
        id="profile"

      >

        <img style={{ borderRadius: "40px" }} className="home-img" src="https://i.postimg.cc/6pPfsyTX/IMG-20211122-204956.jpg" alt="" />
      </div>
      <div
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        id="sonu"
      >
        <h1
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          {" "}
          Hello
          <img
            width={40}
            src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif"
            alt=""
          />{" "}
          My Name Is{" "}
        </h1>
        <h1
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
          id="user-detail-name"
        >
          Kunjan Ballawar
        </h1>
        <h1
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
          id="type"
        ><br />
          <Typewriter
            deleteSpeed={90}
            typeSpeed={100}
            delaySpeed={2500}
            words={[
              "Full Stack Web Developer",
              "Problem Solver",
              "Life Long Learner",
            ]}
            loop
            cursor
            cursorBlinking
            cursorStyle="..."
          />
        </h1>

          <button id="resume-button-2" onClick={handleResume}        >
            <a
              id="resume-link-2"
              href={resume}
              download="Kunjan_ballawar_resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </button>


        {/* </button> */}


        <div id="homesocial">
          <Tooltip
            label="Github"
            placement="bottom"
            borderRadius={"8px 10px "}
            padding={"10px"}
            color={"white"}
            bg="gray"
            fontSize="18px"
          >
            <a target="blank" href="https://github.com/Kunjan0">
              {" "}
              <i className="fa-brands fa-github"></i>
            </a>
          </Tooltip>

          <Tooltip
            label="Linkedin"
            placement="bottom"
            borderRadius={"8px 10px "}
            padding={"10px"}
            color={"white"}
            bg="gray"
            fontSize="18px"
          >
            <a
              target="blank"
              href="https://www.linkedin.com/in/kunjan-ballawar-6542b0244/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};
export default Home;
