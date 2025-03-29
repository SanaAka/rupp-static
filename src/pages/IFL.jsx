import React from "react";

import imag from "../image/profile.jpg";


import H_IFL from "../components/H_IFL";

function IFL() {
  const departments = [
    { name: "DEPARTMENT OF ENGLISH", path: "/geography-and-land-management" }, //this path is not route yet and not change path
    { name: "DEPARTMENT OF CHINESE", path: "/history" },//this path is not route yet and not change path
    { name: "DEPARTMENT OF FRENCH", path: "/Khmer-literature" },//this path is not route yet and not change path
    { name: "DEPARTMENT OF KOREAN", path: "/international-business-management" },//this path is not route yet and not change path
    { name: "DEPARTMENT OF JAPANESE", path: "/international-business-management" },//this path is not route yet and not change path
    { name: "DEPARTMENT OF THAI", path: "/international-business-management" },//this path is not route yet and not change path
   
  
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
      <H_IFL departments={departments} contactInfo={contactInfo} />
    </div>
  );
}

export default IFL;
