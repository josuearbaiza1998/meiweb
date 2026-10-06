import AgendaSection from "../components/sections/AgendaSection"
import ContactoSection from "../components/sections/ContactoSection"
import EnVivoSection from "../components/sections/EnVivoSection"
import HeroSection from "../components/sections/HeroSection"
import MinisteriosSection from "../components/sections/MinisteriosSection"
import NosotrosSection from "../components/sections/NosotrosSection"
import OracionSection from "../components/sections/OracionSection"
import Servicios from "../components/sections/ServiciosSection"

function App() {

  return (
    <>
      <HeroSection />
      <EnVivoSection />
      <Servicios />
      <NosotrosSection />
      <AgendaSection />
      <MinisteriosSection />
      <OracionSection />
      <ContactoSection />
    </>
  )
}

export default App
