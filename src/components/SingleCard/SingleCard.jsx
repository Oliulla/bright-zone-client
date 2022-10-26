import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const SingleCard = ({ course }) => {
    const { courseImage, courseName, description, id } = course;

    console.log(course)

  return (
        <Row xs={1} md={2} className="card-row" style={{width: '50rem'}}>
      <Col>
        <Card>
          <Card.Img variant="top" src={courseImage} />
          <Card.Body>
            <Card.Title>{courseName}</Card.Title>
            <Card.Text>
              {
                description.length > 50 ? `${description.slice(0, 50)}...` : description
              }
            </Card.Text>
          </Card.Body>
          <Link to={`/course/${id}`}>Read more</Link>
        </Card>
      </Col>
    </Row>
  );
};

export default SingleCard;
