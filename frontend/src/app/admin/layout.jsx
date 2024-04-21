import React from 'react'
import AdminNavbar from './navbar'
import Sidebar from './sidebar/page'

const Layout = ({ children }) => {
    return (
        <>
              <div className='ms-72'>  <AdminNavbar /></div>   
     <Sidebar  />
           <div className='ms-60'> {children}</div>
        </>
    )
}

export default Layout