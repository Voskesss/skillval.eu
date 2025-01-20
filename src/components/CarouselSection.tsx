import { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://skillval.eu/wp-content/uploads/2020/01/home-testimonial-03.jpg",
    title: "For Audit Companies",
    subtitle: "Ensure Compliance with Confidence",
    description: "Reliable reports and insights to make audits simple and transparent."
  },
  {
    image: "https://skillval.eu/wp-content/uploads/2020/01/home-testimonial-02.jpg",
    title: "For Assessors",
    subtitle: "Effortless Skill Assessment",
    description: "Everything you need to evaluate skills fairly, accurately, and efficiently."
  },
  {
    image: "https://skillval.eu/wp-content/uploads/2020/01/home-testimonial-01.jpg",
    title: "For EVC Providers",
    subtitle: "Streamline Your EVC Processes",
    description: "Simple tools to manage pathways, guide candidates, and validate results with ease."
  }
];

const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="full-width bg-gradient-to-br from-[#0A192F] via-[#172A46] to-[#1F3A60] relative -mt-1">
      {/* Bovenste golf - bol */}
      <div className="absolute -top-1 left-0 right-0">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full rotate-180 block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C320,100 720,100 1440,0 L1440 100 L0 100 Z" 
            fill="white"
          />
        </svg>
      </div>

      {/* Onderste golf - hol */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,100 C320,0 720,0 1440,100 L1440 100 L0 100 Z" 
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-24">
        {/* Carousel */}
        <div className="relative">
          {/* Slide */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Afbeelding */}
            <div className="relative max-w-[480px] mx-auto">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="rounded-lg shadow-2xl w-full transition-opacity duration-500"
              />
            </div>

            {/* Tekst */}
            <div className="text-white">
              <h3 className="text-blue-400 text-xl mb-4">
                {slides[currentSlide].title}
              </h3>
              <h2 className="text-4xl font-bold mb-6">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-gray-300 text-lg">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Navigatie bullets */}
          <div className="flex justify-center gap-4 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-400' : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Ga naar slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
