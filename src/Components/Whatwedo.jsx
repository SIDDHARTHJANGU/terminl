import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Whatwedo = () => {
  return (
    <div className="bcg_section">
      <Container className="pt-3 pt-lg-5 pb-3 pb-lg-5">
        <Row className="justify-content-between pt-5 pt-md-5 pt-md-2 pb-lg-5 pb-2">
          <Col md={4} lg={3}>
            <h2 className="text-black fs_48 fw_700 font_josefin">
              <span className="txt_clr">What</span> we do?
            </h2>
          </Col>
          <Col md={7} lg={8}>
            <p className="text-black fs_16 fw_400 font_poppins ">
              We believe in developing useful software instead of just
              fulfilling initial requirements. During the past 10 years, with{" "}
              <span className="d-xxl-block">
                an agile mindset, we have delivered 100+ different projects,
                ranging from startups to enterprises.
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Whatwedo;
