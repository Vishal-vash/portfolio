import {Link} from "react-scroll";
import dynamic from "next/dynamic";

import classes from "../styles/Home.module.css";

const ParticlesBg = dynamic(
  () => {
    return import("particles-bg");
  },
  { ssr: false }
);

const Home = ({ forwardedRef }) => {
  return (
    <section
      ref={forwardedRef}
      id="home_section"
      className="justify-content-center align-items-center d-flex"
    >
      <ParticlesBg type="circle" bg={true} />
      <div className="text-center h-90">
        <h1>Vishal Vasishat</h1>
        <h3>
          I am a web developer and I prefer to use React to develop webpages.
        </h3>
        <button type="button" className="btn btn-lg btn-primary rounded-0">
          <i className="bi bi-github mr-2"></i>Github
        </button>
        <Link
          to="about_section"
          spy={true}
          smooth={true}
          duration={1500}
          delay={1500}
          className={`${classes['down-arrow-link']} border rounded-circle`}
        >
          <i className="bi bi-chevron-double-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Home;
