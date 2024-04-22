
'use client';
import React, { useEffect } from 'react';
import { VoiceProvider } from './Context/voiceContext';
import { AppProvider } from './Context/userContext';

const Template = ({ children }) => {

    return (
        <>

            <VoiceProvider >
                <AppProvider>

                    {children}

                </AppProvider>
            </VoiceProvider>
        </>
    )
}

export default Template;