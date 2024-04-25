import { createContext, useContext, useState } from "react";
import { useRouter } from 'next/navigation';


const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {

    const [currentArtist, setCurrentArtist] = useState(
        JSON.parse(sessionStorage.getItem('artist'))
    );

    const [artistLoggedIn, setArtistLoggedIn] = useState(currentArtist !== null);
    const router = useRouter();

    const artistLogout = () => {
        sessionStorage.removeItem('artist');
        setArtistLoggedIn(false);
        setCurrentArtist(null);
        router.push('/artist-login');
    }

    return (
        <ArtistContext.Provider value={{ artistLoggedIn, setArtistLoggedIn, artistLogout, currentArtist, setCurrentArtist }} >
            {children}
        </ArtistContext.Provider>
    )
}

const useArtistContext = () => useContext(ArtistContext);
export default useArtistContext;