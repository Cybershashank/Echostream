"use client"
import React, { createContext, useContext, useEffect, useRef } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { IconPlayerRecordFilled } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { CiMicrophoneOn } from "react-icons/ci";


const pageDetails = [

  {
    pageName: 'sign up',
    pagePath: '/signup'
  },
  {
    pageName: 'artistsignup',
    pagePath: '/artist-signup'
  },
  {
    pageName: 'artistlogin',
    pagePath: '/artist-login'
  },
  {
    pageName: 'artistdashboard',
    pagePath: '/artist/artistdashboard'
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
    pageName: 'feedback',
    pagePath: '/feedback'
  },
  {
    pageName: 'terms&conditions',
    pagePath: '/terms&conditions'
  },
  {
    pageName: 'privacyPolicy',
    pagePath: '/privacyPolicy'
  },
  {
    pageName: 'reset password',
    pagePath: '/resetPassword'
  },
  {
    pageName: 'artist detail',
    pagePath: '/artist_detail'
  },
  {
    pageName: 'browse podcast',
    pagePath: '/browse_podcast'
  },
  {
    pageName: 'browse artist',
    pagePath: '/browse_artist'
  },
  {
    pageName: 'play podcast',
    pagePath: '/play_podcast'
  },
  {
    pageName: 'podcast series',
    pagePath: '/podcast_series'
  },
  {
    pageName: 'user profile',
    pagePath: '/user/user_profile'
  },
  {
    pageName: 'playlist',
    pagePath: '/user/playlist'
  },
  {
    pageName: 'edit profile',
    pagePath: '/user/editprofile'
  },
  {
    pageName: 'create podcast',
    pagePath: '/artist/create-podcast'
  },
  {
    pageName: 'manage podcast',
    pagePath: '/artist/manage_podcast'
  },
  {
    pageName: 'profile',
    pagePath: '/artist/profile'
  },
  {
    pageName: 'publish podcast',
    pagePath: '/artist/publish_podcast'
  },
  {
    pageName: 'series form',
    pagePath: '/artist/series-form'
  },
  {
    pageName: 'dashboard',
    pagePath: '/admin/dashboard'
  },
  {
    pageName: 'manage feedback',
    pagePath: '/admin/manage_feedback'
  },
  {
    pageName: 'manageartist',
    pagePath: '/admin/manageartist'
  },
  {
    pageName: 'manageuser',
    pagePath: '/admin/manageuser'
  },
  {
    pageName: 'adminProfile',
    pagePath: '/admin/adminProfile'
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
      command: 'create an account',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('signup')
      }
    },
    {
      command: 'signup page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('signup')
      }
    },
    {
      command: 'create an artist account',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artist-signup')
      }
    },
    {
      command: 'artist sign up open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artistSignup')
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
      command: 'login page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('login')
      }
    },
    {
      command: 'artist login open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artistLogin')
      }
    },
    {
      command: 'open about page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('about')
      }
    },
    {
      command: 'about page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('about')
      }
    },
    {
      command: 'open contact page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('contact')
      }
    },
    {
      command: 'contact page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('contact')
      }
    },
    {
      command: 'open feedback page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('feedback')
      }
    },
    {
      command: 'feedback page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('feedback')
      }
    },
    {
      command: 'feedback page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('feedback')
      }
    },
    {
      command: 'open terms and conditions page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('terms&conditions')
      }
    },
    {
      command: 'open privacy policy page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('privacyPolicy')
      }
    },
    {
      command: 'reset password',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('reset password')
      }
    },
    {
      command: 'Home Page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('browse podcast')
      }
    },
    {
      command: 'open front page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('browse artist')
      }
    },
    {
      command: 'open browse artist page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('browse artist')
      }
    },
    {
      command: 'browse artist page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('browse artist')
      }
    },
    {
      command: 'open artist detail page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artist detail')
      }
    },
    {
      command: 'artist detail page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artist detail')
      }
    },
    {
      command: 'podcast play page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('play podcast')
      }
    },
    {
      command: 'open podcast play page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('play podcast')
      }
    },
    {
      command: 'open podcast series',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('podcast series')
      }
    },
    {
      command: 'podcast series page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('podcast series')
      }
    },
    {
      command: 'open user profile',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('user profile')
      }
    },
    {
      command: 'user profile open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('user profile')
      }
    },
    {
      command: 'open playlist',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('playlist')
      }
    },
    {
      command: 'playlist open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('playlist')
      }
    },
    {
      command: 'edit user profile',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('edit profile')
      }
    },
    {
      command: 'user profile edit karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('edit profile')
      }
    },
    {
      command: 'open artist dashboard',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artistdashboard')
      }
    },
    {
      command: 'artist dashboard open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artistdashboard')
      }
    },
    {
      command: 'open create podcast',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('create podcast')
      }
    },
    {
      command: 'create podcast page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('create podcast')
      }
    },
    {
      command: 'open artist profile',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('profile')
      }
    },
    {
      command: 'artist profile page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('profile')
      }
    },
    {
      command: 'open publish podcast page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('publish podcast')
      }
    },
    {
      command: 'publish page open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('publish podcast')
      }
    },
    {
      command: 'open series form',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('series form')
      }
    },
    {
      command: 'series form open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('series form')
      }
    },
    {
      command: 'open admin dashboard',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('dashboard')
      }
    },
    {
      command: 'admin dashboard open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('dashboard')
      }
    },
    {
      command: 'manage feedback',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('manage feedback')
      }
    },
    {
      command: 'manage feedback open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('manage feedback')
      }
    },
    {
      command: 'open admin profile',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('adminProfile')
      }
    },
    {
      command: 'admin profile open karo',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('adminProfile')
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
    browserSupportsSpeechRecognition,
    finalTranscript
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

  const fillInputUsingVoice = (cb) => {
    if(finalTranscript.toLowerCase().startsWith('enter')){
      cb();
    }
  }

  const performActionUsingVoice = (triggerCommand, command, cb) => {
    if(finalTranscript.toLowerCase().startsWith(triggerCommand) && finalTranscript.toLowerCase().includes(command) ){
      cb();
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
    <VoiceContext.Provider value={{fillInputUsingVoice, performActionUsingVoice, finalTranscript}}>
      <div className="text-center bg-gray-700 h-7">
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
          ) : (
            <span> <CiMicrophoneOn className='text-2xl text-white' /></span>
          )
          }   </button>
        {/* <p>Microphone: </p> */}
        {/* <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}
        <span className='text-white'>{transcript}</span>
      </div>
      {children}
    </VoiceContext.Provider>
  )
}

const useVoiceContext = () => useContext(VoiceContext);

export default useVoiceContext;         