import React from 'react'
import ArtistNavbar from './navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <>
            <div className='ms-72'>  <ArtistNavbar /></div>

      <Sidebar />
       <div className='ms-60 '> {children}</div>
  
    </>
  )
}

export default Layout