import React from "react";
import Aos from "aos";
import "../Style/about.css";
const About = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section>
      <div
        id="about"
        className="about section"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        <h1 style={{ color: "var(--color-font)", paddingLeft: "10%", fontSize: "35px" }}>About Me</h1>
        <div id="aboutdiv">
          <div data-aos="flip-left"
            id="user-detail-intro"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-offset="100" >
            <ul type="square" >
              <li>
                Hello, I'm Kunjan Ballawar, i'm a passionate Developer, with strong administrative, good attention to detail and the ability to write efficient code using HTML, CSS, React.js, Redux, JavaScript, TypeScript.js, Next.js, Node.js, MangoDB, Express.js, npm, Chakra UI, Github, Azure DevOps, Power Bi, High Charts, DevExtreme.
              </li>
              <li>
                {" "}
                I have gained hands-on experience through various projects, where I honed my skills in front-end and back-end development. I have a strong understanding of HTML, CSS, JavaScript, and other CSS libraries, and responsive web design principles. I'm also familiar with version control systems like Git and have a basic understanding of REST ful APIs and database management.
              </li>
              <li>
                I am a quick learner, and I thrive in collaborative environments where I can contribute my ideas and learn from experienced professionals. I am eager to work with a dynamic team that values innovation and growth, where I can continue to develop my skills and make a meaningful impact.
              </li>
              <li>
                If you are seeking a motivated and dedicated MERN stack developer, Full stack developer, front end developer, back end developer, Power Bi developer with a passion for learning, let's connect! I am excited to contribute my skills and enthusiasm to create impactful web solutions.
              </li>
            </ul>

          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-offset="100" >
            <img
              src="https://img.freepik.com/premium-vector/man-working-home_28923-46.jpg?w=740"
              alt=""
            />
          </div>
        </div>
      </div>


    </section>
  );
};

export default About;
