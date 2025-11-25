import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [hamBurger, setHamBurger] = useState(true);
  const pages = [
    { page: "Home", href: "#home" },
    { page: "About", href: "#about" },
    { page: "Projects", href: "#projects" },
    { page: "Services", href: "#services" },
  ];
  return (
    <div className="w-full px-2 py-6 lg:p-6 relative">
      <div className="w-[80%] lg:max-w-7xl mx-auto flex flex-1 items-center justify-between">
        {/* Name */}
        <div>
          <span className="bg-linear-to-r from-[#1717be] to-[#b910b9] text-transparent bg-clip-text text-4xl lg:text-5xl font-medium">
            Srijan
          </span>
        </div>
        {/* navigation for small screen */}
        <div className="lg:hidden ">
          {hamBurger && (
            <GiHamburgerMenu
              className="size-7 text-white"
              onClick={(e) => setHamBurger(false)}
            />
          )}
        </div>
        {!hamBurger && (
          <div className="absolute top-0 right-0 w-1/2 h-screen bg-gray-900 px-4 py-2 flex flex-col  gap-5">
            <div className="w-full mt-2">
              <IoMdClose
                className="size-7 text-white"
                onClick={(e) => setHamBurger(true)}
              />
            </div>
            <div className="flex flex-col items-start justify-start text-white gap-3">
              {pages.map((view, index) => (
                <a
                  className="text-white text-md font-medium cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#1717be] hover:to-[#b910b9] transition-all duration-500"
                  href={view.href}
                  key={index}
                >
                  {view.page}
                </a>
              ))}
              <a
                className="mt-2 px-5 py-3 bg-linear-to-r  from-[#1717be] to-[#b910b9] rounded-full text-white text-md font-medium"
                href="#contact"
                onClick={(e) => setHamBurger(true)}
              >
                Connect
              </a>
            </div>
          </div>
        )}
        {/* navigation */}
        <nav className="hidden mt-2 lg:flex justify-center gap-7 bg-[#ffffff1b] px-5 py-2 rounded-full backdrop-blur">
          {pages.map((view, index) => (
            <a
              className="text-white text-md font-medium cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#1717be] hover:to-[#b910b9] transition-all duration-500"
              href={view.href}
              key={index}
            >
              {view.page}
            </a>
          ))}
        </nav>
        {/* connect */}
        <div className="hidden lg:flex items-center justify-center">
          <a
            className="mt-2 px-5 py-3 bg-linear-to-r  from-[#1717be] to-[#b910b9] rounded-full text-white text-md font-medium"
            href="#contact"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
