"use client"
import React, { createContext, useContext, useEffect, useRef } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { IconPlayerRecordFilled } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { CiMicrophoneOn } from "react-icons/ci";


const pageDetails = [
  {
    pageName: 'home',
    pagePath: '/'
  },
  {
    pageName: 'signup',
    pagePath: '/signup'
  },
  {
    pageName: 'login',
    pagePath: '/login'
  },
  {
    pageName: 'contact',
    pagePath: '/contact'
  },
  {
    pageName: 'about',
    pagePath: '/about'
  },
  {
    pageName: 'addProduct',
    pagePath: '/seller/addProduct'
  },
  {
    pageName: 'reset password',
    pagePath: '/reset-password'
  },
  {
    pageName: 'cart',
    pagePath: '/CartPage'
  },
  {
    pageName: 'reset password',
    pagePath: '/reset-password'
  },
  {
    pageName: 'create podcast',
    pagePath: '/artist/create-podcast'
  },

]

const VoiceContext = createContext();

export const VoiceProvider = ({ children }) => {

  const hasRun = useRef(false);
  const router = useRouter();

  const commands = [
    {
      command: 'Open :pageName page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator(pageName)
      }
    },
    {
      command: 'I want to create an account',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('signup')
      }
    },
    {
      command: 'I want to login',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('login')
      }
    },
    {
      command: 'I want to know about you',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('about')
      }
    },
    {
      command: 'I want to contact you',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('contact')
      }
    },
    {
      command: 'create podcast',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('create podcast')
      }
    },
 
  
    {
      command: 'Beijing',
      callback: (command, spokenPhrase, similarityRatio) => setMessage(`${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`),
      // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2
    },
  
  ]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands, continuous: true });

  if (!browserSupportsSpeechRecognition) {
    alert('Your browser does not support speech recognition software! Please try again with a different browser.');
  }

  const voicePageNavigator = (pageName) => {
    const page = pageDetails.find(page => pageName.toLowerCase().includes(page.pageName.toLowerCase()));
    if (page) {
      voiceResponse(`Navigating to ${pageName} page...`);
      router.push(page.pagePath);
    } else {
      alert('Page not found!');
    }
  }

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      // SpeechRecognition.startListening();
    }
  }, [])

  const voiceResponse = (text) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
  }

  // const interpretVoiceCommand = () => {
  //   // const last = event.results.length - 1;
  //   // const command = event.results[last][0].transcript;
  //   console.log('Voice Command: ', transcript);
  //   if (transcript.includes('home')) {
  //     voicePageNavigator('home');
  //   } else if (transcript.includes('sign up')) {
  //     voicePageNavigator('signup');
  //   } else if (transcript.includes('login')) {
  //     voicePageNavigator('login');
  //   } else if (transcript.includes('contact')) {
  //     voicePageNavigator('contact');
  //   } else if (transcript.includes('reset password')) {
  //     voicePageNavigator('reset password');
  //   } else if (transcript.includes('hello')) {
  //     voiceResponse('Hello! How can I help you?');
  //   } else if (transcript.includes('goodbye')) {
  //     voiceResponse('Goodbye! Have a nice day!');
  //   } else {
  //     voiceResponse('Sorry, I did not understand that command. Please try again.');
  //   }
  // }

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      // console.log(e.code);
      if (e.code === 'Space') {
        SpeechRecognition.startListening();
      }
    });
  }, [])


  return (
    <VoiceContext.Provider value={{}}>
    <div className="text-center  h-7 " style={{backgroundColor:"rgb(2,48,71"}}>
      <button className='floating-mic' onClick={() => {
        if (listening) {
          SpeechRecognition.stopListening();
        } else {
          SpeechRecognition.startListening();
        }
      }}>{listening ?
        (
          <span className='text-white'>
            <IconPlayerRecordFilled style={{ display: 'inline' }} color='#f00' /> listening...
          </span>
        ):(
            <span> <CiMicrophoneOn className='text-2xl text-white'/></span>
        )
        }   </button>
      {/* <p>Microphone: </p> */}
      {/* <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}
      <span className='text-white'>{transcript}</span>
      {children}
      </div>
    </VoiceContext.Provider>
  )
}

const useVoiceContext = () => useContext(VoiceContext);

export default useVoiceContext;             