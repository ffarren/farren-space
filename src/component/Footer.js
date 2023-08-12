import { FaTwitter, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import "./footer.css";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
      <div
        id="footer"
        className="bg-blue-950 flex py-24 justify-center items-center gap-10 lg:gap-40 border-black border-2 border-t-0"
      >
        <Zoom>
          <a
            href="https://twitter.com/fidelisfarren"
            rel="noreferrer"
            target="_blank"
            className="button text-white shadow-lg cursor-pointer duration-300 bg-red-500 p-5 rounded-3xl"
          >
            <FaTwitter size={50} />
          </a>
          <a
            href="https://www.instagram.com/ffarrenp"
            rel="noreferrer"
            target="_blank"
            className="button text-white shadow-lg cursor-pointer duration-300 bg-red-500 p-5 rounded-3xl"
          >
            <FaInstagram size={50} />
          </a>
          <a
            href="mailto:fidelisfarren.work@gmail.com"
            className="button text-white shadow-lg cursor-pointer duration-300 bg-red-500 p-5 rounded-3xl"
          >
            <BiLogoGmail size={50} />
          </a>
        </Zoom>
      </div>
  );
};

export default Footer;
