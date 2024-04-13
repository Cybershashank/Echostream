import React from 'react'
import ArtistNavbar from './navbar'

const Layout = ({children}) => {
  return (
    <div>
      <ArtistNavbar/>
      {children}</div>
  )
}

export default Layout