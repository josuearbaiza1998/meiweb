import AgendaSection from "../components/sections/AgendaSection"
import ContactoSection from "../components/sections/ContactoSection"
import HeroSection from "../components/sections/HeroSection"
import MinisteriosSection from "../components/sections/MinisteriosSection"
import NosotrosSection from "../components/sections/NosotrosSection"
import OracionSection from "../components/sections/OracionSection"
import Servicios from "../components/sections/ServiciosSection"

function App() {

  return (
    <>
      <HeroSection />
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
