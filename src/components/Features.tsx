import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Workflow Feature */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{t('features.workflow.title')}</h3>
            <p>{t('features.workflow.description')}</p>
          </div>

          {/* Collaboration Feature */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{t('features.collaboration.title')}</h3>
            <p>{t('features.collaboration.description')}</p>
          </div>

          {/* Security Feature */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{t('features.security.title')}</h3>
            <p>{t('features.security.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
