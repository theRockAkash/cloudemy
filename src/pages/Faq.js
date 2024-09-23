import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
  Spinner,
} from "reactstrap";
import PageBAnner from "../component/PageBanner";
import { BsSearch } from "react-icons/bs";
import { isEmpty } from "../configs/function";
import faqs from "../jsonData/faqs.json";

const Faq = () => {
  const [open, setOpen] = useState("1");
  const [faqData, setFaqData] = useState([]);
  const [loader, setLoader] = useState(false);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  // For getting faq data
  const getData = async () => {
    setLoader(true);
    try {
      const data = await faqs;
      setFaqData(data?.faqs);
      setLoader(false);
    } catch (error) {
      console.log({ error });
      setLoader(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // For search FAQs
  const handleSearch = (e) => {
    setLoader(true);
    const searchTerm = e.target.value.toLowerCase();
    if (!searchTerm) {
      getData();
    } else {
      const filteredFaq = faqData.filter((item) => {
        return item.question.toLowerCase().includes(searchTerm);
      });
      setFaqData(filteredFaq);
    }
    setLoader(false);
  };

  return  (
    <div>
      <PageBAnner
        bannerImg={"https://picsum.photos/id/20/3670/2462"}
        title="FAQs"
      />
      {!loader ? (
        <Container className="text-start inner-space">
        <Col md={12}>
          <Row className="justify-content-end">
            <Col lg={4} md={6} xs={12} className="mb-5">
              <InputGroup>
                <Input
                  type="text"
                  bsSize="lg"
                  placeholder="Search..."
                  onChange={(e) => handleSearch(e)}
                />
                <InputGroupText>
                  <BsSearch />
                </InputGroupText>
              </InputGroup>
            </Col>
          </Row>
        </Col>
        <Row>
          <Col md={12} className="faq-page">
            {!isEmpty(faqData) ? (
              <Accordion open={open} toggle={toggle}>
                {faqData.map((item, i) => {
                  return (
                    <AccordionItem key={`faq-${i}`}>
                      <AccordionHeader targetId={`faq-${i}`}>
                        {item.question ? item.question : ""}
                      </AccordionHeader>
                      <AccordionBody accordionId={`faq-${i}`}>
                        {item.answer ? item.answer : ""}
                      </AccordionBody>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            ) : (
              <p className="text-center">There are no data to displaye!</p>
            )}
          </Col>
        </Row>
      </Container>
      ): (
        <div className="page-loader">
          <Spinner />
        </div>
      )}
    </div>
  ) 
};

export default Faq;
