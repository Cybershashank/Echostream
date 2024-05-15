"use client"
import useArtistContext from '@/Context/ArtistContext';
import useAppContext from '@/Context/userContext';
import Link from 'next/link';


const Avatar = ({ user, logout }) => {
    return (
        <div className="hs-dropdown hs-dropdown-example relative inline-flex">
            <img className="cursor-pointer inline-block size-8 rounded-full"
                src={`${process.env.NEXT_PUBLIC_API_URL}/${user.avatar}`} alt={user.name} />
            <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
                aria-labelledby="hs-dropdown-example"
            >
                <Link
                    className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                   
                    href="/user/user_profile"
                >
                    Profile
                </Link>
                <button
                    className="bg-red-600 w-full text-white py-1"
                    onClick={logout}
                    type='button'
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

const Navbar = () => {

    const { loggedIn, logout } = useAppContext();
    const { artistLoggedIn, artistLogout } = useArtistContext();

    // console.log(loggedIn);

    const showLoggedin = () => {
        if (loggedIn) {
            return <Avatar user={loggedIn} logout={logout} />
        } else if (artistLoggedIn) {
            return <Avatar user={artistLoggedIn} logout={artistLogout} />
        }
        else {
            return <div className=" ">
                <div className="container d-flex flex-wrap justify-content-end">

                    <div className="text-end">
                        <Link href="/login" className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded btn-dark" style={{ fontFamily: "initial" }}>
                            Login
                        </Link>
                        <Link href="/signup" className="bg-blue-600 mx-2 hover:bg-blue-700 text-white px-3 py-1 rounded " style={{ fontFamily: "initial" }}>
                            SignUp
                        </Link>
                        <Link href="/artist-login" className="bg-blue-600 mx-2 hover:bg-blue-700 text-white px-3 py-1 rounded " style={{ fontFamily: "initial" }}>
                            Artist
                        </Link>
                    </div>
                </div>
            </div>

        }
    }

    return (
        <>

            <nav className="bg-white border-gray-200 shadow dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                    <Link
                        href="http://localhost:3000/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/2048px-Podcasts_%28iOS%29.svg.png"
                            className="h-8"
                            alt="Podcast Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Echostream
                        </span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end ">

                            {showLoggedin()}

                        </div>


                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-cta"
                    >
                        

                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    href="http://localhost:3000/"
                                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/browse_series"
                                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Series
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/feedback"
                                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Feedback
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>



                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">




                        <button
                            data-collapse-toggle="navbar-user"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-user"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar;