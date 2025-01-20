import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'
import Powerful from './components/Powerful'
import Validation from './components/Validation'
import ComingSoon from './components/ComingSoon'
import Newsletter from './components/Newsletter'
import LanguageSwitch from './components/LanguageSwitch'

function App() {
  return (
    <>
      <header className="bg-navy-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SkillVal</h1>
          <LanguageSwitch />
        </div>
      </header>
      <main>
        <Hero />
        <Features />
        <Powerful />
        <Validation />
        <ComingSoon />
        <Newsletter />
      </main>
      <footer className="bg-navy-900 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&#169;2024 SkillVal</p>
        </div>
      </footer>
    </>
  )
}

export default App
