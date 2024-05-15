
'use client';
import React, { useEffect } from 'react';
import { VoiceProvider } from '../Context/voiceContext';
import { AppProvider } from '../Context/userContext';
import { PlayerProvider } from '@/Context/PlayerContext';
import { ArtistProvider } from '@/Context/ArtistContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Template = ({ children }) => {

    return (
        <>

            <VoiceProvider >
                <AppProvider>
                    <ArtistProvider>
                        <PlayerProvider>
<GoogleOAuthProvider clientId="1052902178904-88iukpsjling8avba8980jf1oo6ejuht.apps.googleusercontent.com">
{children}
    </GoogleOAuthProvider>;
                          
                        </PlayerProvider>
                    </ArtistProvider>
                </AppProvider>
            </VoiceProvider>
        </>
    )
}

export default Template;