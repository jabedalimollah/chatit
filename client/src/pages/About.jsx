import React from 'react';
import { WrapperComponent } from '../layout/WrapperComponent';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const About = () => {
  const darkMode = useSelector((state) => state.darkTheme.value);
  return (
    <>
      <div
        className={`w-full ${darkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-700'}`}
      >
        <div
          className={`w-full pt-16 md:pt-28 flex flex-col justify-center items-center gap-y-3`}
        >
          <div
            className={`w-[80%] bg-whites flex flex-col md:flex-row items-center justify-around rounded-lg `}
          >
            <div
              className={`w-[100%] md:w-[55%] lg:w-[40%] flex flex-col gap-y-4`}
            >
              <h2
                className={`text-4xl text-blue-500 font-bold uppercase shadow-base-200 hover:text-blue-700`}
              >
                About Us
              </h2>
              <p className={`text-gray-800s text-sm md:text-base`}>
                Welcome to Chatit – the ultimate platform for seamless, secure
                communication. Whether you're connecting with friends,
                collaborating at work, managing a community, or chatting with
                AI, Chatit offers a user-friendly experience to keep
                conversations flowing effortlessly.
              </p>
              <NavLink
                to={'/'}
                className={`w-[50%] md:w-[40%]  py-2 bg-blue-500 rounded shadow-md shadow-slate-700 hover:bg-blue-700 text-white text-center flex justify-center`}
              >
                Back to Chatit
              </NavLink>
            </div>
            <div
              className={`w-[100%] mt-10 md:mt-0 md:w-[40%] lg:w-[40%] shadow-xl  ${darkMode ? 'bg-slate-950 shadow-slate-950 hover:shadow-none' : 'bg-blue-100 hover:shadow-none'} rounded-full cursor-pointer`}
            >
              <img src="./images/about1.png" alt="image" className="w-full" />
            </div>
          </div>
          <div
            className={`w-[80%] py-10 bg-whites flex flex-col-reverse md:flex-col lg:flex-row items-center justify-around rounded-lg `}
          >
            <div
              className={`w-[100%] md:w-[50%] lg:w-[30%] mt-3 md:mt-0 shadow-2xl shadow-slate-950 hover:shadow-none rounded-full cursor-pointer`}
            >
              <img src="./images/about2.png" alt="image" className="w-full" />
            </div>
            <div className={`md:w-[100%] lg:w-[60%] flex flex-col gap-y-4`}>
              <div>
                <h3
                  className={`text-2xl text-blue-500 font-bold uppercase shadow-base-200 hover:text-blue-700 border-b-2 py-2 my-2 border-blue-500`}
                >
                  Our Mission
                </h3>
                <p className={``}>
                  Our mission at Chatit is to provide a platform that fosters
                  effortless and secure conversations, bridging the gap between
                  personal and professional communication. We prioritize
                  privacy, speed, and simplicity to ensure users have the best
                  chat experience possible.
                </p>
              </div>

              <div>
                <h3
                  className={`text-2xl text-blue-500 font-bold uppercase shadow-base-200 hover:text-blue-700 border-b-2 py-2 my-2 border-blue-500`}
                >
                  Why Choose Chatit?
                </h3>
                <ul className="list-disc list-inside flex flex-col gap-y-2 text-base md:text-base">
                  <li>
                    <span className={`font-semibold`}>Instant Messaging: </span>
                    <span>
                      Fast and reliable real-time messaging across all devices.
                    </span>
                  </li>
                  <li>
                    <span className={`font-semibold`}>AI-Powered Chat: </span>
                    <span>
                      Enjoy smart, responsive conversations with AI assistance
                      for tasks and information.
                    </span>
                  </li>
                  <li>
                    <span className={`font-semibold`}>Security First: </span>
                    <span>
                      We prioritize your privacy and security with secure login
                      options.
                    </span>
                  </li>
                  <li>
                    <span className={`font-semibold`}>
                      Cross-Platform Compatibility:{' '}
                    </span>
                    <span>
                      Access Chatit from any device, wherever you are.
                    </span>
                  </li>
                  <li>
                    <span className={`font-semibold`}>Powered by MERN: </span>
                    <span>
                      Leveraging MongoDB, Express, React, and Node for top-notch
                      performance.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`w-[80%] ${darkMode ? 'bg-black' : 'bg-white'} flex flex-col md:flex-col-reverse lg:flex-row items-center justify-around rounded-lg `}
          >
            <div
              className={`md:w-[100%] lg:w-[60%] flex flex-col gap-y-2 px-5 md:px-10 lg:px-0 py-5 md:py-10`}
            >
              <span className={`text-lg md:text-2xl`}>Meet the Developer</span>
              <a
                href="https://jabedalimollah.netlify.app/"
                target="_blank"
                className={`text-2xl md:text-4xl text-blue-500 font-bold uppercase shadow-base-200 hover:text-blue-700`}
              >
                Jabed Ali Mollah
              </a>
              <span className={`tex-base md:text-base`}>
                MERN Stack Developer | Web Developer | Creator of Chatit
              </span>
              <p className={`w-full flex flex-col gap-y-2 py-2 md:py-4`}>
                <span className={``}>
                  <a
                    href="https://jabedalimollah.netlify.app/"
                    target="_blank"
                    className={`text-blue-500`}
                  >
                    Jabed Ali Mollah{' '}
                  </a>
                  is a skilled web developer with a deep passion for building
                  modern web applications. He is the developer behind Chatit, an
                  innovative chat platform designed for real-time communication
                  with a focus on simplicity and security.
                </span>
                {/* <hr /> */}
                {/* <br /> */}
                <span className={`hidden md:inline-block`}>
                  With expertise in the MERN stack (MongoDB, Express, React, and
                  Node.js), Jabed specializes in creating dynamic, scalable, and
                  high-performance web applications. His knowledge of both
                  frontend and backend technologies allows him to deliver
                  seamless user experiences and efficient solutions.
                </span>
              </p>
            </div>

            <div
              className={`w-[80%] md:w-[50%] lg:w-[25%] mb-5 md:mb-0  md:mt-10 lg:mt-0 lg:my-3  shadow shadow-slate-500 hover:shadow bg-blue-100 rounded-full cursor-pointer`}
            >
              <img
                src="./images/Jabed_Ali.jpg"
                alt="image"
                className="w-full h-full rounded-full border-2 border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapperComponent()(About);
