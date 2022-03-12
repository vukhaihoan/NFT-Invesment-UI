import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
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
      className={`container mx-auto px-20 sticky top-0 z-50 h-16 max-w-full bg-white ${
        !top && "shadow-lg"
      }`}
    >
      <div className="flex justify-between items-center min-h-full">
        <div className="">
          <Logo className="" />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Link to="/home">Home</Link>
          <Link to="/feature">Feature</Link>
          <Link to="/princing">Princing</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <Link to="/home" className="px-12 py-5 bg-yellow-500">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
