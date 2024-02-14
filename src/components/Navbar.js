import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

const MyNavbar = () => {
    const [isNavbarLight] = useState(true);
    const [icon] = useState(faMoon);

    const iconStyle = {
      transition: 'color 0.5s ease-in-out, transform 1s ease-in-out',
    };

    const handleLinkHover = (e) => {
      e.target.style.opacity = '0.5';
    };
  
    const handleLinkLeave = (e) => {
      e.target.style.opacity = '1';
    };

    useEffect(() => {
      const links = document.querySelectorAll('.nav-link');
      links.forEach((link) => {
        link.style.opacity = '1';
      });
    }, []);

    return (
      <Navbar bg={isNavbarLight ? 'dark' : 'light'} expand="lg">
        <Navbar.Brand href="">
          <Image
            src="logo.png"
            style={{ width: '110px', height: 'auto', marginRight: '10px', paddingLeft: '10px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/home"
              className={isNavbarLight ? 'text-light' : 'text-dark'}
              style={{
                marginRight: '15px',
                fontSize: '18px',
                transition: 'opacity 0.5s ease-in-out',
              }}
              onMouseOver={handleLinkHover}
              onMouseOut={handleLinkLeave}
            >
              Ana Sayfa
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/aboutMe"
              className={isNavbarLight ? 'text-light' : 'text-dark'}
              style={{
                marginRight: '15px',
                fontSize: '18px',
                transition: 'opacity 0.5s ease-in-out',
              }}
              onMouseOver={handleLinkHover}
              onMouseOut={handleLinkLeave}
            >
              Hakkımızda
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/ourProjects"
              className={isNavbarLight ? 'text-light' : 'text-dark'}
              style={{
                marginRight: '15px',
                fontSize: '18px',
                transition: 'opacity 0.5s ease-in-out',
              }}
              onMouseOver={handleLinkHover}
              onMouseOut={handleLinkLeave}
            >
              Projelerimiz
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/ourTeam"
              className={isNavbarLight ? 'text-light' : 'text-dark'}
              style={{
                marginRight: '15px',
                fontSize: '18px',
                transition: 'opacity 0.5s ease-in-out',
              }}
              onMouseOver={handleLinkHover}
              onMouseOut={handleLinkLeave}
            >
              Ekibimiz
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className={isNavbarLight ? 'text-light' : 'text-dark'}
              style={{
                marginRight: '15px',
                fontSize: '18px',
                transition: 'opacity 0.5s ease-in-out',
              }}
              onMouseOver={handleLinkHover}
              onMouseOut={handleLinkLeave}
            >
              İletişim
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto" style={{ marginRight: '20px' }}>
            <Nav.Link
              as={Link}
              to="/login"
              className={isNavbarLight ? 'text-light' : 'text-dark'}
              style={{
                marginRight: '15px',
                fontSize: '18px',
                transition: 'opacity 0.5s ease-in-out',
              }}
              onMouseOver={handleLinkHover}
              onMouseOut={handleLinkLeave}
            >
              Giriş Yap
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/register"
              className={isNavbarLight ? 'text-light' : 'text-dark'}
              style={{
                marginRight: '15px',
                fontSize: '18px',
                transition: 'opacity 0.5s ease-in-out',
              }}
              onMouseOver={handleLinkHover}
              onMouseOut={handleLinkLeave}
            >
              Üye Ol
            </Nav.Link>
            
            <div style={{ marginTop: '10px' }}>
            <FontAwesomeIcon
              icon={icon}
              size="lg"
              style={{ ...iconStyle, color: isNavbarLight ? 'white' : 'black' }}
            />
            </div>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default MyNavbar;