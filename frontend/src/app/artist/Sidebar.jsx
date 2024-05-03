import React from 'react'
import ArtistNavbar from './navbar'
import Link from 'next/link'
import { IconBroadcast, IconPlaylist } from '@tabler/icons-react'

const Sidebar = ({ children }) => {
    return (
        <>


            <aside
                id="sidebar"
                className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
                aria-label="Sidebar"
            >
                <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex-1 px-3 bg-white divide-y space-y-1">
                            <ul className="space-y-2 pb-2">
                                <li>
                                    <form action="#" method="GET" className="lg:hidden">
                                        <label htmlFor="mobile-search" className="sr-only">
                                            Search
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg
                                                    className="w-5 h-5 text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                name="email"
                                                id="mobile-search"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                                                placeholder="Search"
                                            />
                                        </div>
                                    </form>
                                </li>
                                <li>
                                    <Link
                                        href="/artist/profile"
                                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                        </svg>
                                        <span className="ml-3">profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/artist/dashboard"
                                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                                            <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                                            <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                                            <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                                        </svg>
                                        <span className="ml-3">Dashboard</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/artist/manage_podcast"
                                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-apple-podcast">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M18.364 18.364a9 9 0 1 0 -12.728 0" />
                                            <path d="M11.766 22h.468a2 2 0 0 0 1.985 -1.752l.5 -4a2 2 0 0 0 -1.985 -2.248h-1.468a2 2 0 0 0 -1.985 2.248l.5 4a2 2 0 0 0 1.985 1.752z" />
                                            <path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        </svg>
                                        <span className="ml-3">Manage Podcast</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/artist/manage_series"
                                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-playlist">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M17 17v-13h4" />
                                            <path d="M13 5h-10" />
                                            <path d="M3 9l10 0" />
                                            <path d="M9 13h-6" />
                                        </svg>

                                        <span className="ml-3">Manage Series</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/artist/create-podcast"
                                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                            <path d="M9 12h6" />
                                            <path d="M12 9v6" />
                                        </svg>

                                        <span className="ml-3">Create Podcast</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/artist/publish_podcast"
                                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-audio-tape">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                            <path d="M3 17l4 -3h10l4 3" />
                                            <circle cx="7.5" cy="9.5" r=".5" fill="currentColor" />
                                            <circle cx="16.5" cy="9.5" r=".5" fill="currentColor" />
                                        </svg>

                                        <span className="ml-3">Publish Podcast</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/artist/series-form"
                                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                            <path d="M9 12h6" />
                                            <path d="M12 9v6" />
                                        </svg>

                                        <span className="ml-3">Add Series</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="space-y-2 pt-2">
                                <Link
                                    href="/feedback"
                                    target="_blank"
                                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-notification">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                        <path d="M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    </svg>
                                    <span className="ml-3">Feedback</span>
                                </Link>
                                <Link
                                    href="/contact"
                                    target="_blank"
                                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path d="M12 17l0 .01" />
                                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                    </svg>
                                    <span className="ml-3">Help</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                {children}
            </div>
        </>

    )
}

export default Sidebar