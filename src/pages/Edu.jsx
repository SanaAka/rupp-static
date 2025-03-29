import React from "react";

import imag from "../image/profile.jpg";

import H_Edu from "../components/H_Edu";

function Edu() {
  const departments = [
    { name: "DEPARTMENT OF EDUCATIONAL STUDIES", path: "/geography-and-land-management" }, //this path is not route yet and not change path
    { name: "DEPARTMENT OF HIGHER EDUCATION DEVELOPMENT AND MANAGEMENT", path: "/history" },//this path is not route yet and not change path
    { name: "DEPARTMENT OF LIFELONG LEARNING", path: "/Khmer-literature" },//this path is not route yet and not change path
    { name: "DEPARTMENT OF EDUCATIONAL RESEARCH AND TRAINING", path: "/international-business-management" },//this path is not route yet and not change path
   
  
  ];

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
      name: "Jane, Ph.D.",
      title: "Head of Humanities Department",
      location: "Campus B, 1st Floor, Room 101",
      email: "jane@yourdomain.kh",
      phone: "+855-9876543210",
      image: imag,
    },
  ];

  return (
    <div>
      {/* Pass data as props */}
      <H_Edu departments={departments} contactInfo={contactInfo} />
    </div>
  );
}

export default Edu;
