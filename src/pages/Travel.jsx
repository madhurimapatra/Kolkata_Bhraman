import React from "react";
import tourData from "../file/data/tours";
import TourCard from "./../shared/TourCard";
import Newsletter from "./../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

const Travel = () => {
  return (
    <>
    <div className="tra-vel">
    <section className="wel-com">
      <h1
        style={{
          color: "white",
          padding: "0px",
          textAlign:"center",
        
        }}
      >
        Welcome To City Of Joy
      </h1>
      </section>
      </div>

      <section className="First pt-3"></section>

      <section className="Second pt-2">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" md="6" sm="6" className="mb-4" key={tour.id}>
                {" "}
                <TourCard tour={tour} />{" "}
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="Third">
        <Newsletter />
      </section>
    </>
  );
};

export default Travel;
