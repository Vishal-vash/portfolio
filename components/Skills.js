import { Row, Col, Card, ListGroup } from "react-bootstrap";

import AppProgressBar from "./UI/AppProgressBar";
import classes from "../styles/Skills.module.css";

const Skills = ({ forwardedRef }) => {
  const skills = [
    { id: "1", label: "ReactJS", variant: "success", now: 90 },
    { id: "2", label: "Angular", variant: "info", now: 60 },
    { id: "3", label: "Javascript", variant: "success", now: 80 },
    { id: "4", label: "Node JS", variant: "warning", now: 50 },
    { id: "5", label: "Mongo DB", variant: "warning", now: 50 },
    { id: "6", label: "Angular JS", variant: "success", now: 80 },
    { id: "7", label: "jQuery", variant: "success", now: 90 },
    {
      id: "8",
      label: "Bootstrap/React Bootstrap",
      variant: "success",
      now: 80,
    },
    { id: "9", label: "CSS/SASS/HTML", variant: "success", now: 95 },
  ];

  const other_tools = [
    {
      id: "8",
      label: "Version Control",
      list: [
        { name: "Git", iconname: "git.png" },
        { name: "SVN", iconname: "svn.png" },
        { name: "TFS-Git", iconname: "tfs-git.png" },
      ],
    },
    {
      id: "10",
      label: "IDE/Code Editor",
      list: [
        { name: "VS Code", iconname: "vscode.png" },
        { name: "WebStorm", iconname: "webStorm.png" },
        { name: "Atom", iconname: "atom.png" },
      ],
    },
    {
      id: "9",
      label: "Bug Tracking Tools",
      list: [
        { name: "TFS", iconname: "tfs.png" },
        { name: "JIRA", iconname: "jira.png" },
      ],
    },
  ];
  return (
    <section ref={forwardedRef} id="skills_section">
      <div className={`${classes["skills-section-wrapper"]} p-sm-5 p-xs-2`}>
        <Row className="pl-sm-5 pr-sm-5 m-0">
          <Col sm={3}>
            <h4>
              <span className="border-bottom border-primary">Skills</span>
            </h4>
          </Col>
          <Col sm={9}>
            {skills.map((skill) => (
              <AppProgressBar
                key={skill.id}
                label={skill.label}
                variant={skill.variant}
                now={skill.now}
              />
            ))}
          </Col>
        </Row>
      </div>
      <div className={`${classes["other-tools-wrapper"]} p-sm-5 p-xs-2`}>
        <Row>
          {other_tools.map((tool) => (
            <Col sm={4} key={tool.id}>
              <Card>
                <Card.Header className={classes["card-heading"]}>
                  {tool.label}
                </Card.Header>
                <ListGroup variant="flush">
                  {tool.list.map((item) => (
                    <ListGroup.Item key={item.name.split(" ").join("_")}>
                      <div className="d-flex">
                        <div>{item.name}</div>
                        <div className="ml-auto">
                          <img
                            width="30"
                            height="30"
                            className="img"
                            src={`assets/images/${item.iconname}`}
                            alt={item.name}
                          />
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Skills;
