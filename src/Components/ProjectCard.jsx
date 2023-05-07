import React, { useEffect } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import "../Style/card.css";
import Aos from "aos";
const ProjectCard = ({ arr }) => {
  let defaultControlsConfig = {
    nextButtonText: "nextf",
    prevButtonText: "d",
    pagingDotsContainerClassName: "con",
    nextButtonClassName: "next",
    prevButtonClassName: "next",
    pagingDotsClassName: "con",
    speed: 20,
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      {arr.map((el) => (
        <div id="card" className="project-card" key={el.id}>
          <Carousel
            defaultControlsConfig={defaultControlsConfig}
            autoplay={true}
            id="carousel"
            slidesToShow={1}
            wrapAround={true}
          >
            {el.imgarr.map((el) => (
              <div id="webimg" key={el.id}>
                <img style={{ borderRadius: "1rem" }} src={el.img} alt="" />
              </div>
            ))}
          </Carousel>
          <div>
            <h1 id="title" className="project-title">
              {el.title}{" "}
              <span style={{ color: "var(--color-bg)", fontSize: "18px" }}>

              </span>{" "}
            </h1>
            <div id="des" className="project-description">
              <h3>{el.des}</h3>
            </div>
            <div id="techstack" className="project-tech-stack">
              <h2>
                <div id="tsres">
                  {el.techstack.map((el) => (
                    <div key={el.id}>
                      <img width={50} src={el.src} alt="" />
                      <p>{el.name}</p>
                    </div>
                  ))}
                </div>
              </h2>
            </div>

            <div id="deployed" className="project-deployed-link">
              <a target="blank" href={el.github}>
                <button className="project-github-link">
                  <i className="fa-brands fa-github"  ></i>
                </button>
              </a>
              <a target="blank" href={el.live}>
                <button>
                  {""}
                  <i className="fa-solid fa-eye"></i>
                  {"   "}
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
