const PowerfulSection = () => {
  return (
    <section className="full-width relative overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#172A46] to-[#1F3A60]">
      {/* Decoratieve cirkels */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-blue-400/5 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 translate-x-1/3 translate-y-1/4" />

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Tekst sectie */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Easy to learn and<br />
              extremely powerful.
            </h2>
            <p className="text-gray-300 text-lg">
              SkillVal simplifies skill validation while empowering users to achieve their goals and drive meaningful progress.
            </p>
          </div>

          {/* Afbeelding sectie */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent md:hidden" />
            <img
              src="https://skillval.eu/wp-content/uploads/2024/11/Scherm­afbeelding-2024-11-23-om-17.02.30.png"
              alt="SkillVal Platform Interface"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulSection;
