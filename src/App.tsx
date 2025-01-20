import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'
import PowerfulSection from './components/PowerfulSection'
import ValidationSection from './components/ValidationSection'
import CarouselSection from './components/CarouselSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'
import ChevronDownIcon from './components/ChevronDownIcon'

const languages = {
  nl: { name: 'Nederlands', flag: 'https://flagcdn.com/w40/nl.png' },
  en: { name: 'English', flag: 'https://flagcdn.com/w40/gb.png' }
};

function App() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0A192F] z-50 shadow-lg backdrop-blur-sm bg-opacity-90">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between py-4 px-6">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="https://skillval.eu/wp-content/uploads/2024/11/default-dark-png.png"
                alt="SkillVal"
                className="h-12"
              />
            </a>

            {/* Rechter menu items */}
            <div className="flex items-center gap-6">
              {/* Taal keuze */}
              <div className="relative group">
                <button className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-400 transition-colors py-2">
                  <img 
                    src={languages[currentLanguage as keyof typeof languages].flag} 
                    alt={currentLanguage} 
                    className="w-5 h-5"
                  />
                  <span>{currentLanguage.toUpperCase()}</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                
                <div className="absolute right-0 top-full pt-2">
                  <div className="bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {Object.entries(languages).map(([code, { name, flag }]) => (
                      <button
                        key={code}
                        onClick={() => changeLanguage(code)}
                        className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2 min-w-[160px]"
                      >
                        <img src={flag} alt={code} className="w-5 h-5" />
                        <span>{name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Login knop */}
              <a
                href="https://app.skillval.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-sm font-medium transition-colors"
              >
                Log in
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main>
        <Hero />
        <Features />
        <PowerfulSection />
        <ValidationSection />
        <CarouselSection />
        <NewsletterSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
