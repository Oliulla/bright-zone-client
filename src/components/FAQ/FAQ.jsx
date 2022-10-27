import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <div className="w-75 mx-auto my-5">
      <h2>Frequently Ask Questions</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className="my-2">
          <Accordion.Header>Why we should learn JavaScirpt?</Accordion.Header>
          <Accordion.Body>
            avaScript supports valuable skills such as object-oriented,
            functional, and imperative styles of programming. Beginner
            developers, in turn, can apply these skills to any new language they
            want to learn, like Python, Java, or C++.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="my-2">
          <Accordion.Header>
            Is React.js good for frontend developer?
          </Accordion.Header>
          <Accordion.Body>
            The answer is that it's undoubtedly a very high-quality tool for
            frontend development. Considering that super successful companies
            like Facebook and PayPal use React, that must mean that it's a truly
            useful library.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="my-2">
          <Accordion.Header>What kinds of benefits in SPA?</Accordion.Header>
          <Accordion.Body>
            king of the advantages of SPAs, sites with single page applications
            are more efficient in terms of processing, they can cost less than
            traditional MPA sites, and they demand less time from developers
            because they can use repetitive layouts and act as "content on
            demand" apps.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="my-2">
          <Accordion.Header>AI for Future?</Accordion.Header>
          <Accordion.Body>
            Undoubtedly, Artificial Intelligence (AI) is a revolutionary field
            of computer science, which is ready to become the main component of
            various emerging technologies like big data, robotics, and IoT. It
            will continue to act as a technological innovator in the coming
            years.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="my-2">
          <Accordion.Header>
            How can I perfectly learn Ethical Hacking?
          </Accordion.Header>
          <Accordion.Body>
            Welcome this comprehensive Ethical Hacking course! This course
            assumes you have NO prior knowledge and by the end of it you'll be
            able to hack systems like black-hat hackers and secure them like
            security experts! This course is highly practical but it won't
            neglect the theory; we'll start with ethical hacking basics,
            breakdown the different penetration testing fields and install the
            needed software (on Windows, Linux and Mac OS X), then we'll dive
            and start hacking straight away. You'll learn everything by example,
            by analysing and exploiting different systems such as networks,
            servers, clients, websites .....etc. We'll never have any boring dry
            theoretical lectures.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
