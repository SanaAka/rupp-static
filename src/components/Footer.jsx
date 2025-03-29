import React from "react";
import img1 from '../image/you.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTelegramPlane,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black opacity-[95%] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col md:flex-row md:justify-between  gap-8">
          {/* FIND US Section */}
          <div className="footer-section  flex flex-col">
            <h2 className="text-2xl mb-5 font-sf font-bold">FIND US</h2>
            <p className="text-sm mb-2 font-sf flex">
              <span className="mr-2 w-4 mt-1 flex-shrink-0">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <span className="flex-1">
                Royal University of Phnom Penh (Campus 1), Russian Federation Blvd
                (110), Phnom Penh, Cambodia.
              </span>
            </p>
            <p className="text-sm mb-2 font-sf">
              <span className="mr-2  w-4">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>{" "}
              123 456 7890
            </p>
            <p className="text-sm mb-2 font-sf">
              <span className="mr-[1.60rem]"></span> 123 456 7890
            </p>
            <p className="text-sm mb-2 font-sf">
              <span className="mr-[1.60rem]"></span> 123 456 7890
            </p>
            <p className="text-sm mb-5 font-sf">
              <span className="mr-2  w-4">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>{" "}
              secretary@rupp.edu.kh, iroffice@rupp.edu.kh
            </p>

            {/* FOLLOW US Section */}
            <div className="follow-us flex flex-wrap items-center gap-5">
              <h1 className="font-bold text-3xl mt-1 font-sf">FOLLOW US</h1>
              <a href="#" className="text-4xl rounded-full text-blue-400">
                <FontAwesomeIcon
                  icon={faTelegramPlane}
                  className="rounded-full bg-white"
                />
              </a>
              <a href="#" className="text-4xl text-blue-600">
                <FontAwesomeIcon 
                  icon={faFacebook} 
                  className="rounded-full bg-white"
                />
              </a>
              <a href="#" className="text-4xl text-red-700">
                <img 
                  src={img1} 
                  alt="you" 
                  className="w-11 my-1 h-9 rounded-xl"
                />
              </a>
            </div>
          </div>

          {/* SUBSCRIBE Section */}
          <div className="footer-section subscribe flex flex-col items-center">
            <h2 className="text-2xl mb-5 font-sf font-bold text-center">
              SUBSCRIBE TO OUR LATEST NEWS!
            </h2>
            <p className="text-sm mb-4 font-sf text-center">
              We'll provide news and events to your mail directly.
            </p>
            <div className="sub-icon mb-5">
              <FontAwesomeIcon icon={faEnvelope} className="text-5xl" />
            </div>
            <form action="#" className="flex flex-col items-center w-full max-w-md">
              <input
                type="email"
                placeholder="EMAIL ADDRESS*"
                required
                className="px-4 py-2 mb-4 rounded-lg border-2 border-gray-300 w-full md:w-80"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-10 py-2 rounded-lg hover:bg-red-700 transition font-bold font-sf"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-10 pt-5 border-t border-gray-600">
          <p className="text-sm">COPYRIGHT © 2024 CHHAYHEAK KONG</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;