import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CourseDetails = () => {
  const course = useLoaderData();

  const { courseName, courseImage, description, id } = course;

  return (
    <Row xs={1} md={2} className="card-row d-flex justify-content-center my-4 px-3">
      <Col>
        <Card>
          <Card.Img variant="top" src={courseImage} />
          <Card.Body>
            <Card.Title>{courseName}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Link to='/checkout' className="btn btn-primary border-0">Get premium access</Link>
        </Card>
      </Col>
    </Row>
  );
};

export default CourseDetails;
