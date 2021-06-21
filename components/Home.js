import { Link } from "react-scroll";
import dynamic from "next/dynamic";

import classes from "../styles/Home.module.css";

const ParticlesBg = dynamic(
  () => {
    return import("particles-bg");
  },
  { ssr: false }
);

const Home = ({ forwardedRef, forwardedHomeTextRef }) => {
  return (
    <section
      ref={forwardedRef}
      id="home_section"
      className="justify-content-center align-items-center d-flex"
    >
      <ParticlesBg type="circle" bg={true} />
      <div className="text-center h-90" ref={forwardedHomeTextRef}>
        <h1>Vishal Vasishat</h1>
        <h5>
          I am a web developer and enjoy building rich interactive web apps
          using latest technologies. <br />I strive to make web a beautiful place with
          every line of code.
        </h5>
        <a href="https://www.linkedin.com/in/vishal-vasishat-a696124b/" target="_blank" className="btn btn-lg btn-primary rounded-0 mt-3">
          <i className="bi bi-linkedin mr-2"></i>Linkedin
        </a>
        <a href="https://github.com/Vishal-vash" target="_blank" type="button" className="btn btn-lg btn-primary rounded-0 mt-3">
          <i className="bi bi-github mr-2"></i>Github
        </a>
        <Link
          to="about_section"
          spy={true}
          smooth={true}
          duration={1000}
          delay={500}
          offset={-50}
          className={`${classes["down-arrow-link"]} border rounded-circle`}
        >
          <i className="bi bi-chevron-double-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Home;
