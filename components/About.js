import { Row, Col, Figure } from "react-bootstrap";

import classes from "../styles/About.module.css";
import ContactAddress from "./Contact/ContactAddress";
import OffCanvas from "./UI/OffCanvas/OffCanvas";

const About = ({ forwardedRef }) => {
  return (
    <section
      ref={forwardedRef}
      id="about_section"
      className={`${classes["about-section-wrapper"]} p-sm-5 p-xs-2`}
    >
      <Row className="pl-sm-5 pr-sm-5 m-0">
        <Col lg={3}>
          <Figure>
            <Figure.Image
              width={180}
              height={180}
              alt="Vishal"
              src="assets/images/me.jpeg"
              className="rounded-circle"
            />
          </Figure>
        </Col>
        <Col lg={9}>
          <h4>About Me</h4>
          <Row className="mb-3">
            <Col>
              <p>
                I am a very passionate front end developer. I prefer to keep learning new technologies, continue challenging myself while doing things that matter. Being a fast learner I am able to pick up new skills to have expertise on different areas. I prefer to do my work with honesty and commitment.
              </p>
              <p>Apart from these I love to travel and explore different cultures. I prefer to spend time outdoors. I love to play table tennis and cricket.</p>
            </Col>
          </Row>
          <h4>Contact Details</h4>
          <Row>
            <Col lg={6}>
              <ContactAddress />
            </Col>
            <Col lg={6}>
              <div className="mb-4">
                <a
                  className="btn btn-secondary rounded-0 btn-lg col-sm-8 mt-xs-2"
                  href="assets/docs/Vishal_Vasishat_Resume.pdf"
                  download
                >
                  <i className="bi bi-download mr-2"></i>Download Resume
                </a>
              </div>
              <div className="d-none d-lg-block">
                <OffCanvas>
                  <embed
                    src="assets/docs/Vishal_Vasishat_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    type="application/pdf"
                    width="100%"
                    height="600"
                  />
                </OffCanvas>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default About;
