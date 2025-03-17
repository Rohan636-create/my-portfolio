import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Research from './components/Research'
import About from './components/About'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Research />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
