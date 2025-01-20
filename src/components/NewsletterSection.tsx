import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementeer nieuwsbrief aanmelding
    console.log('Email submitted:', email);
  };

  return (
    <section className="bg-gradient-to-br from-[#0A192F] via-[#172A46] to-[#1F3A60] py-16 rounded-[48px] relative overflow-hidden mx-4 my-8">
      {/* Decoratieve cirkels */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            {t('newsletter.title')}
          </h2>
          <p className="text-gray-300 mb-8">
            {t('newsletter.subtitle')}
          </p>
          
          {/* Form */}
          <div className="relative max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {t('newsletter.button')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
