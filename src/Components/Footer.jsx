import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <Container fluid className="bg-white ">
        <Container className="mt-4 bg-white">
          <Row>
            <Card className="border-0">
              <Card.Body>
                <Row>
                  <Col  md={6} lg={4}>
                    <h4>
                      <a href="#Navbar"className=" text-dark text-decoration-none">iLanding</a>
                    </h4>
                    <ul className="list-unstyled">
                    <li className="pt-4">A108 Adam Street</li>
                    <li> New York, NY 535022</li>
                    <li className="pt-3"><b>Phone:</b> +1 5589 55488 55</li>
                    <li><b>Email:</b> info@example.com</li>
                    </ul>
                    <Row>
                    <Col md={3} className=" icon ms-2 "><FaXTwitter size={18}/></Col>
                    <Col md={3} className=" icon ms-2 "><FaFacebook size={18}/></Col>
                    <Col md={3} className=" icon ms-2 "><LuInstagram size={18}/></Col>
                    <Col md={3} className=" icon ms-2"><FaLinkedin size={18}/></Col>
                    </Row>
                  </Col>

                  <Col md={3} lg={2} className="pt-2 ">
                    <h6 ><b>Useful Links</b></h6>
                    <ul className="list-unstyled pt-3">
                    <li><a href="#" className=" pass3  text-decoration-none ">Home</a></li>
                    <li><a href="#" className=" pass3  text-decoration-none">About us</a></li>
                    <li><a href="#" className=" pass3  text-decoration-none">Services</a></li>
                    <li><a href="#" className=" pass3  text-decoration-none">Terms of service</a></li>
                    <li><a href="#" className=" pass3  text-decoration-none">Privacy policy</a></li>
                    </ul>
                  </Col>

                  <Col md={3} lg={2} className="pt-2 ">
                    <h6><b>Our Services</b></h6>
                    <ul className="list-unstyled pt-3">
                    <li><a href="#" className="pass3  text-decoration-none">Web Development</a></li>
                    <li><a href="#" className="pass3  text-decoration-none">Web Design</a></li>
                    <li><a href="#" className="pass3  text-decoration-none">Product Management</a></li>
                    <li><a href="#" className="pass3  text-decoration-none">Marketing</a></li>
                    <li><a href="#" className="pass3  text-decoration-none">Graphic Design</a></li>
                    </ul>
                  </Col>

                  <Col md={3} lg={2} className="pt-2">
                    <h6><b>Hic solutasetp</b></h6>
                    <ul className="list-unstyled pt-3 fs-6">
                    <li><a href="#" className="pass3  text-decoration-none">Molestiae accusamus iure</a></li>
                    <li><a href="#" className="pass3  text-decoration-none">Excepturi dignissimos</a></li>
                    <li><a href="#" className="pass3  text-decoration-none">Suscipit distinctio</a></li>
                    <li><a href="#" className="pass3  text-decoration-none">Dilecta</a></li>
                    <li><a href="#" className="pass3  text-decoration-none">Sit quas consectetur</a></li>
                    </ul>
                  </Col>

                  <Col md={3} lg={2} className="pt-2">
                    <p><b>Nobis illum</b></p>
                    <ul className="list-unstyled text-secondary">
                    <li><a href="#" className=" pass3  text-decoration-none">Ipsam</a></li>
                    <li><a href="#" className=" pass3  text-decoration-none">Laudantium dolorum</a></li>
                    <li><a href="#" className=" pass3  text-decoration-none">Dinera</a></li>
                    <li><a href="#" className=" pass3  text-decoration-none">Trodelas</a></li>
                    <li><a href="#" className=" pass3  text-decoration-none">Flexo</a></li>
                    </ul>
                  </Col>
                  <Col md={12}>
                    <p className="border text-secondery mt-3"></p>
                  </Col>
                  <Col md={12} className="text-center">
                  <ul className="list-unstyled pt-3">
                    <li >© Copyright<span><b> iLanding </b></span>All Rights Reserved
                    </li>
                    <li className="mb-5">Designed by
                      <span>
                        <a href="#" className="text-primary text-decoration-none">BootstrapMade</a>
                      </span>
                    </li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* </Col>  */}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
