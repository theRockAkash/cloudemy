import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import dummyData from "../configs/dummyData";
import Blogs from "../component/Blogs";
import Counter from "../component/Counter";
import AppStore from "../component/AppStore";
import banner from "../assest/images/baner-img.jpg";
import slide1 from "../assest/images/slide-1.jpeg";
import slide2 from "../assest/images/slide-2.jpeg";
import slide3 from "../assest/images/slide-3.jpeg";
import slide4 from "../assest/images/slide-4.jpeg";
import slide5 from "../assest/images/slide-5.jpeg";

const Home = () => {
  const [vissionData, setVissionDara] = useState();
  const [missionData, setMissionDara] = useState();
  const [count, setCount] = useState(1000);
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
            if (prevCount < 45000) {
              return prevCount + 100;
            } else {
              clearInterval(interval);
              return 45000;
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
    <div className="home-page">
        <Fragment>
          <section className="home-banner">
            <img className="banner-img" src={banner} alt="CloudeMy" />
            <Container className="h-100">
              <Row className="align-items-center justify-content-center h-100">
                <Col lg="8" style={{ zIndex: 3 }}>
                  <h1 className="text-white banner-title mb-4 mb-lg-5">
                    Professional Teaching Video Recorder
                  </h1>
                  <AppStore />
                </Col>
              </Row>
            </Container>
          </section>
          <Container className="text-start inner-space">
            <section id="vission" className="mb-5 pb-0 pb-xl-5">
              <hr />
              <h2 className="text-center">Features at a Glance</h2>
              <hr />
              <Row className="align-items-center pt-5">
                <Col lg="6">
                  <div className="mb-3 mb-lg-0 image-slider">
                    <UncontrolledCarousel
                      interval={2000}
                      items={[
                        {
                          key: 1,
                          src: slide1,
                          altText:"Want to record engaging video lectures on your phone?"
                        },
                        {
                          key: 2,
                          src: slide2,
                          altText:"The ultimate tool for recording educational videos!"
                        },
                        {
                          key: 3,
                          src: slide3,
                          altText:"Easily create your lessons using images, PDFs and PPTs."
                        },
                        {
                          key: 4,
                          src: slide4,
                          altText:"Directly write on the slides"
                        },
                        {
                          key: 5,
                          src: slide5,
                          altText:"Unlock state of art recording features all from your phone."
                        },
                      ]}
                    />
                    {/* <video
                      width="100%"
                      height="100%"
                      ref={videoRef}
                      className="rounded"
                    >
                      <source
                        src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
                        type="video/mp4"
                      />
                    </video> */}
                  </div>
                </Col>
                <Col lg="6">
                  <Row className="item-row-gap">
                    {vissionData && vissionData.length > 0
                      ? vissionData.map((item, i) => {
                          return (
                            <Col lg="12" key={`vission_${i}`}>
                              <h3 className="content-title">
                                {item.title ? item.title : ""}
                              </h3>
                              <p>{item.desc ? item.desc : ""}</p>
                            </Col>
                          );
                        })
                      : null}
                  </Row>
                </Col>
              </Row>
            </section>
            <section id="mission" className="mb-5 pb-0 pb-xl-5">
              <Row className="align-items-center">
                <Col lg="6" className="order-1 order-lg-0">
                  <Row className="item-row-gap">
                    {missionData && missionData.length > 0
                      ? missionData.map((item, i) => {
                          return (
                            <Col lg="12" key={`mission_${i}`}>
                              <h3 className="content-title">
                                {item.title ? item.title : ""}
                              </h3>
                              <p>{item.desc ? item.desc : ""}</p>
                            </Col>
                          );
                        })
                      : null}
                  </Row>
                </Col>
                <Col lg="6">
                  <div className="mb-3 mb-lg-0">
                    <iframe
                      className="rounded"
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/ixRDc_viMxk?si=HLPbFRZry27yMVix"
                      title="Promo video"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                      altText="Promo video"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </section>
            <section id="blog">
              <hr />
              <h2 className="text-center">Feature Heighlights</h2>
              <hr />
              <Blogs />
            </section>
          </Container>
          <section id="counter" className="inner-space" ref={counterRef}>
            <Counter count={count} />
          </section>
          <section id="app-store-section" className="inner-space">
            <Container fluid>
              <h2 className="app-store-title mb-3 mb-lg-5">
                Unleash Your Creativity with <br />
                Cloudemy Studio
              </h2>
              <AppStore />
            </Container>
          </section>
        </Fragment>
    </div>
  );
};

export default Home;
