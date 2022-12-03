import React from 'react';
import { FaGithub, FaReact } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';

const Footer = () => (
  <footer>
    <h3 className="text-center text-xs">Sources&apos; links</h3>
    <div className="icons">
      <a
        href="https://github.com/Gedewon/CarBooking-Frontend"
        aria-label="Frontend Repository"
        alt="Frontend Repository"
        className="text-cyan-500 hover:bg-cyan-400 hover:text-white"
      >
        <FaReact />
      </a>
      <a
        href="https://github.com/Gedewon/CarBooking-Backend"
        aria-label="Backend Repository"
        alt="Backend Repository"
        className="text-red-500 hover:bg-red-400 hover:text-white"
      >
        <SiRubyonrails />
      </a>
    </div>
    <h3 className="text-center text-xs">Authors&apos; links</h3>
    <div className="credits">
      <a
        href="https://github.com/gedewon"
        aria-label="Gedewon Hailegebrale"
        alt="Gedewon Hailegebrale"
        className="text-blue-500 hover:bg-blue-400 hover:text-white"
      >
        <FaGithub />
      </a>
      <a
        href="https://github.com/Hadi111jafari"
        aria-label="Abdul Hadi Jafari"
        alt="Abdul Hadi Jafari"
        className="text-green-500 hover:bg-green-400 hover:text-white"
      >
        <FaGithub />
      </a>
      <a
        href="https://github.com/Bushido-brown"
        aria-label="Tochukwu Orizu"
        alt="Tochukwu Orizu"
        className="text-red-500 hover:bg-red-400 hover:text-white"
      >
        <FaGithub />
      </a>
    </div>

  </footer>
);

export default Footer;
