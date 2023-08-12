import "./topnav.css";

import { Link } from "react-scroll";

const TopNavigation = () => {
  return (
    <div className="font-mono z-50 fixed top-0 left-0 right-0 w-full h-20 border-2 border-black bg-yellow-300 flex justify-center gap-10 lg:gap-20">
      <Link
        to="mywork"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="topHoverEffect duration-300 cursor-pointer py-5 hover:text-white duration-300 text-lg md:text-xl lg:text-2xl"
      >
        My Works
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="topHoverEffect duration-300 cursor-pointer py-5 hover:text-white duration-300 text-lg md:text-xl lg:text-2xl"
      >
        About Me
      </Link>
      <Link
        to="footer"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="topHoverEffect duration-300  cursor-pointer py-5 hover:text-white duration-300 text-lg md:text-xl lg:text-2xl"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default TopNavigation;
