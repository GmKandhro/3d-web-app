import React from 'react'

const Wapper = ({children,className}) => {
  return (
    <div className={`w-full max-w-[1280px] p-5 md:px-10 mx-auto ${className || ''}`}>{children}</div>
  )
}

export default Wapper