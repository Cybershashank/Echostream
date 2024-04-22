import React from 'react'
import AdminNavbar from './navbar'
import Sidebar from './sidebar/page'

const Layout = ({ children }) => {
    return (
        <>
            <div className='ms-72'>  <AdminNavbar /></div>
            <Sidebar />
<<<<<<< HEAD
            <div className='ms-72'> {children}</div>
=======
            <div className='ms-60'> {children}</div>
>>>>>>> 60cde88a71bf13f19de0ed1d70ab4f1decc96a75
        </>
    )
}

export default Layout