import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="mt-40 ">
        <div className="icons flex gap-10 justify-center">
          <Link to="https://github.com/VernSG" target="_blank">
            <FaGithub className="text-4xl text-white" />
          </Link>
          <Link to="https://www.instagram.com/yusufff.rteex/" target="_blank">
            <FaInstagram className="text-4xl text-white" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/muhammad-yusuf-saputra/"
            target="_blank"
          >
            <FaLinkedin className="text-4xl text-white" />
          </Link>
          <Link to="" target="_blank">
            <FaXTwitter className="text-4xl text-white" />
          </Link>
        </div>
        <div className="footer-copyright py-10">
          <h1 className=" font-poppins text-center font-medium  text-slate-300 text-sm ">
            Created with ❤️ using React.js
          </h1>
          <h1 className=" font-poppins mt-2 text-center font-medium  text-slate-300 text-sm ">
            Copyright 2023 - Muhammad Yusuf Saputra
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
