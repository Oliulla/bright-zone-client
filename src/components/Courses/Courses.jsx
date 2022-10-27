import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://bright-zone-server.vercel.app")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  console.log(courses);

  //   const courses = useLoaderData();
  console.log(courses);

  return (
    <Container>
      <Row className="my-2 my-lg-5">
        <Col sm={3} className="border bg-dark left-nav">
          {courses.map((course) => (
            <Link
              to={`/course/${course.id}`}
              key={course.id}
              className="d-lg-block my-4 my-lg-3 mx-3 mx-lg-0 text-primary text-decoration-none"
            >
              {course.courseName}
            </Link>
          ))}
        </Col>
        <Col sm={9} className="border">
          <Row xs={1} md={2}>
          {courses.map((course) => (
            <SingleCard key={course.id} course={course} />
          ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
