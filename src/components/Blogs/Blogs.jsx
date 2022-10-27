import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container className="mt-3 px-2">
      <h2 className="text-center border-bottom border-primary">All Blogs</h2>

      <section>
        <div className="mb-5">
          <h2>1. What is cors?</h2>
          <i className="text-danger">Ans:</i>
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
          <p>
            The Cross-Origin Resource Sharing standard works by adding new HTTP
            headers that let servers describe which origins are permitted to
            read that information from a web browser.
          </p>
        </div>
        <div className="mb-5">
          <h2>
            2. Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <i className="text-danger">Ans:</i>
          <h4>Purpose Of Using Firebase</h4>
          <p>
            Firebase helps you develop high-quality apps, grow your user base,
            and earn more money. Each feature works independently, and they work
            even better together.
          </p>
          <h4>Any Other options?</h4>
          <p>
            Yes, we have lots of option to implement authentication instead of
            firebase. Auth0, MongoDB, Passport, Okta, and Firebase are the most
            popular alternatives and competitors to Firebase Authentication.
          </p>
        </div>
        <div className="mb-5">
          <h2>3. How does the private route work?</h2>
          <i className="text-danger">Ans:</i>
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </div>
        <div className="mb-5">
          <h2>4. What is Node? How does Node work?</h2>
          <i className="text-danger">Ans:</i>
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Blogs;
