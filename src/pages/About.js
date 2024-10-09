import React from 'react'
import UpcomingPage from '../component/UpcomingPage'
import PageBAnner from '../component/PageBanner'

const About = () => {
  return (
    <>
      <PageBAnner bannerImg={"https://picsum.photos/id/20/3670/2462"} title={"About US"}/>
      <UpcomingPage title="About Us"/>
      </>
  )
}

export default About