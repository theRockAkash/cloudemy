import React from 'react'

const Counter = ({count}) => {
  return (
    <div>
        <h2 className='counter-num mb-0'>{count ? count : 100}+</h2>
        <p className='counter-title'>Download!</p>
    </div>
  )
}

export default Counter