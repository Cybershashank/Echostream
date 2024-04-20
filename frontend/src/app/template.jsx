
'use client';
import React, { useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import { CartProvider } from './context/CartContext';
import { VoiceProvider } from './context/voiceContext';



const Template = ({ children }) => {

    return (
        <>
       
      <VoiceProvider >
                <AppProvider>
                    <CartProvider>
                        {children }
                    </CartProvider>
                </AppProvider>
                </VoiceProvider>
        </>
    )
}

export default Template;