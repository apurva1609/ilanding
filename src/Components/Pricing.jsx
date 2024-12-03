import React from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import Images from '../Assets/Arrow1.png';
import { FaCircleCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import '../Assets/Css/ILanding.css';
const Pricing = () => {
  return (
    <>
      <Container fluid style={{backgroundColor:" #F3F9FF"}} >
        
        <Container className="mb-5">
          <Row>
            <Col
              md={12}
              className="text-center container section-title aos-init aos-animate"
              data-aos="fade-up"
            >
              <h1>Pricing</h1>
              <span
                style={{
                  display: "inline-block",
                  width: "5%",
                  borderBottom: "3px solid blue",
                }}
              />
              {/* </span> */}
              <p className="py-3">
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </p>
            </Col>

            {/* Card first */}
            <Col lg={4} md={12} className="g-4">
              <Card className="plan border-0 rounded-4 h-100 mt-2 lg-mt-0 aos-init aos-animate ">
                <Card.Body className="ms-3">
                  <h3 className="pt-3">Basic Plan</h3>
                  <Row>
                    <Col className="py-2">
                      <h4 className="d-inline  ">
                        <b style={{ margintop: "20%" }}>$</b>
                      </h4>
                      <h1 className="d-inline">
                        <b style={{ font: "1px" }}>9.9</b>
                      </h1>
                      <p className="d-inline ms-2">/month</p>
                    </Col>
                  </Row>
                  <p className="py-3 text-dark">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam.
                  </p>
                  <p className="fs-5">Featured Included:</p>
                  <Row>
                    <Col className="py-2">
                      <FaCircleCheck className="text-primary me-2 fs-5" />
                      <span>Duis aute irure dolor</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="py-2">
                      <FaCircleCheck className="text-primary me-2 fs-5" />
                      <span>Excepteur sint occaecat</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="py-2">
                      <FaCircleCheck className="text-primary me-2 fs-5" />
                      <span>Nemo enim ipsam voluptatem</span>
                    </Col>
                  </Row>

                  <Col className="d-flex justify-content-center align-items-center mt-5 pt-5">
                    <Button href="#" className="bg-primary border-0 text-bold text-white rounded-pill py-2 w-100 ">
                      <b> Buy Now <GoArrowRight /></b>
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
            </Col>

            {/* Card second */}
            <Col lg={4} md={12} className="g-4">
              <Card className="pass1 position-relative text-white bg-primary rounded-4 border border-0 h-100 mt-2 md-mt-0 aos-init aos-animate">
                <div className="d-flex justify-content-center text-center">
                  <p className="position-absolute text-primary bg-white px-2 py-1 rounded-pill " style={{marginTop:"-15px"}}>Most Popular</p>
                </div>
                <Card.Body className="ms-3 ">
                  <h3 className="pt-3 bg-primary">Standard Plan</h3>
                  <Row>
                    <Col className="my-2">
                      <h4 className="d-inline ">
                        <b className="mb-4">$</b>
                      </h4>
                      <h1 className="d-inline">
                        <b>19.9</b>
                      </h1>
                      <p className="d-inline ms-2">/month</p>
                    </Col>
                  </Row>
                  <p className="py-3">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum.
                  </p>
                  <p className="fs-5">Featured Included:</p>
                  <Row className="align-items-center">
                    <Col className="py-2">
                      <FaCircleCheck className="me-2 fs-5" />
                      <span>Lorem ipsum dolor sit amet</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="py-2">
                      <FaCircleCheck className="me-2 fs-5" />
                      <span>Consectetur adipiscing elit</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="py-2">
                      <FaCircleCheck className="me-2 fs-5" />
                      <span>Sed do eiusmod tempor</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="py-2">
                      <FaCircleCheck className="me-2 fs-5" />
                      <span>Ut labore et dolore magna</span>
                    </Col>
                  </Row>

                  <Col className="d-flex justify-content-center align-items-center pt-2 mt-5">
                    <Button href="#" className="bg-white border-0 text-primary rounded-pill py-2 w-100  ">
                      <b> Buy Now <GoArrowRight /></b>
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
            </Col>

            {/* Card theird */}
            <Col lg={4} md={12} className="g-4">
              <Card className=" plan border-0 rounded-4 h-100 mt-2 lg-mt-0">
                <Card.Body className="ms-3">
                  <h3 className="pt-3">Premium Plan</h3>
                  <Row>
                    <Col className="py-2">
                      <span className="fs-5 my-3">
                        <b className="my-5">$</b>
                      </span>
                      <span className="fs-1 ">
                        <b>39.9</b>
                      </span>
                      <span>/month</span>
                    </Col>
                  </Row>
                  <p className="py-2">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae.
                  </p>
                  <p className="fs-5">Featured Included:</p>
                  <Row>
                    <Col className="py-2">
                      <FaCircleCheck className="text-primary me-2 fs-5" />
                      <span>Temporibus autem quibusdam</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="py-2">
                      <FaCircleCheck className="text-primary me-2 fs-5" />
                      <span>Saepe eveniet ut et voluptates</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="py-2">
                      <FaCircleCheck className="text-primary me-2 fs-5" />
                      <span>Nam libero tempore soluta</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="py-2">
                      <FaCircleCheck className="text-primary me-2 fs-5" />
                      <span>Cumque nihil impedit quo</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="py-2">
                      <FaCircleCheck className="text-primary me-2 fs-5" />
                      <span>Maxime placeat facere possimus</span>
                    </Col>
                  </Row>

                  <Col className="d-flex justify-content-center align-items-center pt-1 mt-4">
                    <Button href="#" className="bg-primary border-0 text-bold text-white rounded-pill py-2 w-100 ">
                      <b> Buy Now <GoArrowRight /></b>
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5 py-5">
          <Row>
            <Col md={5}>
              <h1>Have a question? Check out the FAQ</h1>
              <p>
                Maecenas tempus tellus eget condimentum rhoncus sem quam semper
                libero sit amet adipiscing sem neque sed ipsum.
              </p>
              <img src={Images} width={250} height={250}/>
            </Col>


{/* Accordion 1 */}
            <Col md={7}>
              <Accordion >
                <Accordion.Item eventKey="0" className="faq-content my-4 rounded-4  border-0  ">
                  <Accordion.Header  className="faq-active rounded-5">
                    Non consectetur a erat nam at lectus urna duis?
                  </Accordion.Header>
                  <Accordion.Body >
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

{/* Accordion 2 */}
              <Accordion>
                <Accordion.Item
                  eventKey="1"
                  className="faq-content my-4 rounded-3 border-0"
                >
                  <Accordion.Header className="faq-active">
                    Feugiat scelerisque varius morbi enim nunc faucibus?
                  </Accordion.Header>
                  <Accordion.Body>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

{/* Accordion 3 */}
              <Accordion>
                <Accordion.Item
                  eventKey="2"
                  className="faq-content my-4 rounded-3 border-0"
                >
                  <Accordion.Header className="faq-active">
                    Dolor sit amet consectetur adipiscing elit pellentesque?
                  </Accordion.Header>
                  <Accordion.Body>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

{/* Accordion 4 */}
              <Accordion>
                <Accordion.Item
                  eventKey="3"
                  className="my-4 rounded-3 border-0 faq-content"
                >
                  <Accordion.Header className="faq-active">
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                  </Accordion.Header>
                  <Accordion.Body>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

{/* Accordion 5 */}
              <Accordion>
                <Accordion.Item
                  eventKey="4"
                  className="my-4 rounded-3 border-0 faq-content"
                >
                  <Accordion.Header className="faq-active">
                    Tempus quam pellentesque nec nam aliquam sem et tortor?
                  </Accordion.Header>
                  <Accordion.Body>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

{/* Accordion 6 */}
              <Accordion>
                <Accordion.Item
                  eventKey="5"
                  className="my-4 rounded-3 border-0 faq-content"
                >
                  <Accordion.Header className="faq-active">
                    Perspiciatis quod quo quos nulla quo illum
                    ullam?
                  </Accordion.Header>
                  <Accordion.Body>
                  Enim ea facilis quaerat voluptas quidem et dolorem. 
                  Quis et consequatur non sed in suscipit sequi. 
                  Distinctio ipsam dolore et.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Container>

      

      <Container fluid className="bg-primary text-center text-white">
        <Row>
          <Col md={12} className="py-5 my-5">
            <h3>Call To Action</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat
              <br />
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
            <Button href="#"
              className=" btn btn-outline-light bg-primary 
              text-white rounded-pill py-2 px-5 mt-3"
            >
              Call To Action
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
