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
        <Link to="/">
            <img
              alt=""
              src={brandImg}
              width="35"
              height="35"
              className="d-inline-block align-top"
            />
            <span>Bright Zone</span>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/courses">Courses</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/faq">FAQ</Link>
            </Nav>
            <Nav>
              {
                  user?.uid ?
                  <button onClick={handleLogOut}>Log Out</button>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
              }
                
                {/* user profile here */}
              <img src="" alt="userProfile" title="Rock" />
              <button>Dark</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
