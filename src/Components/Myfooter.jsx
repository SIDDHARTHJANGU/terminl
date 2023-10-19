import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Svglocation, Svgmessage, Svgphone } from "./Mysvg";
import logo from "../assets/img/png/termnl.png";

const Myfooter = () => {
  return (
    <div className="bcg_footer">
      <Container className="pt-md-5">
        <Row className="pt-5 pb-5">
          <Col md={7}>
            <img src={logo} alt="#" />
            <p className="txt_clr_1">
              Dolor lacus nisl at elementum, aliquet ac.{" "}
              <span className="d-lg-block">
                Consectetur viverra ornare vel morbi ut in{" "}
              </span>{" "}
              <span className="d-lg-block">tincidunt viverra.</span>
            </p>
          </Col>
          <Col md={5}>
            <div className="d-flex">
              <Svgmessage />
              <p className="txt_clr_1 fw_400 fs_16 font_poppins mb-0 ms-3">
                termnl@gmail.com
              </p>
            </div>
            <div className="d-flex mt-3">
              <Svgphone />
              <p className="txt_clr_1 fw_400 fs_16 font_poppins mb-0 ms-3">
                1234567890
              </p>
            </div>
            <div className="d-flex mt-3">
              <Svglocation />
              <p className="txt_clr_1 fw_400 fs_16 font_poppins mb-0 ms-3">
                Ultrices condimentum non, ac
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="line ">
        <p className="text-white text-center pt-4">Copyright @ 2021</p>
      </div>
    </div>
  );
};

export default Myfooter;
