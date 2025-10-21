import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Rooms from './components/Rooms'
import Spotify from './components/Spotify'
import Testimonials from './components/Testimonials'
import Press from './components/Press'
import Residents from './components/Residents'
import Archive from './components/Archive'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Rooms />
      <Testimonials />
      <Press />
      <Residents />
      <Spotify />
      <div style={{ width: '100vw', height: '100vh' }}>
        <Archive />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
