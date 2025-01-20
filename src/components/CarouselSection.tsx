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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="full-width bg-gradient-to-br from-[#0A192F] via-[#172A46] to-[#1F3A60] relative overflow-hidden py-24">
      {/* Bovenste golf */}
      <div className="absolute top-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full rotate-180"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C320,100 720,100 1440,0 L1440 100 L0 100 Z" 
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-16">
        {/* Carousel */}
        <div className="relative">
          {/* Slide */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Afbeelding */}
            <div className="relative">
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

          {/* Navigatie knoppen */}
          <div className="flex justify-center gap-4 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-400' : 'bg-gray-500'
                }`}
                aria-label={`Ga naar slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Pijl knoppen */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
            aria-label="Vorige slide"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
            aria-label="Volgende slide"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
