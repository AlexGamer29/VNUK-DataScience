import { FC, useState, useMemo } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import Logo from "@/public/assets/images/vnuk-official.png";
import Image from "next/image";

type MenuItem = {
  title: string;
  slug: string;
};

const AppHeader: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const menuData = useMemo<MenuItem[]>(
    () => [
      { title: "Blog", slug: "/" },
      { title: "About", slug: "/" },
      { title: "Links", slug: "/" },
      { title: "Products", slug: "/" },
    ],
    []
  );

  const handleOpenMobileMenu = () => {
    setIsOpen(!isOpen);
    document.getElementById("nav-icon2")?.classList.toggle("open");
  };

  return (
    <div>
      <nav className="shadow w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center w-48">
                <Image
                  src={Logo}
                  // check if the image is loaded before rendering
                  onClick={() => router.reload()}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {menuData.map((item, index) => (
                    <Link
                      onClick={() => router.push("/")}
                      href={item.slug}
                      activeClass="Home"
                      to="Home"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer text-vnuk-blue px-3 py-2 text-md leading-12 transition duration-700 border-b-2 border-transparent hover:border-vnuk-red hover:text-vnuk-red myFirstFont"
                      key={`desktop-menu-item-${index}`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              {/* <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-vnuk-blue inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-vnuk-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-vnuk-blue focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
              </button> */}
              <div id="nav-icon2" onClick={handleOpenMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
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
                {menuData.map((item, index) => (
                  <Link
                    onClick={() => router.push("/")}
                    href="/"
                    activeClass="home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-vnuk-blue text-black hover:text-white block px-3 py-2 rounded-md text-lg myFirstFont"
                    key={`mobile-menu-item-${index}`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default AppHeader;
