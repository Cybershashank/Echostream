import React from 'react'
import ArtistNavbar from './navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar>
        {children}
      </Sidebar>
    </>
  )
}

export default Layout