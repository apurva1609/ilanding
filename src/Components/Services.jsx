import React from 'react'
import { Col, Card, Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BsActivity } from "react-icons/bs";
import { PiNetwork } from "react-icons/pi";
import { BsEasel } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
//  import { MdArrowRightAlt } from "react-icons/md";
// import { GoDash } from "react-icons/go";
import "../Assets/Css/Services.css";

const Services = () => {
  return (
    <>
      <Container fluid className='back-color '>
        <Row className=' py-5 p-3'>
          <div className='text-center'>
            <h3 className='mt-5 mb-0'>Services</h3>
            <span
              style={{
                display: "inline-block",
                width: "40px",
                borderBottom: "3px solid blue"
              }}
            />
            {/* <GoDash style={{ color: "blue",fontSize:"70px"}} /> */}
            <p className='gap-0 pt-2 pb-4'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p></div>
          <Row>
            <Col md={6} xs={12}>
              <Card className='mt-3'>
                <Card.Body>
                  <Row>


                    <Col md={2} className='ServiceIcons1'>

                      <div className="service-icons bg-primary-subtle rounded-3 d-flex justify-content-center px-1 py-3">
                      <BsActivity size={32}  className='text-primary'/>
                      </div>
                      </Col>
                    <Col md={10}>

                      <h6>Nesciunt Mete</h6>
                      <p>Provident nihil minus qui  maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                      <Link to="/ServiceDetails"> <Button className='btn-sm  text-primary bg-white  border-0' href="/ServiceDetails">Read More <HiOutlineArrowSmallRight /></Button></Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xs={12}>
              <Card className='mt-3'>
                <Card.Body>
                  <Row>
                    <Col md={2} className=''>
                    <div className='service-icons bg-primary-subtle rounded-3 d-flex justify-content-center px-1 py-3'>
                      <PiNetwork size={32}  className='text-primary' /></div>
                    </Col>
                    <Col md={10}>
                      <h6>Eosle Commodi</h6>
                      <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                        Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                        <Link to="/ServiceDetails"> <Button className='btn-sm  text-primary bg-white border-0' href="/ServiceDetails">Read More  <HiOutlineArrowSmallRight/></Button> </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} xs={12}>
              <Card className='mt-3'>
                <Card.Body>
                  <Row>
                    <Col md={2} className=''>
                    <div className='service-icons bg-primary-subtle rounded-3 d-flex justify-content-center px-1 py-3'>
                      <BsEasel size={32} className='text-primary' /></div>
                    </Col>
                    <Col md={10}>
                      <h6>Ledo Markt</h6>
                      <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                        Minus ea aut.
                        Vel qui id voluptas adipisci eos earum corrupti.</p>
                        <Link to="/ServiceDetails"> <Button className='btn-sm  text-primary bg-white  border-0' href="/ServiceDetails">Read More  <HiOutlineArrowSmallRight /></Button> </Link>
                                  </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xs={12}>
              <Card className='mt-3'>
                <Card.Body>
                  <Row>
                    <Col md={2} className=''>
                    <div className='service-icons bg-primary-subtle rounded-3 d-flex justify-content-center px-1 py-3'>
                      <BsClipboardData size={32} className='text-primary'/></div>
                    </Col>
                    <Col md={10}>
                      <h6>Asperiores Commodit</h6>
                      <p>Non et temporibus minus omnis sed dolor esse consequatur.
                        Cupiditate sed error ea fuga sit provident adipisci neque.</p> 
                        <Link to="/ServiceDetails"> <Button className='btn-sm  text-primary bg-white  border-0 ' href="/ServiceDetails">Read More  <HiOutlineArrowSmallRight /></Button> </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>

    </>
  )
}

export default Services

