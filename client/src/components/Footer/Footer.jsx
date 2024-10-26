import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
const Footer = () => {
  const year = new Date();

  return (
    <footer className="w-full bg-blue-900 text-white flex flex-col justify-center items-center">
      <div className="flex flex-col py-4 ">
        <div className="text-center mb-2">Follow me</div>
        <div className="flex gap-x-2">
          <a
            href="https://github.com/jabedalimollah"
            target="_blank"
            className="p-2 rounded-full border border-white hover:bg-white hover:text-blue-900"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/jabedalimollah7/"
            target="_blank"
            className="p-2 rounded-full border border-white hover:bg-white hover:text-blue-900"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://x.com/JabedAliMollah7"
            target="_blank"
            className="p-2 rounded-full border border-white hover:bg-white hover:text-blue-900"
          >
            <BsTwitterX />
          </a>
          <a
            href="https://www.linkedin.com/in/jabedalimollah/"
            target="_blank"
            className="p-2 rounded-full border border-white hover:bg-white hover:text-blue-900"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://jabedalimollah.netlify.app/"
            target="_blank"
            className="p-2 rounded-full border border-white hover:bg-white hover:text-blue-900"
          >
            <TbWorld />
          </a>
        </div>
      </div>
      {/* <hr className="bg-white h-[2%] w-full my-3" /> */}
      <div className="w-full bg-blue-950 flex justify-center py-4 border-t border-t-gray-200">
        {/* copyright©️ 2024 */}
        <p>© {year.getFullYear()} Chatit. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
