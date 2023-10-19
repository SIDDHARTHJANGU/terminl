import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/png/termnl.png";
import Slider from "react-slick";

const Myheader = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="min-vh-100 d-flex  flex-column nav-bgc">
      <Container>
        <img className="pt-2 pb-2" src={logo} alt="#" />
      </Container>
      <section className=" d-flex flex-grow-1 bcg-img">
        <Container className=" flex-column justify-content-center align-item-center min-h-100 d-flex">
          <div>
            <Slider {...settings}>
              <div className="text-center">
                <h1 className="font_josefin fs_96 text-white fw_700">
                  Et dictumst <span className="txt_clr">diam</span>{" "}
                  <span className="d-lg-block">
                    <span className="txt_clr">pharetra</span> volutpat.
                  </span>
                </h1>
                <p className="text-white font_poppins fs_22 fw_600">
                  Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra
                  ornare vel morbi{" "}
                  <span className="d-lg-block">
                    ut in tincidunt viverra. Aenean feugiat malesuada nunc
                    aliquet vitae, commodo,
                  </span>{" "}
                  <span className="d-lg-block">pellentesque laoreet amet.</span>
                </p>
                <button className="font_Roboto fs_22 fw_700 text-white bttn_get">
                  GET STARTED
                </button>
              </div>
              <div className="text-center">
                <h1 className="font_josefin fs_96 text-white fw_700">
                  Et dictumst <span className="txt_clr">diam</span>{" "}
                  <span className="d-lg-block">
                    <span className="txt_clr">pharetra</span> volutpat.
                  </span>
                </h1>
                <p className="text-white font_poppins fs_22 fw_600">
                  Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra
                  ornare vel morbi{" "}
                  <span className="d-lg-block">
                    ut in tincidunt viverra. Aenean feugiat malesuada nunc
                    aliquet vitae, commodo,
                  </span>{" "}
                  <span className="d-lg-block">pellentesque laoreet amet.</span>
                </p>
                <button className="font_Roboto fs_22 fw_700 text-white bttn_get">
                  GET STARTED
                </button>
              </div>
            </Slider>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Myheader;
