import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-yellow-300 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{t('hero.title')}</h1>
          <h2 className="text-2xl mb-4">{t('hero.subtitle')}</h2>
          <p className="text-lg">{t('hero.description')}</p>
        </div>
        <div className="mt-8">
          {/* Placeholder voor de screenshot/afbeelding */}
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto">
            <img src="/dashboard-preview.png" alt="SkillVal Dashboard" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
