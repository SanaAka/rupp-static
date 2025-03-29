import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import imag from "../image/profile.jpg";
import contactImage from "../image/BgFc.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

// Import pages
// import Bio from "../pages/Bio";
// import CS from "../pages/CS";
// import Chemistry from "../pages/Chemistry";
// import Environmental from "../pages/Environmental";
// import Mathematics from "../pages/Mathematics";
// import Physics from "../pages/Physics";

const Program = () => {
  const contactInfo = {
    name: "John, Ph.D.",
    title: "Dean of Science Faculty",
    location: "Campus A, 2nd Floor, Room 214 A",
    email: "abc@yourdomain.kh",
    phone: "+855-1234567890",
  };

  // Corrected department array
  const departments = [
    { name: "BIOLOGY", path: "/science-bio" },
    { name: "CHEMISTRY", path: "/science-chemistry" },
    { name: "COMPUTER SCIENCE", path: "/computer-science" },
    { name: "ENVIRONMENTAL SCIENCE", path: "/environmental-science" },
    { name: "MATHEMATICS", path: "/mathematics" },
    { name: "PHYSICS", path: "/physics" },
  ];

  return (
    <div className="bg-black text-white font-sf">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 pl-8 flex items-center">
          <h1 className="text-6xl font-bold text-white ml-12 relative after:content-[''] after:block after:bg-red-600 after:w-[15rem] after:h-1 after:ml-14 after:mt-2">
            FACULTY OF
            <br />
            SCIENCE
          </h1>
        </div>
      </header>

      {/* Departments Section */}
      <section className="px-4 sm:px-8 py-12 font-sf">
        <h2 className="text-3xl font-bold mb-10 relative after:content-[''] after:block after:bg-red-600 after:w-[5rem] after:h-1 after:ml-10 after:mt-2">
          DEPARTMENTS
        </h2>
        <div className="space-y-8 mb-5">
          <ul className="space-y-8 mb-5">
            {departments.map(({ name, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="flex justify-between items-center bg-chemjruk px-4 py-2 w-full max-w-[700px] rounded-md shadow-md hover:bg-red-800 transition-colors duration-200"
                >
                  <span className="text-lg font-medium font-sf text-white">{`DEPARTMENT OF ${name}`}</span>
                  <span className="text-xl text-white bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-black text-white px-8 sm:px-10 py-14">
        <h2 className="text-2xl font-semibold mb-6 relative after:content-[''] after:block after:bg-red-600 after:w-20 after:h-1 after:ml-10 after:mt-2">
          CONTACT INFO
        </h2>
        <div className="flex flex-col ml-20">
          <img
            src={imag}
            alt={contactInfo.name}
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl object-cover border-2 border-red-700 mb-6"
          />
          <div className="text-left">
            <h3 className="text-lg font-bold">{contactInfo.name}</h3>
            <p className="text-gray-400">{contactInfo.title}</p>
            <p className="text-gray-400">{contactInfo.location}</p>
            <p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-400 hover:text-red-700"
              >
                {contactInfo.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-gray-400 hover:text-red-700"
              >
                {contactInfo.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      {/* <Routes>
        <Route path="/science-bio" element={<Bio />} />
        <Route path="/science-chemistry" element={<Chemistry />} />
        <Route path="/computer-science" element={<CS />} />
        <Route path="/environmental-science" element={<Environmental />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/physics" element={<Physics />} />
      </Routes> */}
    </div>
  );
};

export default Program;
