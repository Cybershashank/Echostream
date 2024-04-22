
'use client';
import React, { useEffect } from 'react';
import { VoiceProvider } from '../Context/voiceContext';
import { AppProvider } from '../Context/userContext';
import { PlayerProvider } from '@/Context/PlayerContext';

const Template = ({ children }) => {

    return (
        <>

            <VoiceProvider >
                <AppProvider>

                    {children}

                    <PlayerProvider>
                        {children}
                    </PlayerProvider>
                </AppProvider>
            </VoiceProvider>
        </>
    )
}

export default Template;