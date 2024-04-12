import React, { ReactNode } from 'react'

const WrapperContent = ({children, className = ""} : {children : ReactNode, className? : string}) => {
  return (
    <div className={`${className} max-w-screen-xl px-4 mx-auto`}>
      {children}
    </div>
  )
}

export default WrapperContent
