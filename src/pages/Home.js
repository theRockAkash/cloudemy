import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import dummyData from "../configs/dummyData";
import Blogs from "../component/Blogs";
import Counter from "../component/Counter";
import AppStore from "../component/AppStore";
import banner from "../assest/images/baner-img.jpg";

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
            if (prevCount < 10000) {
              return prevCount + 1;
            } else {
              clearInterval(interval);
              return 10000;
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

  // For video
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.autoPlay = true;
      videoRef.current.loop = true;
      videoRef.current.controls = true;
      videoRef.current.play().catch((error) => {
        console.log("Autoplay failed:", error);
      });
    }
  }, []);
  return (
    <Fragment>
      <section className="home-banner">
        <img className="banner-img" src={banner} alt="CloudeMy" />
        <Container className="h-100">
          <Row className="align-items-center justify-content-center h-100">
            <Col lg="8" style={{ zIndex: 3 }}>
              <h1 className="text-white banner-title mb-3 mb-lg-5">
                Professional Video Lecture Recorder Studio
              </h1>
              <AppStore />
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="text-start">
        <section id="vission">
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <video
                  width="100%"
                  height="100%"
                  ref={videoRef}
                  className="rounded"
                >
                  <source
                    src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </Col>
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
          <Row className="align-items-center">
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
            <Col lg="6">
              <div>
                <iframe className="rounded" width="560" height="315" src="https://www.youtube.com/embed/ixRDc_viMxk?si=HLPbFRZry27yMVix" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </Col>
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
            Unleash Your Creativity with
            <br />
            Cloudemy Studio
          </h2>
          <AppStore />
        </Container>
      </section>
    </Fragment>
  );
};

export default Home;
