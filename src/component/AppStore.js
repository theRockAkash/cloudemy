import React from 'react'
import { Link } from "react-router-dom";
const AppStore = () => {
  return (
    <div className='app-store-section d-flex flex-wrap align-items-center justify-content-center'>
      <Link to="/" className='app-store-img' onClick={(e)=> e.preventDefault()}>
        <img src="https://kinemaster.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappstore-transparant.430a5db1.png&w=640&q=75" alt="App Store" />
      </Link>
      <Link to="/" className='app-store-img' onClick={(e)=> e.preventDefault()}>
        <img src="https://kinemaster.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogleplay-transparant.0ffddba8.png&w=640&q=75" alt="Google Play" />
      </Link>
    </div>
  )
}

export default AppStore