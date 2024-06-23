import React, { useEffect, useState } from "react";
import dummyData from "../configs/dummyData";
import { Col, Row } from "reactstrap";
const Blogs = () => {
  //** states
  const [blogData, setBlogData] = useState();
  useEffect(() => {
    let data = dummyData.blog ? dummyData.blog : [];
    setBlogData(data);
  }, []);
  return (
    <>
      <Row className="item-row-gap">
        {blogData && blogData.length > 0
          ? blogData.map((item, i) => {
              return (
                <Col lg={6} key={`vission_${i}`}>
                  <div className="blog-item">
                    <div className="blog-thumb">
                      <img src={item.thumb ? item.thumb : "https://kinemaster.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-magic.cce573c6.png&w=256&q=75"} alt="" />
                    </div>
                    <div className="blog-content">
                      <h4>{item.title ? item.title : ""}</h4>
                      <p>{item.desc ? item.desc : ""}</p>
                    </div>
                  </div>
                </Col>
              );
            })
          : null}
      </Row>
    </>
  );
};

export default Blogs;
