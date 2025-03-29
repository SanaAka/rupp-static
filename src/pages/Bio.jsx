import React, { useState } from "react";
import H_Bio from "../components/H_Bio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AT1 from "../image/AT1.jpg";
import AT2 from "../image/AT2.jpg";
import AT3 from "../image/AT3.jpg";
import {
  faPhoneAlt,
  faEnvelope,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import imag from "../image/profile.jpg";

const Bio = () => {
  const [activeYear, setActiveYear] = useState("FOUNDATION");
  const years = ["FOUNDATION", "SECOND YEAR", "THIRD YEAR", "FOURTH YEAR"];
  const curriculumData = {
    FOUNDATION: {
      semesterI: [
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
      ],
      semesterII: [
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
      ],
    },
    "SECOND YEAR": {
      semesterI: [
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
      ],
      semesterII: [
        { subject: "Cell Biology", code: "BIO203", credit: 4, hours: "3-3" },
        { subject: "Ecology", code: "BIO204", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
      ],
    },
    "THIRD YEAR": {
      semesterI: [
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
      ],
      semesterII: [
        { subject: "Cell Biology", code: "BIO203", credit: 4, hours: "3-3" },
        { subject: "Ecology", code: "BIO204", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
      ],
    },
    "FOURTH YEAR": {
      semesterI: [
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
      ],
      semesterII: [
        { subject: "Cell Biology", code: "BIO203", credit: 4, hours: "3-3" },
        { subject: "Ecology", code: "BIO204", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
        { subject: "Microbiology", code: "BIO201", credit: 4, hours: "3-3" },
        { subject: "Genetics", code: "BIO202", credit: 4, hours: "3-3" },
      ],
    },
    // Add data for other years as needed
  };
  const contactInfo = [
    {
      name: "John, Ph.D.",
      title: "Dean of Science Faculty",
      location: "Campus A, 2nd Floor, Room 214 A",
      email: "abc@yourdomain.kh",
      phone: "+855-1234567890",
      image: imag,
    },
    {
      name: "John, Ph.D.",
      title: "Dean of Science Faculty",
      location: "Campus A, 2nd Floor, Room 214 A",
      email: "abc@yourdomain.kh",
      phone: "+855-1234567890",
      image: imag,
    },
    {
      name: "Jane Doe",
      title: "Lecturer, Biology",
      location: "Campus B, 1st Floor, Room 101",
      email: "jane@yourdomain.kh",
      phone: "+855-987654321",
      image: imag,
    },
    {
      name: "John, Ph.D.",
      title: "Dean of Science Faculty",
      location: "Campus A, 2nd Floor, Room 214 A",
      email: "abc@yourdomain.kh",
      phone: "+855-1234567890",
      image: imag,
    },
    {
      name: "John, Ph.D.",
      title: "Dean of Science Faculty",
      location: "Campus A, 2nd Floor, Room 214 A",
      email: "abc@yourdomain.kh",
      phone: "+855-1234567890",
      image: imag,
    },
    {
      name: "Jane Doe",
      title: "Lecturer, Biology",
      location: "Campus B, 1st Floor, Room 101",
      email: "jane@yourdomain.kh",
      phone: "+855-987654321",
      image: imag,
    },
    {
      name: "Sarah Lee",
      title: "Professor, Chemistry",
      location: "Campus A, 3rd Floor, Room 302",
      email: "sarah@yourdomain.kh",
      phone: "+855-123987654",
      image: "path/to/image3.jpg",
    },
    {
      name: "Michael Brown",
      title: "Lecturer, Physics",
      location: "Campus C, Ground Floor, Room 015",
      email: "michael@yourdomain.kh",
      phone: "+855-456123789",
      image: "path/to/image4.jpg",
    },
    {
      name: "Emily Davis",
      title: "Professor, Mathematics",
      location: "Campus B, 2nd Floor, Room 210",
      email: "emily@yourdomain.kh",
      phone: "+855-789456123",
      image: "path/to/image5.jpg",
    },
    {
      name: "Sarah Lee",
      title: "Professor, Chemistry",
      location: "Campus A, 3rd Floor, Room 302",
      email: "sarah@yourdomain.kh",
      phone: "+855-123987654",
      image: "path/to/image3.jpg",
    },
    {
      name: "Michael Brown",
      title: "Lecturer, Physics",
      location: "Campus C, Ground Floor, Room 015",
      email: "michael@yourdomain.kh",
      phone: "+855-456123789",
      image: "path/to/image4.jpg",
    },
    {
      name: "Emily Davis",
      title: "Professor, Mathematics",
      location: "Campus B, 2nd Floor, Room 210",
      email: "emily@yourdomain.kh",
      phone: "+855-789456123",
      image: "path/to/image5.jpg",
    },
  ];

  const renderTable = (semester, data = []) => (
    <div>
      <h3 className="mb-4">{semester}</h3>
      <div className=" border-b"></div>
      <table className="w-full  ">
        <thead className="border-b">
          <tr className="  text-center  border-gray-600">
            <th className="py-2  text-red-500">Subject</th>
            <th className="py-2 text-red-500">Code</th>
            <th className="py-2 text-red-500">Credit</th>
            <th className="py-2 text-red-500">Hours (L-P)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-1">{item.subject}</td>
              <td className="py-1">{item.code}</td>
              <td className="py-1">{item.credit}</td>
              <td className="py-1">{item.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return (
    <div>
      <H_Bio />
      <div className="bg-black font-sf text-white">
        <section className="px-8 py-4 border-gray-700">
          <h1 className="text-3xl  font-sf font-bold mb-4 relative after:content-[''] after:block after:bg-red-600 after:w-32 after:h-2 after:ml-8 after:mt-2">
            INTRODUCTION
          </h1>
          <p className="text-gray-300 font-sf leading-relaxed">
            Students studying in the Department of Biology gain knowledge about
            plants and animals, and build crucial laboratory research and
            fieldwork skills. Students spend the first year studying the
            Foundation Studies course, and the remainder of their degree gaining
            a solid grounding in general biology. Increasingly, the Cambodian
            market demands laboratory-trained professionals in the agricultural,
            medical and food production industries. All the degrees offered by
            the Department of Biology teach students the skills they will need
            to work in medical laboratories, plant breeding farms, beer brewing
            or food production plants. Graduates may also work for environmental
            organizations, relevant government ministries or undertake further
            training to become teachers in their own right.
          </p>
        </section>

        <section className="px-8 py-4  border-gray-700">
          <h2 className="text-3xl  font-sf font-bold mb-4 relative after:content-[''] after:block after:bg-red-600 after:w-24 after:h-2 after:ml-8 after:mt-2">
            BACKGROUND
          </h2>
          <p className="text-gray-300 font-sf leading-relaxed">
            The Department has been supported by various international
            organizations over the years, including Maryknoll (staff development
            and preparation of student resources), Australian Volunteers
            International (capacity building and curriculum development) and
            AUPELF (financial support). In 2002, with assistance from Dr.
            Sambath Chung, a professor from the United States, the department
            developed a genetics lab to demonstrate the basic and fundamental
            principles of genetics, and to enable original research within the
            university.
          </p>
        </section>

        <section className="px-8 py-4  border-gray-700">
          <h2 className="text-3xl  font-sf font-bold mb-4 relative after:content-[''] after:block after:bg-red-600 after:w-24 after:h-2 after:ml-8 after:mt-2">
            ADMISSION
          </h2>
          <p className="text-gray-300 font-sf leading-relaxed">
            Admission to the Bachelor of Science in Biology is administered by
            the Ministry of Education, Youth and Sport, based on sound results
            in the High School Certificate subjects of Biology and Chemistry.
          </p>
        </section>

        <section className="px-8 py-4  border-gray-700">
          <h2 className="text-3xl  font-sf font-bold mb-4 relative after:content-[''] after:block after:bg-red-600 after:w-20 after:h-2 after:ml-8 after:mt-2">
            ASSESSMENT
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Students are assessed through examinations throughout their degree.
          </p>
        </section>

        <section className="px-8 py-4 border-gray-700">
          <h2 className="text-3xl font-sf font-bold mb-8 relative after:content-[''] after:block after:bg-red-600 after:w-28 after:h-2 after:ml-10 after:mt-2">
            STUDENT ACTIVITIES
          </h2>

          {/* Flex container for side-by-side layout */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Text content */}
            <p className="text-gray-300 font-sf leading-relaxed mr-10 lg:w-2/3">
              In the Department of Biology, laboratories are available for
              studying botany, zoology, and microbiology. There is also a
              research laboratory that has been mainly equipped through a
              microbial research project of Osaka University, and a herbarium
              established through a project of Sud Expert Plantes. A field
              station on campus provides students the opportunity to study the
              cultivation of plants and the raising of small animals, and the
              Centre for Biodiversity Conservation provides facilities such as a
              museum and a library, equipment for field research, and support
              for research by 4th-year BSc students in addition to managing its
              MSc programme. The learning environment is improving as innovative
              teaching methods are introduced with the assistance of
              international collaboration or support by international agencies,
              and with the return of teachers from graduate studies abroad.
              Every year, there is a field trip for 4th-year students to an
              interesting area in Cambodia, where they can apply their knowledge
              and observe biological processes in nature. Perhaps more
              interesting to all students is the party before Khmer New Year,
              which helps build close relationships in the student body.In the
              Department of Biology, laboratories are available for studying
              botany, zoology, and microbiology. There is also a research
              laboratory that has been mainly equipped through a microbial
              research project of Osaka University, and a herbarium established
              through a project of Sud Expert Plantes. A field station on campus
              provides students the opportunity to study the cultivation of
              plants and the raising of small animals, and the Centre for
              Biodiversity Conservation provides facilities such as a museum and
              a library, equipment for field research, and support for research
              by 4th-year BSc students in addition to managing its MSc
              programme. The learning environment is improving as innovative
              teaching methods are introduced with the assistance of
              international collaboration or support by international agencies,
              and with the return of teachers from graduate studies abroad.
              Every year, there is a field trip for 4th-year students to an
              interesting area in Cambodia, where they can apply their knowledge
              and observe biological processes in nature. Perhaps more
              interesting to all students is the party before Khmer New Year,
              which helps build close relationships in the student body.In the
              Department of Biology, laboratories are available for studying
              botany, zoology, and microbiology. There is also a research
              laboratory that has been mainly equipped through a microbial
              research project of Osaka University, and a herbarium established
              through a project of Sud Expert Plantes.
            </p>

            {/* Images container */}
            <div className="lg:w-1/3 space-y-6">
              {/* First image - positioned to the right */}
              <div className="h-32 rounded-lg overflow-hidden flex justify-start">
                <div className="w-2/3">
                  <img
                    src={AT1}
                    alt="Student using microscope"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Second image - positioned to the left */}
              <div className="h-32 rounded-lg overflow-hidden flex justify-end">
                <div className="w-2/3">
                  <img
                    src={AT2}
                    alt="Students in field trip"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Third image - positioned to the right */}
              <div className="h-32 rounded-lg overflow-hidden flex justify-start">
                <div className="w-2/3 ">
                  <img
                    src={AT3}
                    alt="Group photo of students"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-12 border-b border-gray-700">
          <h2 className="text-2xl font-sf font-bold mb-12 relative after:content-[''] after:block after:bg-red-600 after:w-24 after:h-2 after:ml-4 after:mt-2">
            RESOURCES
          </h2>
          <div className="overflow-x-auto flex justify-center ">
            <table className="w-[60%] text-center justify-center  border-collapse">
              <thead>
                <tr className="text-gray-400 border-b  border-gray-700">
                  <th className="px-4 py-2">Files</th>
                  <th className="px-4 py-2">Download</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b  border-gray-700">
                  <td className="px-4 text-left py-2">
                    Biology technical terms in English and Khmer
                  </td>
                  <td className="px-4 py-2 text-right text-red-500">
                    <a href="#" className="hover:underline">
                      Download
                    </a>
                  </td>
                </tr>
                <tr className="border-b text-left border-gray-700">
                  <td className="px-4 py-2">
                    General Biology I Microorganisms in Khmer
                  </td>
                  <td className="px-4 py-2 text-right text-red-500">
                    <a href="#" className="hover:underline">
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 text-left py-2">
                    General Biology II Plants and Animals in Khmer
                  </td>
                  <td className="px-4 py-2 text-right text-red-500">
                    <a href="#" className="hover:underline">
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="px-8 py-12">
          <h2 className="text-3xl  font-sf font-bold mb-12 relative after:content-[''] after:block after:bg-red-600 after:w-32 after:h-2 after:ml-8 after:mt-2">
            CURRICULUM
          </h2>

          <p className="mb-6 text-sm">
            Starting from Foundation Year - Third Year, the general education
            was English language and the rest was Basic Requirement. And in the
            Third Year there are minor courses that we need to study.
          </p>

          <p className="mb-4 text-left text-red-500 text-sm">
            L= Lecture Hours, P= Practical Hours
          </p>

          <div className="flex gap-2 justify-center  mb-8">
            {years.map((year) => (
              <button
                key={year}
                className={`px-4 py-2 rounded-full text-center transition-colors ${
                  activeYear === year
                    ? "bg-red-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-8">
            {curriculumData[activeYear] ? (
              <>
                {renderTable(
                  "SEMESTER I",
                  curriculumData[activeYear].semesterI
                )}
                {renderTable(
                  "SEMESTER II",
                  curriculumData[activeYear].semesterII
                )}
              </>
            ) : (
              <>
                {renderTable("SEMESTER I", [])}
                {renderTable("SEMESTER II", [])}
              </>
            )}
          </div>
        </section>
      </div>
      {/* Contact Info Section */}
      <section className="bg-black text-white px-8 sm:px-10 py-14">
        <h2 className="text-3xl  font-sf font-bold mb-12 relative after:content-[''] after:block after:bg-red-600 after:w-12 after:h-2 after:ml-4 after:mt-2">
          STAFF
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 ml-10">
          {contactInfo.map((contact, index) => (
            <div key={index} className="flex flex-col items-left">
              <img
                src={contact.image}
                alt={contact.name}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl object-cover border-2 border-red-700 mb-4"
              />
              <div className="text-left ">
                <h3 className="text-lg font-bold">{contact.name}</h3>
                <p className="text-gray-400">{contact.title}</p>
                <p className="text-gray-400">
                  {" "}
                  <span className="mr-2  w-4">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>{" "}
                  {contact.location}
                </p>
                <p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-400 hover:text-red-700"
                  >
                    {" "}
                    <span className="mr-2  w-4">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>{" "}
                    {contact.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-gray-400 hover:text-red-700"
                  >
                    <span className="mr-2  w-4">
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </span>{" "}
                    {contact.phone}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Bio;
