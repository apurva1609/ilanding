import React from 'react'
import { Container, Row,Col,Breadcrumb,Image,Card,Button,ListGroup} from 'react-bootstrap'
import imgservice from '../Assets/Images/services.jpg';
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { BsFiletypePdf } from "react-icons/bs";
import { FaRegFileWord } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { MdCheckCircleOutline } from "react-icons/md";
import "../Assets/Css/Services.css";
const ServiceDetails = () => {
  return (
    <>
   
      
            <Container fluid className='headerpart py-5'>
            <div  className='text-center mt-5 pt-5'> <h2>Service Details</h2>
            <Breadcrumb className='d-flex justify-content-center '>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      
      <Breadcrumb.Item active>Service Details</Breadcrumb.Item>
    </Breadcrumb>
    </div>  </Container>
    <Container>
        <Row>
            <Col>
    <Row>
      <Col md={4} className='p-3'>
      <Card  className='border-0 rounded-0 shadow p-3 mb-3 bg-body rounded'>
      
      <Card.Body>
      <div className="d-grid gap-3">
      <Card.Header>Services List</Card.Header>
      <Button className="btn btn-primary text-dark border-0 rounded-0 text-start"  href="#">
      <HiOutlineArrowRightCircle />Web Design
      </Button>
      <Button className="bg-light text-dark border-0 rounded-0 text-start"  href="#">
      <HiOutlineArrowRightCircle />Web Development
      </Button>
      <Button  className="bg-light text-dark border-0 rounded-0 text-start" href="#">
      <HiOutlineArrowRightCircle /> Product Management
      </Button>
      <Button className="bg-light text-dark border-0 rounded-0 text-start" href="#">
      <HiOutlineArrowRightCircle /> Graphic Design
      </Button>
      <Button className="bg-light text-dark border-0 rounded-0 text-start" href="#">
      <HiOutlineArrowRightCircle /> Marketing
      </Button>
    </div>

      </Card.Body>
      
    </Card>
    
    <Card className='border-0 rounded-0 text-start shadow p-3 mb-3 bg-body rounded'> 
      <Card.Body>
      <ListGroup variant="flush">
      <Card.Header className='border-0 rounded-0 text-start'>Download Catalog</Card.Header>
        <ListGroup.Item><BsFiletypePdf /> Catalog PDF</ListGroup.Item>
        <ListGroup.Item><FaRegFileWord /> Catalog DOC</ListGroup.Item>
        
      </ListGroup></Card.Body>
    </Card>
    <Card>
      <div>
      <Card.Body className='text-light text-center bg-primary'>
     <BsHeadset size={40} />
     <h4>Have a Question?</h4>
     <Card.Text><MdOutlineLocalPhone />+1 5589 55488 55</Card.Text>
     <Card.Text href="self"><TfiEmail /> contact@example.com</Card.Text>
      </Card.Body>
      </div>
    </Card>
      </Col>
      <Col md={8} className='p-4'>
    <Image src={imgservice} alt=''fluid className='mb-4'></Image>
    <h5>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</h5>
    <p>Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. 
      Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.</p>
      <p>
        <ul className='list-unstyled'>
          <li className=' py-1'><MdCheckCircleOutline /> Aut eum totam accusantium voluptatem.</li>
          <li className=' py-1'><MdCheckCircleOutline /> Assumenda et porro nisi nihil nesciunt voluptatibus.</li>
          <li className=' py-1'><MdCheckCircleOutline /> Ullamco laboris nisi ut aliquip ex ea</li>
        </ul>
        Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. 
        Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
<p>Sunt rem odit accusantium omnis perspiciatis officia. 
Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime.
 Sunt eum quia impedit dolore alias explicabo ea.</p>

      </p>
      </Col>
    </Row>
   
    </Col></Row>
   
    </Container>
      
    </>
  )
}

export default ServiceDetails
