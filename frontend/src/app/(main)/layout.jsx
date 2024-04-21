"use client"
import React from 'react'
import Navbar from './navbar';
import App from 'next/app';
import { AppProvider } from '@/Context/userContext';
import PodcastPlayer from './PodcastPlayer';

const MainLayout = ({ children }) => {
    return (
        <>

            <Navbar />
            {children}
            {/* <PodcastPlayer /> */}

        </>
    )
}

export default MainLayout;