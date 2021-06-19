import {Link} from "react-scroll";
import classes from "../../styles/Footer.module.css";

const Footer = ({ forwardedRef }) => {
  return (
    <footer
      ref={forwardedRef}
      className={`${classes.footer} `}
    >
      <Link
          to="home_section"
          spy={true}
          smooth={true}
          duration={1500}
          delay={1500}
          className={`${classes['up-arrow-link']} border rounded-circle`}
        >
          <i className="bi bi-chevron-double-up"></i>
      </Link>
      <div className="justify-content-center d-flex pt-5 pb-2">
        <h4><a><span className="mr-4"><i className="bi bi-facebook"></i></span></a></h4>
        <h4><a><span className="mr-4"><i className="bi bi-linkedin"></i></span></a></h4>
        <h4><a><span className="mr-4"><i className="bi bi-github"></i></span></a></h4>
        <h4><a><span className="mr-4"><i className="bi bi-twitter"></i></span></a></h4>
        <h4><a><span className="mr-4"><i className="bi bi-instagram"></i></span></a></h4>
      </div>
      <div className="text-center text-muted pb-5">
        &copy; Copyright {new Date().getFullYear()} Vishal Vasishat
      </div>
    </footer>
  );
};

export default Footer;
