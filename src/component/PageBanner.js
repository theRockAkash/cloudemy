import { Col, Container, Row } from "reactstrap";
import banner from "../assest/images/baner-img.jpg";
const PageBAnner = ({bannerImg,title}) =>{
    return(
        <section className="home-banner page-banner">
          <img className="banner-img" src={ banner} alt="CloudeMy" />
          <Container className="h-100">
            <Row className="align-items-center justify-content-center h-100">
              <Col lg="8" style={{ zIndex: 3 }}>
                <h1 className="text-white banner-title mb-4 mb-lg-5">
                  {title}
                </h1>
              </Col>
            </Row>
          </Container>
        </section>
    )
}
export default PageBAnner