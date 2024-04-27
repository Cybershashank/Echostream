"use client"
import React, { createContext, useContext, useEffect, useRef } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { IconPlayerRecordFilled } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { CiMicrophoneOn } from "react-icons/ci";


const pageDetails = [

// main pages
  {
    pageName: 'home page',
    pagePath: 'http://localhost:3000/'
  },
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




  // user pages
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





  // artist pages
  {
    pageName: 'create podcast',
    pagePath: '/artist/create-podcast'
  },
  {
    pageName: 'manage podcast',
    pagePath: '/artist/manage_podcast'
  },
  {
    pageName: 'artistdashboard',
    pagePath: '/artist/dashboard'
  },
  {
    pageName: 'profile',
    pagePath: '/artist/profile'
  },
  {
    pageName: 'profile',
    pagePath: '/artist/editartistprofile'
  },
  {
    pageName: 'publish podcast',
    pagePath: '/artist/publish_podcast'
  },
  {
    pageName: 'series form',
    pagePath: '/artist/series-form'
  },





  // admin pages
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

    // main page
    {
      command: ['home page open karo', 'home page open', 'open home page', 'home page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('home page')
      }
    },
    {
      command: ['create an account', 'signup page open karo','signup open karo', 'signup page open', 'signup page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('signup')
      }
    },
    {
      command: ['create an artist account', 'artist sign up open karo','artist sign up page open karo', 'artist sign up page open', 'artist sign up page', 'artist sign up'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artist-signup')
      }
    },
    {
      command: ['I want to login','open login page', 'login page open karo', 'login page open', 'login page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('login')
      }
    },
    {
      command: ['artist login open karo', 'artist login page open karo', 'open artist login page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artistLogin')
      }
    },
    {
      command: ['open about page', 'about page open karo', 'about page open', 'about page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('about')
      }
    },
    {
      command: ['open contact page', 'contact page open karo', 'contact page open', 'contact page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('contact')
      }
    },
    {
      command: ['open feedback page', 'feedback page open karo', 'feedback page open', 'feedback page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('feedback')
      }
    },
    {
      command: ['open terms and conditions page', 'terms and conditions page open karo', 'terms and conditions page open', 'terms and conditions page', 'terms and conditions'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('terms&conditions')
      }
    },
    {
      command: ['open privacy policy page', 'privacy policy page open karo', 'privacy policy page open', 'privacy policy page', 'privacy policy'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('privacyPolicy')
      }
    },
    {
      command: ['reset password', 'forgot password', 'password reset', 'reset password page open karo', 'reset password page open', 'reset password page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('reset password')
      }
    },
    {
      command: ['browse podcast', 'open browse podcast page', 'browse podcast page open karo', 'search podcast', 'search podcast page', 'open search podcast page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('browse podcast')
      }
    },
    {
      command: ['browse artist', 'open browse artist page', 'browse artist page open karo', 'search artist', 'search artist page', 'open search artist page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('browse artist')
      }
    },
    {
      command: ['open artist detail page', 'artist detail page open karo', 'artist detail page open', 'artist detail page', 'artist detail'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artist detail')
      }
    },
    {
      command: ['open podcast play page','open play podcast','podcast play page open karo', 'play podcast page open karo', 'play podcast page open', 'play podcast page', 'play podcast'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('play podcast')
      }
    },
    {
      command: ['open podcast series', 'open podcast series page', 'podcast series page open', 'podcast series page open karo', 'podcast series page', 'podcast series'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('podcast series')
      }
    },







    // user pages
    {
      command: ['open user profile', 'user profile page open karo', 'user profile open karo', 'user profile page open', 'user profile page', 'user profile','open user profile page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('user profile')
      }
    },
    {
      command: ['open playlist', 'playlist page open karo', 'playlist open karo', 'playlist page open', 'playlist page', 'playlist','open playlist page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('playlist')
      }
    },
    {
      command: ['edit user profile', 'edit profile page open karo', 'edit profile open karo', 'edit profile page open', 'edit profile page', 'edit profile','open edit profile page','open edit profile','user profile edit karo','user profile edit'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('edit profile')
      }
    },







  // artist pages
    {
      command: ['open artist dashboard', 'artist dashboard page open karo', 'artist dashboard open karo', 'artist dashboard page open', 'artist dashboard page', 'artist dashboard'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artistdashboard')
      }
    },
    {
      command: ['open create podcast', 'create podcast page open karo', 'create podcast open karo', 'create podcast page open', 'create podcast page', 'create podcast','open create podcast page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('create podcast')
      }
    },
    {
      command: ['open artist profile', 'artist profile page open karo', 'artist profile open karo', 'artist profile page open', 'artist profile page', 'artist profile','open artist profile page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('profile')
      }
    },
    {
      command: ['open publish podcast page', 'publish podcast page open karo', 'publish podcast open karo', 'publish podcast page open', 'publish podcast page', 'publish podcast','open publish podcast page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('publish podcast')
      }
    },
    {
      command: ['open series form', 'series form page open karo', 'series form open karo', 'series form page open', 'series form page', 'series form','open series form page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('series form')
      }
    },







    // admin pages
    {
      command: ['open admin dashboard', 'admin dashboard page open karo', 'admin dashboard open karo', 'admin dashboard page open', 'admin dashboard page', 'admin dashboard'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('dashboard')
      }
    },
    {
      command: ['manage user', 'manage user page open karo', 'manage user open karo', 'manage user page open', 'manage user page', 'manage user'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('manage user')
      }
    },
    {
      command: ['manage artist', 'manage artist page open karo', 'manage artist open karo', 'manage artist page open', 'manage artist page', 'manage artist'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('manage artist')
      }
    },
    {
      command: ['manage feedback', 'manage feedback page open karo', 'manage feedback open karo', 'manage feedback page open', 'manage feedback page', 'manage feedback'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('manage feedback')
      }
    },
    {
      command: ['open admin profile', 'admin profile page open karo', 'admin profile open karo', 'admin profile page open', 'admin profile page', 'admin profile','open admin profile page'],
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