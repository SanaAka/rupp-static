import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import contactImage from "../image/Human.jpg";

function H_human({ departments, contactInfo }) {
  return (
    <div>
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 pl-8 flex items-center">
          <h1 className="text-6xl font-bold font-sf text-white ml-12 relative after:content-[''] after:block after:bg-red-600 after:w-[15rem] after:h-1 after:ml-14 after:mt-4">
            FACULTY OF
            <br />
            SOCIAL SCIENCES AND
            <br />
            HUMANITIES
          </h1>
        </div>
      </header>

      {/* Content Section */}
      <div className="bg-black font-sf text-white">
        {/* Intro Section */}
        <section className="px-8 py-4 border-gray-700">
          <p className="text-gray-300 mb-4 mt-1 leading-relaxed">
            Explore the diverse range of departments and expertise under the
            Faculty of Social Sciences and Humanities.
          </p>
        </section>

        {/* Departments Section */}
        <section className="px-4 mt-2  sm:px-8 py-1">
          <h2 className="text-3xl font-bold mb-6 relative after:content-[''] after:block after:bg-red-600 after:w-[8rem] after:h-1 after:ml-12 after:mt-2">
            DEPARTMENTS
          </h2>
          <section className="px-0 py-0 mb-10 border-gray-700">
            <p className="text-gray-300  leading-relaxed">
              Explore the diverse range of departments and expertise under the
              Faculty of Social Sciences and Humanities.
            </p>
          </section>
          <ul className="space-y-8 font-sf">
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
        </section>

        {/* Contact Info Section */}
        <section className="bg-black text-white px-8 sm:px-10 py-10">
          <h2 className="text-3xl font-bold mb-12 relative after:content-[''] after:block after:bg-red-600 after:w-[8rem] after:h-1 after:ml-12 after:mt-2">
            CONTACT INFO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={contact.image}
                  alt={contact.name}
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl object-cover border-2 border-red-700 mb-4"
                />
                <div className="text-left">
                  <h3 className="text-lg font-bold">{contact.name}</h3>
                  <p className="text-gray-400">{contact.title}</p>
                  <p className="text-gray-400">
                    <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                    {contact.location}
                  </p>
                  <p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-gray-400 hover:text-red-700"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                      {contact.email}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-gray-400 hover:text-red-700"
                    >
                      <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                      {contact.phone}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default H_human;
