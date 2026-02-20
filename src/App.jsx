import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Servicios from "./components/Servicios"
import Proceso from "./components/Proceso"
import CTA from "./components/CTA"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import ScrollTopButton from "./components/ScrollTopButton"
import Tape from "./components/Tape";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Tape />
      <About />
      <Servicios />
      <Proceso />
      <CTA />
      <Contacto />
      <Footer />
      <ScrollTopButton /> 
    </>
  )
}

export default App