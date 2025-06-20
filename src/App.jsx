import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Section from './components/Section'
import Hero from './sections/Hero'
import Contacts from './sections/Contacts'
import Pricing from './sections/Pricing'
import DrawerWrap from './components/DrawerWrap'
import AboutUs from './sections/AboutUs'
import Services from './sections/Services'
import Projects from './sections/Projects'
import ThemeProvider from './components/ThemeProvider'


function App() {
  return (
    <>
      <ThemeProvider>
        <DrawerWrap>
          <NavBar />

          <Hero />

          <Section container content={<AboutUs />} id={1} />
          <Section container content={<Services />} id={2} />
          <Section content={<Projects />} id={3} />
          {/* <Section content={<Pricing />} id={4} /> */}

          <Section content={<Contacts />} id={5} />

          <Footer />
        </DrawerWrap>
      </ThemeProvider>
    </>
  )
}

export default App
