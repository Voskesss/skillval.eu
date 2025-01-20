const Hero = () => {
  return (
    <div className="full-width bg-cover bg-top min-h-[600px] relative hero-section">
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
    </div>
  );
};

export default Hero;
