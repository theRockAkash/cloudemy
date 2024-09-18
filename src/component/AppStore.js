import React from 'react'
import { Link } from "react-router-dom";
import googlePlay from "../assest/images/googleplay-transparant.svg"
const AppStore = () => {
  return (
    <div className='app-store-section d-flex flex-wrap align-items-center justify-content-center'>
      {/* <Link to="/" className='app-store-img' onClick={(e)=> e.preventDefault()}>
        <img src="https://kinemaster.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappstore-transparant.430a5db1.png&w=640&q=75" alt="App Store" />
      </Link> */}
      <Link to="https://play.google.com/store/apps/details?id=com.cloudemy.studio" target="_blank" className='app-store-img' >
        <img src={googlePlay} alt="Download Cloudemy Studio on Google Play today and start creating engaging lectures!" />
      </Link>
    </div>
  )
}

export default AppStore