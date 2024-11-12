import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

export default function Navbar() {
   const { data: session } = useSession();
   const [openDropdown, setOpenDropdown] = useState(null); // "add", "profile"
   const addButtonRef = useRef(null);
   const profileButtonRef = useRef(null);

   const toggleDropdown = (dropdown) => {
      setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
   };

   // Close dropdown when clicked outside
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (
            (addButtonRef.current && !addButtonRef.current.contains(event.target)) &&
            (profileButtonRef.current && !profileButtonRef.current.contains(event.target))
         ) {
            setOpenDropdown(null);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
   }, []);

   return (
      <nav className=" p-4 flex justify-between items-center">
         {/* Logo Section */}
         <div className="flex items-center space-x-4 relative">
            <div className="flex items-center">
               {/* Logo */}
               <div className="p-1 rounded-full overflow-hidden">
                  <Image src="/logo.png" alt="Disbot Logo" width={40} height={40} />
               </div>
            </div>

            {/* Navigation Links */}
            <Link href="/" legacyBehavior>
               <a className="text-white text-xl font-semibold hover:text-gray-300">Home</a>
            </Link>
            <Link href="/bots" legacyBehavior>
               <a className="text-white text-xl font-semibold hover:text-gray-300">Bots</a>
            </Link>
         </div>

         {/* Right Section - Add Button and Avatar/Profile Menu */}
         <div className="flex items-center space-x-4">
            {/* Add Button Dropdown */}
            {session && (
               <div className="relative">
                  <button
                     ref={addButtonRef}
                     onClick={() => toggleDropdown("add")}
                     className="font-bold text-white bg-[#202b43] w-10 h-10 rounded-full focus:outline-none flex justify-center items-center"
                  >
                     {/* SVG icon for Add button */}
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path 
                           d="M12 2C11.4477 2 11 2.4477 11 3V11H3C2.4477 11 2 11.4477 2 12C2 12.5523 2.4477 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3C13 2.4477 12.5523 2 12 2Z" 
                           stroke="#ffffff" 
                           strokeWidth="1" // Adjust thickness here
                        />
                     </svg>
                  </button>
                  <AnimatePresence>
                     {openDropdown === "add" && (
                        <motion.div
                           initial={{ opacity: 0, y: -10 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -10 }}
                           className="absolute right-0 mt-2 w-72 bg-[#252b3a] rounded-lg shadow-lg p-4"
                        >
                           <Link href="/bot/add" legacyBehavior>
                              <a className="flex items-center space-x-3 p-3 hover:bg-[#2e3546] rounded-lg">
                                 {/* Bot SVG Icon (White) */}
                                 <div className="bg-gray-600 p-2 rounded-full">
                                    <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                       <path d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A.999.999 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.938a1.004 1.004 0 0 0-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z"></path>
                                    </svg>
                                 </div>
                                 <div>
                                    <span className="text-white font-semibold text-lg">Discord Bot</span>
                                    <p className="text-gray-400 text-sm">Add an existing Discord bot.</p>
                                 </div>
                              </a>
                           </Link>
                           <Link href="/server/add" legacyBehavior>
                              <a className="flex items-center space-x-3 p-3 hover:bg-[#2e3546] rounded-lg">
                                 {/* Server SVG Icon (White) */}
                                 <div className="bg-gray-600 p-2 rounded-full">
                                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                       <path d="M8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9Z" fill="#ffffff"></path>
                                       <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6 10C4.80291 10 3.76957 10.7012 3.28827 11.7152C2.48151 10.6934 2 9.40294 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.40294 13.5185 10.6934 12.7117 11.7152C12.2304 10.7012 11.1971 10 10 10H6Z" fill="#ffffff"></path>
                                    </svg>
                                 </div>
                                 <div>
                                    <span className="text-white font-semibold text-lg">Discord Server</span>
                                    <p className="text-gray-400 text-sm">Add a community Discord server.</p>
                                 </div>
                              </a>
                           </Link>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            )}

            {/* User Avatar with Profile Dropdown */}
            {session ? (
               <div className="relative">
                  <button
                     ref={profileButtonRef}
                     onClick={() => toggleDropdown("profile")}
                     className="w-10 h-10 rounded-full overflow-hidden focus:outline-none"
                  >
                     <img src={session.user.image} alt="User Avatar" className="w-full h-full" />
                  </button>
                  <AnimatePresence>
                     {openDropdown === "profile" && (
                        <motion.div
                           initial={{ opacity: 0, y: -10 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -10 }}
                           className="absolute right-0 mt-2 w-72 bg-[#252b3a] rounded-lg shadow-lg p-4"
                        >
                           <Link href="/profile" legacyBehavior>
                              <a className="flex items-center space-x-3 p-2 hover:bg-[#2e3546] rounded-lg">
                                 <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#ffffff"></path>
                                    <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#ffffff"></path>
                                 </svg>
                                 <span className="text-white">My Profile</span>
                              </a>
                           </Link>
                           <button
                              onClick={() => signOut()}
                              className="flex items-center space-x-3 p-2 w-full text-left hover:bg-[#2e3546] rounded-lg"
                           >
                              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                 <path d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#ffffff"></path>
                              </svg>
                              <span className="text-white">Sign Out</span>
                           </button>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            ) : (
               <button
                  onClick={() => signIn('discord')}
                  className="relative flex items-center text-white font-bold bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                     <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                  </svg>
                  Login with Discord
               </button>
            )}
         </div>
      </nav>
   );
}
