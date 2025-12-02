import { LanguageProvider } from "./contexts/LanguageContext"
import { ThemeProvider } from "./components/ThemeProvider"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import ChatBox from "./components/ChatBox"

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange={false}
    >
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Hero />
            <Projects />
            <About />
            <Skills />
            <Contact />
          </main>
          <ChatBox />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
