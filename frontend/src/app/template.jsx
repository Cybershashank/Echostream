
'use client';
import React, { useEffect } from 'react';
import { AppProvider } from './Context/userContext';
<<<<<<< HEAD

import { VoiceProvider } from './context/voiceContext';
=======
import { VoiceProvider } from './Context/voiceContext';
>>>>>>> c14511e2608b4460b29f319c90bff595c02141c6



const Template = ({ children }) => {

    return (
        <>
       
      <VoiceProvider >
                <AppProvider>
<<<<<<< HEAD
               
                        {children }
            
=======
                 
                        {children }
                  
>>>>>>> c14511e2608b4460b29f319c90bff595c02141c6
                </AppProvider>
                </VoiceProvider>
        </>
    )
}

export default Template;