import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      className={`sticky flex justify-center items-center top-0 z-50 h-16 min-h-full ${
        !top && "bg-reba shadow-lg"
      }`}
    >
      <div className="container flex justify-between items-center ">
        <div>
          <Link to="/" className="">
            <h1 className="text-3xl">home</h1>
          </Link>
        </div>
        <div>
          <Link to="/signin" className="">
            Signin
          </Link>
          <Link to="/signup" className="btn bg-blue-500 w-[120px]">
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
