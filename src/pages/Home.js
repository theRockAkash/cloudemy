import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import dummyData from "../configs/dummyData";
import Blogs from "../component/Blogs";
import Counter from "../component/Counter";
import AppStore from "../component/AppStore";

const Home = () => {
  const [vissionData, setVissionDara] = useState();
  const [missionData, setMissionDara] = useState();
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let vData = dummyData.vission ? dummyData.vission : [];
    setVissionDara(vData);
    let mData = dummyData.mission ? dummyData.mission : [];
    setMissionDara(mData);
  }, []);

  // Function to handle scrolling and start counter
  const handleScroll = () => {
    if (counterRef.current) {
      const { top } = counterRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (top < windowHeight) {
        // Start the counter when the "counter" section is in view
        const interval = setInterval(() => {
          setCount((prevCount) => {
            if (prevCount < 6000) {
              return prevCount + 1;
            } else {
              clearInterval(interval);
              return 6000;
            }
          });
        }, 100);
      }
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <section className="home-banner">
        <Container className="h-100">
          <Row className="align-items-center justify-content-center h-100">
            <Col lg="8">
              <h1 className="text-white banner-title mb-3 mb-lg-5">
                Professional Video Editing Fast & Easy
              </h1>
              <AppStore />
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="text-start">
        <section id="vission">
          <Row>
            <Col lg="6"></Col>
            <Col lg="6">
              <Row className="item-row-gap">
                {vissionData && vissionData.length > 0
                  ? vissionData.map((item, i) => {
                      return (
                        <Col lg="12" key={`vission_${i}`}>
                          <h2>{item.title ? item.title : ""}</h2>
                          <p>{item.desc ? item.desc : ""}</p>
                        </Col>
                      );
                    })
                  : null}
              </Row>
            </Col>
          </Row>
        </section>
        <section id="mission">
          <Row>
            <Col lg="6">
              <Row className="item-row-gap">
                {missionData && missionData.length > 0
                  ? missionData.map((item, i) => {
                      return (
                        <Col lg="12" key={`mission_${i}`}>
                          <h2>{item.title ? item.title : ""}</h2>
                          <p>{item.desc ? item.desc : ""}</p>
                        </Col>
                      );
                    })
                  : null}
              </Row>
            </Col>
            <Col lg="6"></Col>
          </Row>
        </section>
        <section id="blog">
          <Blogs />
        </section>
      </Container>
      <section id="counter" ref={counterRef}>
        <Counter count={count} />
      </section>
      <section id="app-store-section">
        <Container fluid>
          <h2 className="app-store-title mb-3 mb-lg-5">
            Create Mind-blowing Videos, Fast and Easy now!
          </h2>
          <AppStore />
        </Container>
      </section>
    </Fragment>
  );
};

export default Home;
