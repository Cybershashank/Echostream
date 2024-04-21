import React from 'react'

import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
       <div className='ms-60 '> {children}</div>
  
    </>
  )
}

export default Layout