import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

export default function basketStrap() {
  return (
    <div>
      <Container>
        <Row xs={2} style={{ backgroundColor: 'lightblue', height: '200px' }}>
    
          <Col>It is just one columne</Col>
          <Col>It is just one columne</Col>
          <Col>It is just one columne</Col>
          <Col>It is just one columne</Col>
          <Col>It is just one columne</Col>
          <Col>It is just one columne</Col>
        </Row>
        <Row>
         <Col >1</Col>
         <Col>2</Col>
                 
       </Row>
      </Container>
    </div>
  );
}
