import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
    const { logIn, logInWithGoogle, githubLogin} = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    // login with google
    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    // login with github
    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error);
        })
    }


  return (
    <div className="bg-dark text-white w-50 mx-auto my-4 px-2 py-2 px-lg-4 py-lg-4 rounded">
      <div>
        <h2 className="text-center">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
        <div className="my-4">
          <button onClick={handleGoogleLogin} className="mx-4 border-0 px-2 py-2 mt-3 bg-primary text-white rounded">
            Login With Google
          </button>
          <button onClick={handleGithubLogin} className="mx-4 border-0 px-2 py-2 mt-3 bg-primary text-white rounded">
            Login With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
