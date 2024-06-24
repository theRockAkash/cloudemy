import React from 'react'
import { Link } from "react-router-dom";
import googlePlay from "../assest/images/googleplay-transparant.svg"
const AppStore = () => {
  return (
    <div className='app-store-section d-flex flex-wrap align-items-center justify-content-center'>
      {/* <Link to="/" className='app-store-img' onClick={(e)=> e.preventDefault()}>
        <img src="https://kinemaster.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappstore-transparant.430a5db1.png&w=640&q=75" alt="App Store" />
      </Link> */}
      <Link to="https://play.google.com/store/apps/details?id=com.cloudemy.studio" className='app-store-img' onClick={(e)=> e.preventDefault()}>
        <img src={googlePlay} alt="Google Play" />
      </Link>
    </div>
  )
}

export default AppStore