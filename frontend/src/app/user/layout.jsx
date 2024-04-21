import React from 'react'
import USerNavbar from './navbar'

const Layout = ({children}) => {
  return (
    <div>
      <USerNavbar/>
      {children}</div>
  )
}

export default Layout