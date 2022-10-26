import { Link, Outlet, useLoaderData } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  console.log(courses);

  //   const courses = useLoaderData();
  console.log(courses);

  return (
    <Container>
      <Row>
        <Col sm={3} className="border">
          {courses.map((course) => (
            <Link
              to={`/course/${course.id}`}
              key={course.id}
              className="d-lg-block my-2 my-lg-3"
            >
              {course.courseName}
            </Link>
          ))}
        </Col>
        <Col sm={9} className="border">
          {courses.map((course) => (
            <SingleCard key={course.id} course={course} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
