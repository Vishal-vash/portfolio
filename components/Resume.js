import { Row, Col } from "react-bootstrap";
import classes from "../styles/Resume.module.css";

const Resume = ({ forwardedRef }) => {
  return (
    <section
      ref={forwardedRef}
      id="resume_section"
      className={`${classes["resume-section-wrapper"]} p-sm-5 p-xs-2`}
    >
      <Row className="pl-sm-5 pr-sm-5 m-0 mb-5 pb-5 border-bottom">
        <Col sm={3}>
          <h4>
            <span className="border-bottom border-primary">Education</span>
          </h4>
        </Col>
        <Col sm={9}>
          <h4>Chitkara University</h4>
          <p className="text-muted">
            <em>Masters of Computer Applications</em> • July 2011
          </p>
          <p>
            Graduated with 7.13 CGPA. During my graduation learnt various
            languages and found front end technologies more interesting among
            all others. Also worked on college project to manage student records
            like class attendance, educational information and personal
            inforamtion.
          </p>

          <h4>Panjab University</h4>
          <p className="text-muted">
            <em>Bachelor of Science</em> • June 2008
          </p>
          <p>
            Graduated with 67% marks. Being a Science and Maths student learnt
            the algorithms and developed strong problem solving skills. During
            this time started learning C language and developed an interest
            towards Computer engineering.
          </p>
        </Col>
      </Row>
      <Row className="pl-sm-5 pr-sm-5 m-0 mb-5 ">
        <Col sm={3}>
          <h4>
            <span className="border-bottom border-primary">
              Work Experience
            </span>
          </h4>
        </Col>
        <Col sm={9}>
          <h4>Conduent, Inc</h4>
          <p className="text-muted">
            <em>Lead UI Developer</em> • June 2017 - Present
          </p>
          <p>
            Working with core implementation team to create the next generation
            versions of currently available products using more advanced
            technologies like React and Redux that enhances the product
            performance and efficiency. Creating the front end using AngularJS
            and React frameworks that integrates directly with Rest Api to fetch
            and post data over web applications.
          </p>
          <p>
            Leading a small team of developers that works directly with Business
            analyst team to gather client requirements/designs and develop the
            same after deep analysis with POCs.
          </p>
          <h4>Landis + Gyr LTD.</h4>
          <p className="text-muted">
            <em>Senior Engineer - Software Development</em> • Nov 2016 - June
            2017
          </p>
          <p>
            Worked here as an individual contributor in my team for UI related
            work on smart meter application solutions. Architect two mini
            portals with thirdparty integration to smart meter application web
            portal.
          </p>
          <p>
            Worked directly with client teams to understand the requirements and
            delivered the same before time with quality code.
          </p>
          <h4>hCentive, Inc.</h4>
          <p className="text-muted">
            <em>UI Developer</em> • Aug 2014 - Nov 2016
          </p>
          <p>
            As a team member of core UI team worked on US healthcare portals to
            provide service to our customers with good customer experience.
            Learnt and Worked on web accessibility for US government portals
            with 508 compliance. Created next level user interactive web
            applications for demo to bid new customers in the market.
          </p>
          <h4>Cognizant Technology Solutions and ACS A Xerox Company</h4>
          <p className="text-muted">
            <em>Software Developer</em> • Oct 2011 - Aug 2014 2017
          </p>
          <p>
            Started my career as a part of UI development team to work on
            providing web solutions to US Healthcare/Savings and Retirement
            domains. Worked to create web pages from PSDs and make them
            responsive as per page layout. Individually handled Verizon client
            to create web pages from scratch for all domains with successful
            Annual Enrollment period.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Resume;
