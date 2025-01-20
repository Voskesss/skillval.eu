import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const slides = [
    {
      image: "https://skillval.eu/wp-content/uploads/2020/01/home-testimonial-03.jpg",
      title: t('carousel.audit.title'),
      subtitle: t('carousel.audit.subtitle'),
      description: t('carousel.audit.description')
    },
    {
      image: "https://skillval.eu/wp-content/uploads/2020/01/home-testimonial-02.jpg",
      title: t('carousel.assessors.title'),
      subtitle: t('carousel.assessors.subtitle'),
      description: t('carousel.assessors.description')
    },
    {
      image: "https://skillval.eu/wp-content/uploads/2020/01/home-testimonial-01.jpg",
      title: t('carousel.evc.title'),
      subtitle: t('carousel.evc.subtitle'),
      description: t('carousel.evc.description')
    }
  ];

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

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Afbeelding sectie */}
          <div className="relative max-w-[480px] mx-auto">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="rounded-lg shadow-2xl w-full transition-opacity duration-500"
            />
          </div>

          {/* Tekst sectie */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              {slides[currentSlide].title}
            </h2>
            <h3 className="text-2xl text-white/90 mb-4">
              {slides[currentSlide].subtitle}
            </h3>
            <p className="text-lg text-white/80">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Navigatie dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Ga naar slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
