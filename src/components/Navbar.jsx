import { useState, useRef, useEffect } from "react";
import logo from "../image/Rupp_logo.png";
import Home from "../pages/Home";
import About from "../pages/About";
import Center from "../pages/Center";
import Conferences from "../pages/Conferences";
import Office from "../pages/Office";
import Program from "./Program";
import Bio from "../pages/Bio";
import Humanities from '../pages/Humnities';
import Dev_stu from "../pages/Dev_stu";
import Edu from "../pages/Edu";
import IFL from "../pages/IFL";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownState, setDropdownState] = useState({
    program: false,
    faculty: false,
    center: false,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownState({
          program: false,
          faculty: false,
          center: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const leftColumnCenters = [
    { name: "Cambodia-Japan Cooperation Center", path: "/center/japan" },
    { name: "Cambodia-Korea Cooperation Center", path: "/center/korea" },
    { name: "Continuing Education Center", path: "/center/education" },
    { name: "English Language Support Unit", path: "/center/english" },
    { name: "Information Technology Center", path: "/center/it" },
    { name: "Khmer For Foreigners", path: "/center/khmer" },
  ];

  const rightColumnCenters = [
    { name: "Library Service", path: "/center/library" },
    { name: "Quality Assurance Center", path: "/center/qa" },
    { name: "Thai Language Short Course", path: "/center/thai" },
    { name: "University Industry Cooperation Center", path: "/center/industry" },
    { name: "HR4ASIA", path: "/center/hr4asia" },
    { name: "National Incubation of Cambodia", path: "/center/incubation" },
  ];

  const facultyOptions = [
    { name: "Faculty of Engineering", path: "https://www.fe.rupp.edu.kh/" },
    { name: "Faculty of Science", path: "/faculty-of-science" },
    { name: "Faculty of Social Science and Humanities", path: "/faculty-of-humanities" },
    { name: "Faculty of Development Studies", path: "/faculty-of-development-studies" },
    { name: "Faculty of Education", path: "/faculty-of-education" },
    { name: "Institute of Foreign Languages (IFL)", path: "/IFL" },
    { name: "Institute for International studies and Public Policy", path: "https://rupp.edu.kh/iispp/" },
  ];

  const programOptions = [
    { id: "faculty-institutes", name: "Faculty and Institutes", hasArrow: true, isNested: true },
    { id: "school-fee", name: "School Fee" },
    { id: "scholarship", name: "Scholarship" },
  ];

  const toggleDropdown = (dropdown) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <Router>
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-5 bottom-0">
            <a href="/">
              <img src={logo} alt="University Logo" className="h-16 w-auto" />
            </a>
            <div>
              <p className="text-lg font-khmer">សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ</p>
              <p className="text-sm font-sf">ROYAL UNIVERSITY OF PHNOM PENH</p>
              <p className="text-sm font-sf">Education, Research, and Service to Society</p>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="block lg:hidden">
            <button className="text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Navbar Items */}
          <nav className={`lg:block ${isMobileMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-10 font-sf">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-200 flex items-center text-lg underline-animation">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-200 flex items-center text-lg underline-animation">
                  ABOUT
                </Link>
              </li>
              <li className="relative" ref={dropdownRef}>
                <button
                  className="text-gray-400 hover:text-white transition duration-200 flex items-center text-lg"
                  onClick={() => toggleDropdown("program")}
                >
                  PROGRAM
                </button>
                {dropdownState.program && (
                  <div className="absolute left-0 mt-2 w-64 bg-[#1a1a1a] shadow-lg">
                    <div className="py-2">
                      {programOptions.map((option) => (
                        <div key={option.id} className="relative" onMouseEnter={() => option.isNested && toggleDropdown("faculty")} onMouseLeave={() => option.isNested && toggleDropdown("faculty")}>
                          <Link
                            to={option.path || "#"}
                            className="px-4 py-3 text-gray-400 hover:text-white transition duration-200 flex items-center justify-between"
                            onClick={() => !option.isNested && toggleDropdown("program")}
                          >
                            {option.name}
                            {option.hasArrow && (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </Link>
                          {option.isNested && dropdownState.faculty && (
                            <div className="absolute right-full top-0 w-96 bg-[#1a1a1a] shadow-lg">
                              <div className="py-2">
                                {facultyOptions.map((faculty) => (
                                  <Link
                                    key={faculty.path}
                                    to={faculty.path}
                                    className="block px-4 py-3 text-gray-400 hover:text-white transition duration-200"
                                    onClick={() => setDropdownState({ program: false, faculty: false, center: false })}
                                  >
                                    {faculty.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li className="relative">
                <button className="text-gray-400 hover:text-white transition duration-200 flex items-center text-lg" onClick={() => toggleDropdown("center")}>
                  CENTER
                </button>
                {dropdownState.center && (
                  <div className="absolute -right-[610px] mt-2 w-[800px] bg-[#1a1a1a] shadow-lg -translate-x-1/2">
                    <div className="grid grid-cols-2 gap-x-4 p-4">
                      <div>
                        {leftColumnCenters.map((center) => (
                          <Link
                            key={center.path}
                            to={center.path}
                            className="block px-4 py-3 text-gray-400 hover:text-white transition duration-200 text-lg"
                            onClick={() => setDropdownState({ program: false, faculty: false, center: false })}
                          >
                            {center.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        {rightColumnCenters.map((center) => (
                          <Link
                            key={center.path}
                            to={center.path}
                            className="block px-4 py-3 text-gray-400 hover:text-white transition duration-200 text-lg"
                            onClick={() => setDropdownState({ program: false, faculty: false, center: false })}
                          >
                            {center.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link to="/office" className="text-gray-400 hover:text-white transition duration-200 text-lg">
                  OFFICE
                </Link>
              </li>
              <li>
                <Link to="/conferences" className="text-gray-400 hover:text-white transition duration-200 text-lg">
                  CONFERENCES
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    {/* Routing Logic */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/office" element={<Office />} />
        <Route path="/faculty-of-science" element={<Program />} />{" "}
        <Route path="/faculty-of-humanities" element={<Humanities />} />
        <Route path="/faculty-of-development-studies" element={<Dev_stu />} />
        <Route path="/faculty-of-education" element={<Edu />} />
        <Route path="/IFL" element={<IFL/>} />
        {/* {<Route path="/geography-and-land-management" element={<Bio />} />
        <Route path="/history" element={<Bio/>}/>
        <Route path="//Khmer-literature" element={<Bio/>}/>
        <Route path="/international-business-management" element={<Bio/>}/>
        <Route path="/linguistics" element={<Bio/>}/>
        <Route path="/media-and-communication" element={<Bio/>}/>
        <Route path="/philosophy" element={<Bio/>}/>
        <Route path="/psychology" element={<Bio/>}/>
        <Route path="/sociology" element={<Bio/>}/>
        <Route path="/social-work" element={<Bio/>}/>
        <Route path="/tourism" element={<Bio/>}/> tis not complete} */}
        <Route path="/geography-and-land-management" element={<Bio />} />
        <Route path="/history" element={<Bio/>}/>
        <Route path="//Khmer-literature" element={<Bio/>}/>
        <Route path="/international-business-management" element={<Bio/>}/>
        <Route path="/linguistics" element={<Bio/>}/>
        <Route path="/media-and-communication" element={<Bio/>}/>
        <Route path="/philosophy" element={<Bio/>}/>
        <Route path="/psychology" element={<Bio/>}/>
        <Route path="/sociology" element={<Bio/>}/>
        <Route path="/social-work" element={<Bio/>}/>
        <Route path="/tourism" element={<Bio/>}/>

        <Route path="/science-bio" element={<Bio />} />{" "}
        {/* This part is complete */}
        <Route path="/science-chemistry" element={<Bio />} />{" "}
        {/*this part <Route path="/science-chemistry" element={<Bio />} />
                <Route path="/computer-science" element={<Bio />} />
                <Route path="/environmental-science" element={<Bio />} />
                <Route path="/mathematics" element={<Bio />} />
                <Route path="/physics" element={<Bio />} /> is not complete */}
        <Route path="/computer-science" element={<Bio />} />
        <Route path="/environmental-science" element={<Bio />} />
        <Route path="/mathematics" element={<Bio />} />
        <Route path="/physics" element={<Bio />} />
        {/* New Route */}
        {[...leftColumnCenters, ...rightColumnCenters].map((center) => (
          <Route key={center.path} path={center.path} element={<Center />} />
        ))}
      </Routes>
    </Router>
  );
};

export default Navbar;
