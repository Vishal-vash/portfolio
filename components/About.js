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
        <Col sm={3}>
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
        <Col sm={9}>
          <h4>About Me</h4>
          <Row className="mb-3">
            <Col>
              <p>
                Use this bio section as your way of describing yourself and
                saying what you do, what technologies you like to use or feel
                most comfortable with, describing your personality, or whatever
                else you feel like throwing in.
              </p>
            </Col>
          </Row>
          <h4>Contact Details</h4>
          <Row>
            <Col sm={6}>
              <ContactAddress />
            </Col>
            <Col sm={6}>
              <div className="mb-4">
                <a
                  className="btn btn-secondary rounded-0 btn-lg"
                  href="assets/docs/Vishal_Vasishat_Resume.pdf"
                  download
                >
                  <i className="bi bi-download mr-2"></i>Download Resume
                </a>
              </div>

              <OffCanvas>
                <embed
                  src="assets/docs/Vishal_Vasishat_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  type="application/pdf"
                  width="100%"
                  height="600"
                />
              </OffCanvas>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default About;
