import React from 'react'
import PageBAnner from '../component/PageBanner'
import { Container } from 'reactstrap'
import { BiEnvelope, BiMap } from 'react-icons/bi'

const Contact = () => {
  return (
        <>
            <PageBAnner bannerImg={"https://picsum.photos/id/20/3670/2462"} title="Contact Us"/>
            <Container className="text-start inner-space">
              <div className="contact-info">
                <p>We’d love to hear from you! Whether you have <b>questions, feedback, or collaboration inquiries</b>, we're here to help. </p>
                <p style={{marginTop:"25px"}}>
                <div className='circle-icon'><BiMap /></div>
                <span>Lucknow, 226021, Uttar Pradesh, India</span>
                </p>
                <a href='mailto:dev.curiousminds@gmail.com' style={{margin:"25px 0"}}>
                  <div className='circle-icon'><BiEnvelope /></div>
                  <span>dev.curiousminds@gmail.com</span>
                </a>
                <p>Cloudemy Studio is constantly evolving to provide the best experience for educators. If you have <b>suggestions, feature requests, or need assistance</b>, feel free to reach out.  </p>
                <p>We're looking forward to <b>connecting with educators, investors, and innovators</b> who share our vision for transforming digital learning.</p>
                <p>Thank you for being part of the Cloudemy Studio journey! 🚀</p>
              </div>
            </Container>
        </>
  )
}

export default Contact