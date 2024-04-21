
'use client';
import React, { useEffect } from 'react';
import { AppProvider } from './Context/userContext';

import { VoiceProvider } from './context/voiceContext';



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