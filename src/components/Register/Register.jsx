import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <div className="bg-dark text-white w-50 mx-auto my-5 px-2 py-2 px-lg-4 py-lg-4 rounded">
      <div>
        <h2 className="text-center">Register</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formRegisterName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" placeholder="Photo URL" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
