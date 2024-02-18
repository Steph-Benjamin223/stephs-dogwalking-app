import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="mt-5">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6" className="mt-md-0 mt-3">
            <h5 className="text-uppercase">Steph's Dog Walking LLC</h5>
            <p>Your trusted partner in dog walking.</p>
          </Col>
          <Col md="6" className="mb-md-0 mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Facebook</a>
              </li>
              <li>
                <a href="#!">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="py-4">
              <div className="text-center">
                &copy; {year} Dog Walking Service, All Rights Reserved.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
