import React from "react";
import H_human from "../components/H_human";
import imag from "../image/profile.jpg";
import H_dev_stu from "../components/H_dev_stu";

function Dev_stu() {
  const departments = [
    { name: "DEPARTMENT OF COMMUNITY DEVELOPMENT", path: "/geography-and-land-management" }, //this path is not route yet and not change path
    { name: "DEPARTMENT OF ECONOMY DEVELOPMENT", path: "/history" },//this path is not route yet and not change path
    { name: "DEPARTMENT OF KHMER LITERATURE", path: "/Khmer-literature" },//this path is not route yet and not change path
    { name: "DEPARTMENT OF NATURAL RESOURCE MGT AND DEVELOPMENT", path: "/international-business-management" },//this path is not route yet and not change path
    { name: "DEPARTMENT OF SUSTAINABLE URBAN PLANNING AND DEVELOPMENT", path: "/linguistics" }//this path is not route yet and not change path
  
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
      <H_dev_stu departments={departments} contactInfo={contactInfo} />
    </div>
  );
}

export default Dev_stu;
