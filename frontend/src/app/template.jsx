
'use client';
import React, { useEffect } from 'react';
import { AppProvider } from './Context/userContext';
import { VoiceProvider } from './Context/voiceContext';



const Template = ({ children }) => {

    return (
        <>
       
      <VoiceProvider >
                <AppProvider>
                 
                        {children }
                  
                </AppProvider>
                </VoiceProvider>
        </>
    )
}

export default Template;