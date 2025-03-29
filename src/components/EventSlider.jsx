import { useEffect, useState } from "react";
import event1 from "../image/Eventcoming.png";
import event2 from "../image/Loream.png";
import event3 from "../image/Ruppsongkran.png";

const EventSlider = () => {
  const [slides, setSlides] = useState([
    { img: event1, title: "Event Coming" },
    { img: event2, title: "Lorem Ipsum" },
    { img: event3, title: "Rupp Songkran" },
  ]);

  // Function to rotate the slides
  const rotateSlides = () => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      const lastSlide = newSlides.pop(); // Remove last slide
      newSlides.unshift(lastSlide); // Prepend last slide to the front
      return newSlides;
    });
  };

  // Set up the auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(rotateSlides, 4000); // Rotate slides every 4 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section id="event" className="p-10 bg-black text-white">
      <h2 className="text-3xl font-bold  mb-5 relative  after:content-[''] after:ml-4 after:block after:bg-red-600 after:w-12 after:h-1 after:mt-2">
        Event
      </h2>
      <div className="flex justify-center">
        <div className="relative w-full overflow-hidden">
          <div className="slider1 flex transition-transform duration-600 ease-in-out p-10">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`flex-none w-full sm:w-1/3 p-2 ${
                  index === 0
                    ? "translate-x-[-50%] opacity-70 shadow-lg" // Left slide with shadow and opacity
                    : index === 2
                    ? "translate-x-[50%] opacity-70 shadow-lg" // Right slide with shadow and opacity
                    : "scale-110 shadow-2xl" // Center slide with emphasis
                } transition-transform duration-500`}
              >
                <div className="relative">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                 </div>
                <span className="absolute -bottom-8 left-0 right-0  text-white text-center py-2 rounded-b-lg">
                    {slide.title}
                  </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSlider;
