import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 bg-[#0A192F] z-50">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between py-4 px-6">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="https://skillval.eu/wp-content/uploads/2024/11/default-dark-png.png"
                alt="SkillVal"
                className="h-8"
              />
            </a>

            {/* Rechter menu items */}
            <div className="flex items-center gap-6">
              {/* Taal keuze */}
              <div className="flex gap-2">
                <button className="text-white hover:text-blue-400 text-sm">NL</button>
                <span className="text-gray-500">|</span>
                <button className="text-white hover:text-blue-400 text-sm">EN</button>
              </div>

              {/* Login knop */}
              <a
                href="#"
                className="text-white hover:text-blue-400 text-sm font-medium"
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
      </main>

      {/* Footer */}
      <footer className="bg-[#0A192F] text-white">
        <div className="container mx-auto py-8 px-6 text-center">
          <p className="text-sm"> 2024 SkillVal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
