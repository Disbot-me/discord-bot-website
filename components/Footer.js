import React from 'react';

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557a9.92 9.92 0 01-2.828.775 4.916 4.916 0 002.165-2.724 9.866 9.866 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.964 13.964 0 011.671 3.149a4.92 4.92 0 001.523 6.573 4.902 4.902 0 01-2.228-.616v.062a4.918 4.918 0 003.946 4.828 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.588 3.413A9.868 9.868 0 010 19.539a13.942 13.942 0 007.548 2.212c9.058 0 14.015-7.513 14.015-14.015 0-.213-.004-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
  </svg>
);

const Footer = () => {
  return (
    <div className="mt-8">
      {/* Top border */}
      <div className="border-t-2 border-footer-150"></div>

      <footer className="py-4 bg-footer-100 flex flex-col items-center justify-center">
        <div className="container flex flex-col md:flex-row items-center px-4 space-y-4 md:space-y-0">

          {/* Social media buttons on the left, stacked vertically */}
          <div className="flex flex-col space-y-2 md:mr-8">
            <a href="https://twitter.com/dlistgg" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full w-40 justify-center space-x-2">
                <TwitterIcon />
                <span className="font-bold text-sm">Follow us on twitter!</span>
              </button>
            </a>
            <a href="https://discord.com/invite/XbuJ6VH" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-full w-40 justify-center space-x-2">
                <DiscordIcon />
                <span className="font-bold text-sm">Join Our Discord!</span>
              </button>
            </a>
          </div>

          {/* Centered Links with one in the middle, one left, and one right */}
          <div className="flex flex-col md:flex-row items-center justify-center text-center space-y-4 md:space-y-0 md:space-x-10 ml-[300px]">
            {/* Get Involved section on the left */}
            <div>
              <h3 className="text-lg font-semibold text-white">Get Involved</h3>
              <ul className="space-y-1 mt-1">
                <li><a href="https://github.com/discordlist-gg/beta-issues/issues" className="hover:text-white transition">Report a bug</a></li>
                <li><a href="https://github.com/discordlist-gg/beta-issues/issues/new" className="hover:text-white transition">Suggestions</a></li>
              </ul>
            </div>

            {/* Links section in the center */}
            <div>
              <h3 className="text-lg font-semibold text-white">Links</h3>
              <ul className="space-y-1 mt-1">
                <li><a href="/help" className="hover:text-white transition">Help</a></li>
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              </ul>
            </div>

            {/* Policies section on the right */}
            <div>
              <h3 className="text-lg font-semibold text-white">Policies</h3>
              <ul className="space-y-1 mt-1">
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="/security" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
