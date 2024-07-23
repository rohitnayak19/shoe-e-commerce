import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="margin-auto flex justify-between items-center">
        <div className="flex flex-col">
          <NavLink to={'/'} className="text-white text-2xl mb-2">Sole<span className='text-gray-400'>heaven...</span></NavLink>
          <p className="text-gray-400 text-sm">&copy; 2024 Sole Heaven. All rights reserved.</p>
        </div>
        <ul className="flex gap-5 text-lg">
          <li>
            <NavLink to={'/'} className="text-gray-400 hover:text-white">Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className="text-gray-400 hover:text-white">About</NavLink>
          </li>
          <li>
            <NavLink to={'/CartPage'} className="text-gray-400 hover:text-white">Cart</NavLink>
          </li>
          <li>
            <NavLink to={'/privacy'} className="text-gray-400 hover:text-white">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to={'/terms'} className="text-gray-400 hover:text-white">Terms of Service</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} className="text-gray-400 hover:text-white">Contact Us</NavLink>
          </li>
        </ul>
        <div className="flex gap-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FacebookIcon />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
