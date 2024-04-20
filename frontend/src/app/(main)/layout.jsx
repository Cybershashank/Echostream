"use client"
import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import App from 'next/app';
import { AppProvider } from '@/app/Context/userContext';

const MainLayout = ({ children }) => {
    return (
        <>
     
            <Navbar />
            {children}
            <Footer />
           
        </>
    )
}

export default MainLayout;