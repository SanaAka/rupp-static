import React from 'react'
import contactImage from "../image/BgFc.jpg";
function H_Bio() {
  return (
    <div>
           {/* Header Section */}
           <header
              className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center"
              style={{
                backgroundImage: `url(${contactImage})`, // Use the imported image
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
              {/* Overlay */}
              <div className="relative z-10 pl-8 flex items-center">
                <h1 className="text-6xl font-bold text-white ml-12 relative after:content-[''] after:block after:bg-red-600 after:w-[15rem] after:h-1 after:ml-14 after:mt-2">
                DEPARTMENT OF
                  <br />
                  BIOLOGY
                </h1>
              </div>
            </header>
    </div>
  )
}

export default H_Bio;
