import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Aos from "aos";

import "../Style/contact.css";
function ContactForm() {
  const [state, handleSubmit] = useForm("mrgvkpgz");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  if (state.succeeded) {
    return (
      <>
        {" "}
        <div
          id="formsub"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          style={{ textAlign: "center" }}
        >
          <img
            width={300}
            src="https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-3d-green-check-mark-icon-png-image_6552255.png"
            alt=""
          />
          <h1>
            Your mail has been sent Succesfully !
          </h1>
        </div>
      </>
    );
  }

  return (
    <section id="contact">
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifycontent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Contact Me </h1>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"
        id="contactform"
      >
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          id="contactlinkdiv"
        >
          <div id="contact-email">
            <div>
              {" "}
              <div style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h4>kballawar0@gmail.com</h4>
            </div>
            <div>
              <a target={"blank"} href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRvwmKLSzKjzvWDwfTkmRPHtxfLmHRVkHcdqlgJhXcqNLtkbPjSfPZnFNCkNqRzpbsKpGPL"><button id="btnform">

                Email Now !
              </button></a>

            </div>
          </div>

          <div className="whatsapp">
            <div id="contact-phone">
              {" "}
              <div style={{ fontSize: "1.5rem", marginRight: "10px" }}>

                <i className="fa-solid fa-phone"></i>
              </div>
              <h4> Phone : +91 7972043068</h4>
            </div>
            <div>
              <a target={"blank"} href="tel:917972043068">
                {" "}
                <button id="btnform">Call Now !</button>
              </a>
            </div>
          </div>
          <div className="call">
            <div >
              <div style={{ fontSize: "2rem", marginRight: "20px" }} > <i className="fa-brands fa-whatsapp"></i></div>
              <h4> Whatsapp</h4>
            </div>
            <div>
              <a target={"blank"} href="https://wa.me/917972043068">
                <button id="btnform">Whatsapp Now !</button>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifycontent: "space-evenly" }} id="socialgit">
            <a id="contact-github" target="blank" href="https://github.com/Kunjan0">
              {" "}
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              id="contact-linkedin"
              target="blank"
              href="https://www.linkedin.com/in/kunjan-ballawar-6542b0244/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
        >
          <form onSubmit={handleSubmit}>
            <h4>Your Name </h4>
            <input id="name" placeholder="Insert Your Name" name="Name" />
            <h4>Email Address</h4>
            <input
              id="email"
              placeholder="Insert Your Email"
              type="email"
              name="Email"
            />

            <h4>Mobile Number</h4>
            <input id="mobile" placeholder="+91" type="number" name="Mobile" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <h4>Message</h4>
            <input
              placeholder=" Insert Your Message"
              style={{ paddingTop: "10px", paddingBottom: "90px" }}
              id="message"
              type="text"
              name="Message"
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div id="formbu">
              <button
                style={{ width: "55%", marginBottom: "20px" }}
                id="btnform"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
