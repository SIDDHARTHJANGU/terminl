import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img3 from "../assets/img/png/img3.png";

const Application = () => {
  return (
    <div className="mt-5 mb-4 mb-md-4">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <img className="w-100" src={img3} alt="#" />
          </Col>
          <Col lg={6}>
            <h2 className="text-black fs_48 fw_700 font_josefin">
              <span className="txt_clr">Application</span>Development
            </h2>
            <p className="text-black fs_16 fw_400 font_poppins ">
              Invent, build, integrate, scale, and upgrade your applications
              with AgileCube! For
              <span className="d-xxl-block">
                a decade, we have been harnessing digital technologies for the
                benefit of Fortune
              </span>{" "}
              <span className="d-xxl-block">
                businesses, mid and large enterprises, and startups across a
                variety of industries.
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Application;
