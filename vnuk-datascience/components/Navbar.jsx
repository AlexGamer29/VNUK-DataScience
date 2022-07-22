import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { useRouter } from 'next/router'
import Image from "next/image";
import Logo from '../public/vnuk-official.png'

function Navbar() {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="shadow fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center w-48">
                <Image
                  src={Logo}
                  // check if the image is loaded before rendering
                  onClick={() => router.reload('/')}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    onClick={() => router.push('/')}
                    href="/"
                    activeClass="Home"
                    to="Home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-vnuk-blue font-semibold px-3 py-2 text-md leading-12 transition duration-700 border-b-2 border-transparent hover:border-vnuk-red hover:text-vnuk-red"
                  >
                    HOME
                  </Link>
                  <Link
                    onClick={() => router.push('/about')}
                    href="/about"
                    activeClass="About"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-vnuk-blue font-semibold px-3 py-2 text-md leading-12 transition duration-700 border-b-2 border-transparent hover:border-vnuk-red hover:text-vnuk-red"
                  >
                    ABOUT
                  </Link>
                  <Link
                    onClick={() => router.push('/coding')}
                    href="/coding"
                    activeClass="Coding"
                    to="coding"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-vnuk-blue font-semibold px-3 py-2 text-md leading-12 transition duration-700 border-b-2 border-transparent hover:border-vnuk-red hover:text-vnuk-red"
                  >
                    CODING
                  </Link>

                  <Link
                    onClick={() => router.push('/mini-story')}
                    href="/mini-story"
                    activeClass="Mini-story"
                    to="mini-story"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-vnuk-blue font-semibold px-3 py-2 text-md leading-12 transition duration-700 border-b-2 border-transparent hover:border-vnuk-red hover:text-vnuk-red"
                  >
                    MINI STORY
                  </Link>

                  <Link
                    onClick={() => router.push('/contact')}
                    href="/contact"
                    activeClass="Contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-vnuk-blue font-semibold px-3 py-2 text-md leading-12 transition duration-700 border-b-2 border-transparent hover:border-vnuk-red hover:text-vnuk-red"
                  >
                    CONTACT
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-vnuk-blue inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-vnuk-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-vnuk-blue focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  onClick={() => router.push('/')}
                  href="/"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-vnuk-blue text-black hover:text-white block px-3 py-2 rounded-md text-lg font-semibold"
                >
                  Home
                </Link>
                <Link
                  onClick={() => router.push('/about')}
                  href="/about"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-vnuk-blue text-black hover:text-white block px-3 py-2 rounded-md text-lg font-semibold"
                >
                  About
                </Link>

                <Link
                  onClick={() => router.push('/coding')}
                  href="/coding"
                  activeClass="Coding"
                  to="coding"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-vnuk-blue text-black hover:text-white block px-3 py-2 rounded-md text-lg font-semibold"
                >
                  Coding
                </Link>
                <Link
                  onClick={() => router.push('/mini-story')}
                  href="/mini-story"
                  activeClass="Mini-story"
                  to="mini-story"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-vnuk-blue text-black hover:text-white block px-3 py-2 rounded-md text-lg font-semibold"
                >
                  Mini story
                </Link>

                <Link
                  onClick={() => router.push('/contact')}
                  href="/contact"
                  activeClass="Contact"
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-vnuk-blue text-black hover:text-white block px-3 py-2 rounded-md text-lg font-semibold"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;