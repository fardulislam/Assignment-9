import React from "react";
import logo from "../assets/green_plants_icon-removebg-preview.png";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div className="bg-[#0F3D2E] ">
      <footer className="footer sm:footer-horizontal text-white  text-base-content p-10">
        <nav className="flex items-center ">
          <img className="w-15 " src={logo} alt="" />
          <p className="font-bold text-xl">GreenNest</p>
         
        </nav>
         <nav>
          <h6 className="font-bold text-lg">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
         </nav>
        <nav>
          <h6 className="font-bold text-lg">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg ">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a >
              <Link to={'https://www.facebook.com/'}><FaFacebook className="w-6 h-6" /></Link>
            </a>
            <a>
             <Link to={'https://www.youtube.com/'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg></Link>
            </a>
            <a>
             <Link to={'https://www.instagram.com/'}>
             <FaInstagram className="w-6 h-6" /></Link>
            </a>
            <a href="">
              <Link to={'https://www.pinterest.com/'}>
            <FaPinterest className='w-6 h-6' />
            </Link>
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center  text-base-content  p-4 ">
        <aside >
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
