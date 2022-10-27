import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CourseDetails = () => {
  const course = useLoaderData();

  const { courseName, courseImage, description, id } = course;

  return (
    <Row xs={1} md={2} className="card-row d-flex justify-content-center my-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={courseImage} />
          <Card.Body>
            <Card.Title>{courseName}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      <button>Get premium access</button>
      </Col>
    </Row>
  );
};

export default CourseDetails;
