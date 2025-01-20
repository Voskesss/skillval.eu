const Hero = () => {
  return (
    <div className="full-width bg-cover bg-top min-h-[800px] relative hero-section pt-[72px]">
      {/* Witte golf onderaan */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C320,100 720,100 1440,0 L1440 100 L0 100 Z" 
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
