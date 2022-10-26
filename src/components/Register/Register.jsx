import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        console.log(form);

        const fullName = form.name?.value;
        const photoUrl = form.photoURL?.value;
        const email = form.email?.value;
        const password = form.password?.value;
        console.log(fullName, photoUrl, email, password)

        // create user with email and password
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }

  return (
    <div className="bg-dark text-white w-50 mx-auto my-5 px-2 py-2 px-lg-4 py-lg-4 rounded">
      <div>
        <h2 className="text-center">Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formRegisterName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Full name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
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
