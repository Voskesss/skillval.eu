import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NewsletterSection = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 my-24">
      <section className="bg-gradient-to-br from-[#0A192F] via-[#172A46] to-[#1F3A60] py-16 rounded-[48px] relative overflow-hidden">
        {/* Decoratieve cirkels */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="relative">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('newsletter.title')}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t('newsletter.subtitle')}
            </p>

            {submitted ? (
              <div className="bg-blue-500/20 text-white p-4 rounded-lg">
                Thank you for joining our waitlist! We'll keep you updated.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                method="POST"
                data-netlify="true"
                name="waitlist"
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input type="hidden" name="form-name" value="waitlist" />
                
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.placeholder')}
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-blue-400"
                />
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  {t('newsletter.button')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;
