import { useState, useEffect } from "react";
import EventSlider from "../components/EventSlider"; // Import the EventSlider component
import img1 from "../image/Screenshot 2024-09-22 150245.png";
import img2 from "../image/timeup.png";
import img3 from "../image/Detic.png";
import img4 from "../image/Screenshot 2024-09-22 171311.png";
import img5 from "../image/TheEnd.png";
import stat1 from "../image/Screenshot 2024-09-22 191216.png";
import stat2 from "../image/Student.png";
import stat3 from "../image/Staff.png";
import stat4 from "../image/AA.png";
import stat5 from "../image/Partner.png";
import fly from "../image/Fly.png";
import fly1 from "../image/What1.png";
import fly2 from "../image/What2.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: img1,
      title: "NEW SEMESTER!",
      description: (
        <>
          Class of RUPP 2023-2024 is already here! Click
          <br />
          “REGISTER” now to see more information and how to
          <br />
          apply.
        </>
      ),
    },
    {
      img: img2,
      title: "TIMES UP!",
      description: "HISTORY repeating itself.12.02.2024.",
    },
    { img: img3, title: "DETECTED.", description: "LOREM IPSUM." },
    { img: img4, title: "NEW BRANCH.", description: "Branch opened." },
    { img: img5, title: "THE END.", description: "The Finale approach." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Slider Section */}
      <section className="relative w-full h-[70vh] sm:h-[50vh] overflow-hidden bg-black font-sf text-white">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-[80vh] sm:h-[50vh] flex-shrink-0 relative">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-[20%] left-[10%] sm:left-[5%] font-sf">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg sm:text-xl">{slide.description}</p>
                {index === 0 && (
                  <button className="mt-6 bg-red-500 hover:bg-red-700 px-6 py-3 text-lg text-white rounded">
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 text-2xl hover:bg-black"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 text-2xl hover:bg-black"
          onClick={nextSlide}
        >
          &#10095;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 w-full flex justify-center space-x-3">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 w-4 rounded-full cursor-pointer transition-all duration-300 ${
                currentSlide === index ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="flex justify-around items-center flex-wrap gap-1 p-5 sm:p-10 lg:p-24 bg-black font-sf">
        {[{ img: stat1, number: "1960", label: "ESTABLISHED" },
          { img: stat2, number: "26711", label: "STUDENTS" },
          { img: stat3, number: "1080", label: "STAFF" },
          { img: stat4, number: "64577", label: "ALUMNI" },
          { img: stat5, number: "220", label: "INT.PARTNERS" }].map((stat, index) => (
          <div key={index} className="max-w-[250px] text-center p-5 relative">
            <span className="absolute top-60 transform -translate-x-1/2 text-white font-bold text-lg p-2 bg-opacity-50 bg-black rounded-t-xl">
              {stat.label}
            </span>
            <img
              src={stat.img}
              alt={stat.label}
              className="w-[200px] h-[200px] rounded-xl"
            />
            <h3 className="text-3xl text-green-500 mt-20">{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* What's New Section */}
      <section className="p-5 sm:p-10 text-left bg-black text-white">
        <h2 className="text-3xl ml-12 relative font-bold font-sf after:content-[''] after:block after:bg-red-600 after:w-[5rem] after:h-1 after:ml-14 after:mt-2">
          WHAT'S NEW?
        </h2>
        <div className="flex flex-wrap justify-around mt-10">
          {[fly, fly1, fly2].map((img, index) => (
            <div key={index} className="max-w-[400px] text-center p-5">
              <img
                src={img}
                alt={`News ${index + 1}`}
                className="w-full h-[250px] rounded-lg object-cover hover:scale-105 transition-transform"
              />
              <p className="mt-4 text-gray-400 font-sf">
                Lorem ipsum dolor sit amet consectetur. Lectus in nulla
                suspendisse in sit neque.
              </p>
            </div>
          ))}
        </div>
        <div className="text-right mt-5">
          <a href="#" className="text-white text-lg font-sf hover:underline">
            Read More &rarr;
          </a>
        </div>
      </section>

      {/* Event Slider */}
      <EventSlider />
      {/* Added the EventSlider component here */}
    </div>
  );
};

export default Home;
