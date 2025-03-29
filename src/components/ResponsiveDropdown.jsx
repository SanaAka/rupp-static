// import { useState, useRef, useEffect, useCallback } from "react";

// const ResponsiveDropdown = () => {
//   const [dropdownState, setDropdownState] = useState({
//     program: false,
//     faculty: false,
//     center: false,
//     mobileMenu: false,
//   });

//   const programRef = useRef(null);
//   const facultyRef = useRef(null);
//   const centerRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   // Toggle function to open/close dropdowns
//   const toggleDropdown = (key) => {
//     setDropdownState((prev) => ({
//       ...prev,
//       [key]: !prev[key], // Toggle only the selected dropdown
//     }));
//   };

//   // Close dropdowns on outside click
//   const handleClickOutside = useCallback((event) => {
//     if (
//       !programRef.current?.contains(event.target) &&
//       !facultyRef.current?.contains(event.target) &&
//       !centerRef.current?.contains(event.target) &&
//       !mobileMenuRef.current?.contains(event.target)
//     ) {
//       setDropdownState({
//         program: false,
//         faculty: false,
//         center: false,
//         mobileMenu: false,
//       });
//     }
//   }, []);

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [handleClickOutside]);

//   return (
//     <div className="relative p-4">
//       {/* Program Dropdown */}
//       <button onClick={() => toggleDropdown("program")} className="p-2 border rounded">
//         Program
//       </button>
//       {dropdownState.program && (
//         <div ref={programRef} className="absolute bg-white border rounded p-2 w-40">
//           Program Dropdown Content
//         </div>
//       )}

//       {/* Faculty Dropdown */}
//       <button onClick={() => toggleDropdown("faculty")} className="p-2 border rounded ml-4">
//         Faculty
//       </button>
//       {dropdownState.faculty && (
//         <div ref={facultyRef} className="absolute bg-white border rounded p-2 w-40">
//           Faculty Dropdown Content
//         </div>
//       )}

//       {/* Center Dropdown */}
//       <button onClick={() => toggleDropdown("center")} className="p-2 border rounded ml-4">
//         Center
//       </button>
//       {dropdownState.center && (
//         <div ref={centerRef} className="absolute bg-white border rounded p-2 w-40">
//           Center Dropdown Content
//         </div>
//       )}

//       {/* Mobile Menu */}
//       <button
//         onClick={() => toggleDropdown("mobileMenu")}
//         className="p-2 border rounded ml-4 md:hidden"
//       >
//         Menu
//       </button>
//       {dropdownState.mobileMenu && (
//         <div ref={mobileMenuRef} className="absolute bg-white border rounded p-2 w-40 md:hidden">
//           Mobile Menu Content
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResponsiveDropdown;
