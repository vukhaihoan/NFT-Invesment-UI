import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`container mx-auto px-20 sticky top-0 z-50 h-[70px] max-w-full bg-white text-center ${
        !top && "shadow-lg"
      }`}
    >
      <div className="flex justify-between items-center min-h-full font-bold align-baseline">
        <div className="flex items-center">
          {/* <Link to="/" className="flex my-auto mx-10"> */}
          <Link to="/" className="text-4xl mr-7">
            {/* <HomeIcon className="h-10 w-10" /> */}
            Genie
          </Link>
          <div className="flex gap-4">
            <Link to="/signin" className="">
              About
            </Link>

            <Link to="/signin" className="">
              Contact
            </Link>

            <Link to="/signin" className="">
              User
            </Link>

            <Link to="/signin" className="">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 w-52">
          <div className="py-2">
            <Link to="/signin">Signin</Link>
          </div>
          <div className="bg-blue-500 text-white py-2 rounded">
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
