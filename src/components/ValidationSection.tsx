import { useTranslation } from 'react-i18next';

const ValidationSection = () => {
  const { t } = useTranslation();

  return (
    <section className="full-width bg-white relative -mt-1">
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Afbeelding sectie */}
          <div className="relative">
            <img
              src="https://skillval.eu/wp-content/uploads/2024/11/Scherm­afbeelding-2024-11-23-om-17.19.40.png"
              alt="SkillVal Validation Interface"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>

          {/* Tekst sectie */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('validation.title')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('validation.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection;
