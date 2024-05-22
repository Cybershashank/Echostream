import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { IconArrowDown, IconArrowDownBar, IconArrowUp, IconArrowUpBar, IconMicrophoneOff, IconPlayerRecordFilled, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { FaMicrophone } from "react-icons/fa6";
import { AnimatePresence, motion } from 'framer-motion';

const InfoModal = ({ icon, title, description, showModal, setShowModal, centered = false, duration = 2000 }) => {

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [showModal, duration]);

  return <AnimatePresence>
    {showModal && (
      <motion.div
        className={` ${centered ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'top-10 left-10'} flex flex-col items-center gap-3 column fixed z-30 bg-slate-600 opacity-25 text-white text-center p-10 rounded-xl`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>{icon}</p>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p>{description}</p>
      </motion.div>
    )}
  </AnimatePresence>
}

const InstructionModal = ({ setShowModal }) => {
  return <AnimatePresence>
    <motion.div
      className={`top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed z-30 bg-white text-slate-800 p-10 rounded-xl`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* close button */}
      <button onClick={() => setShowModal(false)} className='absolute top-10 right-10 text-xl'>
        <IconX size={20} />
      </button>
      <h3 className='text-center text-3xl font-bold mb-4'>Basic Instructions</h3>
      <p className='text-lg mb-2'>{`1. Say "Open <page name> page" to open navigate to any page`}</p>
      <p className='text-lg mb-2'>{`2. Say "I want to create an account" to navigate to the signup page`}</p>
      <p className='text-lg mb-2'>{`3. Say "I want to login" to navigate to the login page`}</p>
      <p className='text-lg mb-2'>{`4. Say "Move down" to scroll down and vice-versa`}</p>
      <p className='text-lg mb-2'>{`5. Say "Move to bottom" to scroll to bottom of page and vice-versa`}</p>
    </motion.div>
  </AnimatePresence>
}

const pageDetails = [
  // main pages
  {
    pageName: 'home page',
    pagePath: 'http://localhost:3000/'
  },
  {
    pageName: 'signup',
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

const speech = new SpeechSynthesisUtterance();
const VoiceContext = createContext();

export const VoiceProvider = ({ children }) => {

  const [showModal, setShowModal] = useState(false);
  const [showInstruction, setShowInstruction] = useState(false);

  const [modalOptions, setModalOptions] = useState({
    icon: <FaMicrophone size={50} />,
    title: '',
    description: '',
    centered: true
  })

  const hasRun = useRef(false);
  const router = useRouter();

  const [voices, setVoices] = useState([]);

  const triggerModal = (title, description, centered = true, icon = <FaMicrophone size={50} />) => {
    setModalOptions({
      icon,
      title,
      description,
      centered
    });
    setShowModal(true);
  }

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
      command: ['create an account', 'sign up page open karo', 'sign up open karo', 'sign up page open', 'sign up page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('signup')
      }
    },
    {
      command: ['create an artist account', 'artist sign up open karo', 'artist sign up page open karo', 'artist sign up page open', 'artist sign up page', 'artist sign up'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artist-signup')
      }
    },
    {
      command: ['I want to login', 'open login page', 'login page open karo', 'login page open', 'login page'],
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
      command: ['open podcast play page', 'open play podcast', 'podcast play page open karo', 'play podcast page open karo', 'play podcast page open', 'play podcast page', 'play podcast'],
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
      command: ['open user profile', 'user profile page open karo', 'user profile open karo', 'user profile page open', 'user profile page', 'user profile', 'open user profile page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('user profile')
      }
    },
    {
      command: ['open playlist', 'playlist page open karo', 'playlist open karo', 'playlist page open', 'playlist page', 'playlist', 'open playlist page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('playlist')
      }
    },
    {
      command: ['edit user profile', 'edit profile page open karo', 'edit profile open karo', 'edit profile page open', 'edit profile page', 'edit profile', 'open edit profile page', 'open edit profile', 'user profile edit karo', 'user profile edit'],
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
      command: ['open create podcast', 'create podcast page open karo', 'create podcast open karo', 'create podcast page open', 'create podcast page', 'create podcast', 'open create podcast page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('create podcast')
      }
    },
    {
      command: ['open artist profile', 'artist profile page open karo', 'artist profile open karo', 'artist profile page open', 'artist profile page', 'artist profile', 'open artist profile page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('profile')
      }
    },
    {
      command: ['open publish podcast page', 'publish podcast page open karo', 'publish podcast open karo', 'publish podcast page open', 'publish podcast page', 'publish podcast', 'open publish podcast page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('publish podcast')
      }
    },
    {
      command: ['open series form', 'series form page open karo', 'series form open karo', 'series form page open', 'series form page', 'series form', 'open series form page'],
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
      command: ['open admin profile', 'admin profile page open karo', 'admin profile open karo', 'admin profile page open', 'admin profile page', 'admin profile', 'open admin profile page'],
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('adminProfile')
      }
    },




    {
      command: 'show me series',
      callback: (pageName) => {
        router.push('/browse_series');
        voiceResponse('Showing all series');
      }
    },
    {
      command: 'move page :direction',
      callback: (direction) => {
        console.log('Moving in direction: ', direction);
        if (direction === 'up') {
          window.scrollBy(0, -window.innerHeight);
        } else if (direction === 'down') {
          window.scrollBy(0, window.innerHeight);
        }
      }
    },
    {
      command: 'scroll :direction',
      callback: (direction) => {
        console.log('Scrolling in direction: ', direction);
        if (direction === 'up') {
          window.scrollBy(0, -window.innerHeight);
        } else if (direction === 'down') {
          window.scrollBy(0, window.innerHeight);
        }
      }
    }
  ]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    finalTranscript
  } = useSpeechRecognition({ commands, continuous: true });

  if (!browserSupportsSpeechRecognition) {
    console.log('Your browser does not support speech recognition software! Please try again with a different browser.');
  }

  const voicePageNavigator = (pageName) => {
    const page = pageDetails.find(page => pageName.toLowerCase().includes(page.pageName.toLowerCase()));
    if (page) {
      voiceResponse(`Navigating to ${pageName} page...`);
      triggerModal('Navigating...', `Navigating to ${pageName} page...`);
      router.push(page.pagePath);
    } else {
      console.log('Page not found!');
    }
  }

  const fillInputUsingVoice = (cb) => {
    if (finalTranscript.toLowerCase().startsWith('enter')) {
      cb();
    }
  }

  const performActionUsingVoice = (triggerCommand, command, cb) => {
    if (finalTranscript.toLowerCase().startsWith(triggerCommand) && finalTranscript.toLowerCase().includes(command)) {
      cb();
    }
  }

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      // SpeechRecognition.startListening({ continuous: true });
      // voiceResponse('Welcome to Vox Market. What are you shopping today?');
      // triggerModal('Voice Assistant', 'I am listening');
    }
  }, [])

  // open instruction modal after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setShowInstruction(true);
    }, 3000);
  }, [])


  useEffect(() => {
    if (finalTranscript === 'start listening') {
      voiceResponse('I am listening');
      SpeechRecognition.startListening({ continuous: true });
      triggerModal('Voice Assistant', 'I am listening');
    }
    if (finalTranscript.includes('stop listening')) {
      voiceResponse('Okay, I will stop listening now');
      SpeechRecognition.stopListening();
      triggerModal('Voice Assistant', 'Good Bye! Have a nice day!', false, <IconMicrophoneOff size={50} />);
    }
    if (finalTranscript.includes('hello echo')) {
      resetTranscript();
      voiceResponse('Hello! How can I help you today?');
      SpeechRecognition.startListening({ continuous: true });
    }
    if (finalTranscript.includes('goodbye echo')) {
      voiceResponse('Goodbye! Have a nice day!');
      SpeechRecognition.stopListening();
      triggerModal('Voice Assistant', 'Good bye! have a nice Day', false, <IconMicrophoneOff size={50} />);
    }
    if (finalTranscript.includes('scroll up')) {
      window.scrollBy(0, -window.innerHeight / 2);
      // trigger info modal here
      // setShowModal(true);
      triggerModal('Scrolling Up');
      resetTranscript();
      triggerModal('Scrolling Up', '', true, <IconArrowUp size={50} />);
    }

    if (finalTranscript.includes('scroll down')) {
      window.scrollBy(0, window.innerHeight / 2);
      // setShowModal(true);
      triggerModal('Scrolling Down');
      resetTranscript();
      triggerModal('Scrolling Down', '', true, <IconArrowDown size={50} />);
    }

    if (finalTranscript.includes('move to bottom')) {
      window.scrollTo(0, document.body.scrollHeight);
      resetTranscript();
      triggerModal('Moving to Bottom', '', true, <IconArrowDownBar size={50} />);
    }

    if (finalTranscript.includes('move to top')) {
      window.scrollTo(0, 0);
      resetTranscript();
      triggerModal('Moving to Top', '', true, <IconArrowUpBar size={50} />);
    }
    if (finalTranscript.includes('browse series') || finalTranscript.includes('view all series')) {
      resetTranscript();
      voiceResponse('Showing all series');
      router.push('/browse_series');
    }
  }, [finalTranscript])

  const voiceResponse = (text) => {
    speech.text = text;
    window.speechSynthesis.speak(speech);
  }

  const interpretVoiceCommand = () => {
    // const last = event.results.length - 1;
    // const command = event.results[last][0].transcript;
    console.log('Voice Command: ', transcript);
    if (transcript.includes('home')) {
      voicePageNavigator('home');
    } else if (transcript.includes('sign up')) {
      voicePageNavigator('signup');
    } else if (transcript.includes('login')) {
      voicePageNavigator('login');
    } else if (transcript.includes('contact')) {
      voicePageNavigator('contact');
    } else if (transcript.includes('reset password')) {
      voicePageNavigator('reset password');
    } else if (transcript.includes('hello')) {
      voiceResponse('Hello! How can I help you?');
    } else if (transcript.includes('goodbye')) {
      voiceResponse('Goodbye! Have a nice day!');
    } else {
      voiceResponse('Sorry, I did not understand that command. Please try again.');
    }
  }


  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      // console.log(e.code);
      if (e.code === 'Space' && e.ctrlKey) {
        SpeechRecognition.startListening();
      }
    });
  }, [])


  useEffect(() => {
    const synth = window.speechSynthesis;
    if ("onvoiceschanged" in synth) {
      setVoices(voices);
      console.log(voices);
      synth.onvoiceschanged = loadVoices;
    }
  }, [])

  const loadVoices = () => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    setVoices(voices);
    // console.log(voices);
    speech.voice = voices[12];
  }

  const checkExistenceInTranscript = (commandArray) => {
    const command = commandArray.find(command => finalTranscript.includes(command));
    return command;
  }

  return (
    <VoiceContext.Provider value={{
      transcript,
      resetTranscript,
      interpretVoiceCommand,
      fillInputUsingVoice,
      performActionUsingVoice,
      finalTranscript,
      voiceResponse,
      voices,
      triggerModal,
      checkExistenceInTranscript
    }}>

      <div className='bg-[#8C52FF] text-white text-center'>
        <button className='floating-mic ' onClick={() => {
          if (listening) {
            SpeechRecognition.stopListening();
          } else {
            SpeechRecognition.startListening();
          }
        }}>{listening ?
          (
            <span >
              <IconPlayerRecordFilled style={{ display: 'inline', color: 'white' }} color='#f00' /> listening... {transcript}
            </span>
          ) : (
            <span className='text-xl'><FaMicrophone /></span>
          )}</button>
        {/* <p>Microphone: </p> */}
        {/* <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}
      </div>

      {children}
      <InfoModal {...modalOptions} showModal={showModal} setShowModal={setShowModal} />
      {/* {
        showInstruction &&
        <div className='fixed top-0 left-0 w-full h-full bg-slate-900 opacity-90 z-20'>
          <div className='h-full backdrop-blur-md'>
            <InstructionModal setShowModal={setShowInstruction} />
          </div>
        </div>
      } */}
    </VoiceContext.Provider>
  )
}

const useVoiceContext = () => useContext(VoiceContext);

export default useVoiceContext;