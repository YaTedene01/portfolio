import { LanguageProvider } from "./contexts/LanguageContext"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import ChatBox from "./components/ChatBox"

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <ChatBox />
      </div>
    </LanguageProvider>
  )
}

export default App
