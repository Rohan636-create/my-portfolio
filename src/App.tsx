import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
