import { Row, Col } from "react-bootstrap";

import classes from "../../styles/Contact.module.css";
import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";

const Contact = ({ forwardedRef }) => {
  return (
    <section
      ref={forwardedRef}
      id="contact_section"
      className={`${classes["contact-section-wrapper"]} p-sm-5 p-xs-2`}
    >
      <Row className="pl-sm-5 pr-sm-5 m-0 mb-5 pb-5">
        <Col sm={2}>
          <i className="bi bi-envelope display-1 lh-0"></i>
        </Col>
        <Col sm={10}>
          Here goes the message I want to write for the visitors of my
          portfolio.
        </Col>
      </Row>
      <Row className="pl-sm-5 pr-sm-5 m-0 mb-5 pb-5 g-2">
        <Col sm={8}>
          <ContactForm />
        </Col>
        <Col sm={4}>
          <h4>Address and Phone</h4>
          <div className="text-muted">
            <ContactAddress />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
