import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

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
            Keep yourself updated
          </h2>
          <p className="text-gray-300 mb-8">
            Coming soon
          </p>
          
          {/* Form */}
          <div className="relative max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 bg-white/90"
                required
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors whitespace-nowrap"
              >
                Join the Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
