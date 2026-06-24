import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import { Analytics } from "@vercel/analytics/next"
function App() {

  return (
    <>
    <Home />
    <Nav />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Contact />
    <Footer/>
    <Analytics />
    </>

  )
}

export default App 
