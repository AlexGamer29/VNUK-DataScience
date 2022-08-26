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
      { title: "HOME", slug: "/" },
      { title: "CODING", slug: "/" },
      { title: "ABOUT", slug: "/about" },
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
                  className="cursor-pointer"
                  src={Logo}
                  // check if the image is loaded before rendering
                  onClick={() => router.push("/")}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {menuData.map((item, index) => (
                    <Link
                      onClick={() => router.push(item.slug)}
                      href={item.slug}
                      activeClass="Home"
                      to="Home"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer text-vnuk-blue px-3 py-2 text-md leading-12 transition duration-700 border-b-2 border-transparent hover:border-vnuk-red hover:text-vnuk-red montserrat-semibold"
                      key={`desktop-menu-item-${index}`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
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
