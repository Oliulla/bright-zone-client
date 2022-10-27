import React from "react";
import brandImg from "../../assets/img/brand-img.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.displayName, user?.photoURL)

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('user Logged out');
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <header className="header p-2 px-lg-5 py-lg-3">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Link to="/" className="text-decoration-none">
            <img
              alt=""
              src={brandImg}
              width="35"
              height="35"
              className="d-inline-block align-top"
            />
            <span className="text-white ms-2 me-5 fs-4">Bright Zone</span>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/courses" className="my-1 my-lg-0 text-white mx-3 text-decoration-none">Courses</Link>
              <Link to="/blogs" className="my-1 my-lg-0 text-white mx-3 text-decoration-none">Blogs</Link>
              <Link to="/faq" className="my-1 my-lg-0 text-white mx-3 text-decoration-none">FAQ</Link>
            </Nav>
            <Nav>
              {
                  user?.uid ?
                  <>
                    <img src={user?.photoURL} width="35" height="35" className="rounded-circle mx-3 my-1 my-lg-0" alt="userProfile" title={user?.displayName} />
                    <button onClick={handleLogOut} className="mx-3 my-2 my-lg-0 btn btn-outline-primary">Log Out</button>
                  </>
                  :
                  <>
                    <Link to='/login' className="text-decoration-none mx-3 text-white">Login</Link>
                    <Link to='/register' className="text-decoration-none mx-3 text-white">Register</Link>
                  </>
              }
                
                {/* user profile here */}
              {/* {
                user?.uid ?
                <img src={user?.photoURL} width="30" height="30" className="rounded-circle" alt="userProfile" title={user?.displayName} />
                :
                ""
              } */}
              {/* <button onClick={toggleTheme}>Dark</button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;