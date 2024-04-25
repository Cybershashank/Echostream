
'use client';
import React, { useEffect } from 'react';
import { VoiceProvider } from '../Context/voiceContext';
import { AppProvider } from '../Context/userContext';
import { PlayerProvider } from '@/Context/PlayerContext';
import { ArtistProvider } from '@/Context/ArtistContext';

const Template = ({ children }) => {

    return (
        <>

            <VoiceProvider >
                <AppProvider>
                    <ArtistProvider>
                        <PlayerProvider>
                            {children}
                        </PlayerProvider>
                    </ArtistProvider>
                </AppProvider>
            </VoiceProvider>
        </>
    )
}

export default Template;