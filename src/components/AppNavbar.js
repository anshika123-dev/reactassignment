import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import './AppNavbar.css'; // Import custom CSS

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src="https://www.searates.com/design/images/searates-logo.svg?2"
            alt="SeaRates"
            height="24"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center Nav Links */}
          <Nav className="ms-auto">
            <Nav.Link href="#">Tools</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">References</Nav.Link>
            <Nav.Link href="#">Company</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Integrations</Nav.Link>
          </Nav>

          {/* Right Icons */}
          <Nav className="align-items-center">
            <Nav.Link href="#" className="position-relative me-3">
              <FaBell size={18} />
            </Nav.Link>

            <Button variant="warning" className="me-3 px-3 fw-bold">
              Upgrade
            </Button>

            <NavDropdown
              title={
                <div className="rounded-circle bg-warning text-white text-center fw-bold" style={{ width: 35, height: 35, lineHeight: '35px' }}>
                  AS
                </div>
              }
              id="basic-nav-dropdown"
              align="end"
              className="no-caret-dropdown"
            >
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
