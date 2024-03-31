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
        <Col lg={3}>
          <h4 className="mb-xs-2">
            <span className="border-bottom border-primary">Education</span>
          </h4>
        </Col>
        <Col lg={9}>
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
        <Col lg={3}>
          <h4 className="mb-xs-2">
            <span className="border-bottom border-primary">
              Work Experience
            </span>
          </h4>
        </Col>
        <Col lg={9}>
          <h4>Ernst & Young</h4>
          <p className="text-muted">
            <em>Associate Manager</em> • September 2021 - Present
          </p>
          <p>
            Collaborating with a team of UI developers to craft products
            tailored to diverse audit tasks across different companies,
            utilizing cutting-edge front-end technologies. Additionally,
            seamlessly integrating GEN AI into select projects to infuse
            intelligence and enhance the sophistication of our offerings.ˀ
          </p>
          <p>
            Guiding a compact team of developers in direct collaboration with
            the client teams, adeptly collecting client requirements and
            designs. Subsequently, conducting thorough analysis, including proof
            of concepts (POCs), to develop solutions aligned with client needs.
          </p>
          <h4>Conduent, Inc</h4>
          <p className="text-muted">
            <em>Lead UI Developer</em> • June 2017 - September 2021
          </p>
          <p>
            Collaborated with the core implementation team to pioneer the next
            generation of existing products, leveraging advanced technologies
            such as React and Redux to elevate performance and efficiency.
            Engineered the frontend using AngularJS and React frameworks,
            seamlessly integrating with REST APIs for streamlined data retrieval
            and posting across web applications.
          </p>
          <h4>Landis + Gyr LTD.</h4>
          <p className="text-muted">
            <em>Senior Engineer - Software Development</em> • Nov 2016 - June
            2017
          </p>
          <p>
            During my tenure, I served as a sole contributor within my team,
            focusing on UI tasks for smart meter application solutions. I
            spearheaded the architecture of two mini portals, seamlessly
            integrating third-party elements into the smart meter application
            web portal.
          </p>
          <h4>hCentive, Inc.</h4>
          <p className="text-muted">
            <em>UI Developer</em> • Aug 2014 - Nov 2016
          </p>
          <p>
            As a member of the core UI team, collaborated on US healthcare
            portals to ensure exceptional customer experiences, while mastering
            web accessibility and 508 compliance for US government portals
          </p>
          <h4>Cognizant Technology Solutions and ACS A Xerox Company</h4>
          <p className="text-muted">
            <em>Software Developer</em> • Oct 2011 - Aug 2014
          </p>
          <p>
            Initiated my professional journey as a member of the UI development
            team, dedicated to delivering web solutions within the US
            Healthcare/Savings and Retirement sectors.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Resume;
