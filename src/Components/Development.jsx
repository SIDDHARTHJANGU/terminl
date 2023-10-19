import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img2 from "../assets/img/png/img2.png";

const Development = () => {
  return (
    <div className="mt-5 mt-md-0">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-lg-row">
          <Col lg={6}>
            <h2 className="text-black fs_48 fw_700 font_josefin">
              <span className="txt_clr">Product</span>Development
            </h2>
            <p className="text-black fs_16 fw_400 font_poppins ">
              The company’s agile, comprehensive, and future-proof product
              engineering services
              <span className="d-xxl-block">
                are providing support for both fresh startups, from the initial
                idea to post-delivery
              </span>{" "}
              <span className="d-xxl-block">
                upgrades, and mature companies in need of product development.
              </span>
            </p>
          </Col>
          <Col lg={6}>
            <img className="w-100" src={img2} alt="#" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Development;
