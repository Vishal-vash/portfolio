import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import classes from "../../styles/Contact.module.css";

const ContactForm = () => {
  const [nameInputVal, setNameInputVal] = useState("");
  const [emailInputVal, setEmailInputVal] = useState("");
  const [subjectInputVal, setSubjectInputVal] = useState("");
  const [messageInputVal, setMessageInputVal] = useState("");

  const contactMeHandler = async (event) => {
    event.preventDefault();
    const contactData = {
      nameInputVal,
      emailInputVal,
      subjectInputVal,
      messageInputVal,
    };
    console.log(contactData);

    const responseData = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
      body: JSON.stringify(contactData),
    });

    const response = await responseData.json();
    if(response.status === 200) {
        console.log(response);
        setNameInputVal('');
        setEmailInputVal('');
        setSubjectInputVal('');
        setMessageInputVal('')
    }
  };

  return (
    <Form onSubmit={contactMeHandler}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          Name<span className="text-primary">*</span>
        </Form.Label>
        <Col sm="8">
          <Form.Control
            className={classes.input}
            type="text"
            size="lg rounded-0"
            onChange={(e) => setNameInputVal(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Email<span className="text-primary">*</span>
        </Form.Label>
        <Col sm="8">
          <Form.Control
            className={classes.input}
            type="email"
            size="lg rounded-0"
            onChange={(e) => setEmailInputVal(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Subject
        </Form.Label>
        <Col sm="8">
          <Form.Control
            className={classes.input}
            type="text"
            size="lg rounded-0"
            onChange={(e) => setSubjectInputVal(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Message<span className="text-primary">*</span>
        </Form.Label>
        <Col sm="8">
          <Form.Control
            className={classes.input}
            as="textarea"
            size="lg rounded-0"
            style={{ height: "250px", minheight: "100px" }}
            onChange={(e) => setMessageInputVal(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Row>
        <Col className="ml-2 mt-3">
          <Button
            className="offset-sm-3 rounded-0"
            variant="secondary"
            type="submit"
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
