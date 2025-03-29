import React from "react";
import H_human from "../components/H_human";
import imag from "../image/profile.jpg";

function Humanities() {
  const departments = [
    { name: "GEOGRAPHY AND LAND MANAGEMENT", path: "/geography-and-land-management" },
    { name: "HISTORY", path: "/history" },
    { name: "KHMER LITERATURE", path: "/Khmer-literature" },
    { name: "INTERNATIONAL BUSINESS MANAGEMENT", path: "/international-business-management" },
    { name: "LINGUISTICS", path: "/linguistics" },
    { name: "MEDIA AND COMMUNICATION", path: "/media-and-communication" },
    { name: "PHILOSOPHY", path: "/philosophy" },
    { name: "SOCIOLOGY", path: "/sociology" },
    { name: "PSYCHOLOGY", path: "/psychology" },
    { name: "SOCIAL WORK", path: "/social-work" },
    { name: "TOURISM", path: "/tourism" },
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
      <H_human departments={departments} contactInfo={contactInfo} />
    </div>
  );
}

export default Humanities;
