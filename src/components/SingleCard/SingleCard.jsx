import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const SingleCard = ({ course }) => {
  const { courseImage, courseName, description, id } = course;

  // console.log(course);

  return (
      <Col className="mb-3">
        <Card>
          <Card.Img variant="top" src={courseImage} />
          <Card.Body>
            <Card.Title>{courseName}</Card.Title>
            <Card.Text>
              {description.length > 50
                ? `${description.slice(0, 45)}...`
                : description}
            </Card.Text>
          </Card.Body>
          <Link to={`/course/${id}`} className="mx-3">
            See Details
          </Link>
        </Card>
      </Col>

  );
};

export default SingleCard;
