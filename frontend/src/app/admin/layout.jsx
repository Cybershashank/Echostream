import React from 'react'
import AdminNavbar from './navbar'
import Sidebar from './sidebar/page'

const Layout = ({ children }) => {
    return (
        <>
            <AdminNavbar />
            <Sidebar />
           <div className='ms-60'> {children}</div>
        </>
    )
}

export default Layout