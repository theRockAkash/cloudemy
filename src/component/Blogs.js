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
                      {item.thumb ? item.thumb : ""}
                      
                    </div>
                    <div className="blog-content">
                      <h4>{item.title ? item.title : ""}</h4>
                      {/* <p>{item.desc ? item.desc : ""}</p> */}
                      <ul>
                            {item?.desc?.length > 0 ? (
                              item.desc.map((d,k)=>{
                                return(
                                  <li key={`d_${k}`}>{d.list ? d.list : ''}</li>
                                )
                              })
                            ) : ''}
                          </ul>
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
