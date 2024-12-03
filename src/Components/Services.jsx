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
        <Container>
        <Row className=' py-5 p-3'>
          <div className='text-center'>
            <h1 className='mt-5 mb-0'>Services</h1>
            <span
              style={{
                display: "inline-block",
                width: "40px",
                borderBottom: "3px solid blue"
              }}
            />
        
            <p className='gap-0 pt-2 pb-4'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p></div>
          <Row>
            <Col md={6} xs={12}>
              <Card className='mt-3 h-100 plan border-0 '>
                <Card.Body>
                  <Row>
                    <Col md={2} className='ServiceIcons1'>
                      <div className="service-icons bg-primary-subtle rounded-3 d-flex justify-content-center px-1 py-3">
                      <BsActivity size={32}  className='text-primary'/>
                      </div>
                      </Col>
                    <Col md={10} className='ps-3'>

                      <h4 >Nesciunt Mete</h4>
                      <p className='pt-2'>Provident nihil minus qui consequatur non omnis 
                        maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                      <Link to="/ServiceDetails"> <Button className='  text-primary bg-white  border-0 ' href="/ServiceDetails"><b>Read More</b> <HiOutlineArrowSmallRight className='icon5'/></Button></Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className='mt-3 h-100 plan border-0'>
                <Card.Body>
                  <Row>
                    <Col md={2} className=''>
                    <div className='service-icons bg-primary-subtle rounded-3 d-flex justify-content-center px-1 py-3'>
                      <PiNetwork size={32}  className='text-primary' /></div>
                    </Col>
                    <Col md={10} className='ps-3'>
                      <h4>Eosle Commodi</h4>
                      <p className='pt-2'>Ut autem aut autem non a. Sint sint sit facilis nam iusto <br/>
                        sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                        <Link to="/ServiceDetails"> <Button className='  text-primary bg-white border-0' href="/ServiceDetails"><b>Read More</b>  <HiOutlineArrowSmallRight className='icon5'/></Button> </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col md={6} xs={12}>
              <Card className='mt-3 h-100 plan border-0'>
                <Card.Body>
                  <Row>
                    <Col md={2} className=' '>
                    <div className='service-icons bg-primary-subtle rounded-3 d-flex justify-content-center px-1 py-3'>
                      <BsEasel size={32} className='text-primary' /></div>
                    </Col>
                    <Col md={10} className='ps-3'>
                      <h4>Ledo Markt</h4>
                      <p className='pt-2'>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                        Minus ea aut.
                        Vel qui id voluptas adipisci eos earum corrupti.</p>
                        <Link to="/ServiceDetails"> <Button className='  text-primary bg-white  border-0' href="/ServiceDetails"><b>Read More</b> <HiOutlineArrowSmallRight className='icon5' /></Button> </Link>
                                  </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className='mt-3 h-100 plan border-0'>
                <Card.Body>
                  <Row>
                    <Col md={2} className=''>
                    <div className='service-icons bg-primary-subtle rounded-3 d-flex justify-content-center  px-3 py-3'>
                      <BsClipboardData size={32} className='text-primary '/></div>
                    </Col>
                    <Col md={10} className='ps-3 pt-2 '>
                      <h4>Asperiores Commodit</h4>
                      <p className='py-2'>Non et temporibus minus omnis sed dolor esse consequatur.
                        Cupiditate sed error ea fuga sit provident adipisci neque.</p> 
                        <Link to="/ServiceDetails"> 
                            <Button className='  text-primary bg-white  border-0  ' href="/ServiceDetails">
                            <b>Read More </b> <HiOutlineArrowSmallRight className='icon5'/></Button> 
                        </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
        </Container>
      </Container>

    </>
  )
}

export default Services;

