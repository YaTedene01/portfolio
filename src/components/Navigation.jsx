"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { useLanguage } from "../contexts/LanguageContext"

const downloadCV = (language) => {
  const fileName = language === 'fr' ? 'ya tedene faye cv.pdf' : 'ya tedene faye cv anglais.pdf'
  const link = document.createElement('a')
  link.href = `/${encodeURIComponent(fileName)}`
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCVDropdownOpen && !event.target.closest('.cv-dropdown')) {
        setIsCVDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isCVDropdownOpen])


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-foreground animate-fade-in bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ya Tedene Faye
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {t.nav.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {t.nav.projects}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {t.nav.skills}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {t.nav.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-muted-foreground hover:text-primary border border-border rounded-md hover:border-primary transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary border border-border rounded-md hover:border-primary transition-all duration-300"
                aria-label="Toggle language"
              >
                {language === "fr" ? "EN" : "FR"}
              </button>

              <div className="relative cv-dropdown">
                <button
                  onClick={() => setIsCVDropdownOpen(!isCVDropdownOpen)}
                  className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
                >
                  {t.nav.downloadCV}
                  <svg className={`w-4 h-4 transition-transform ${isCVDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isCVDropdownOpen && (
                  <div className="absolute top-full mt-2 w-48 bg-card border border-border rounded-md shadow-lg z-50">
                    <button
                      onClick={() => {
                        downloadCV('fr')
                        setIsCVDropdownOpen(false)
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors first:rounded-t-md"
                    >
                      📄 CV Français
                    </button>
                    <button
                      onClick={() => {
                        downloadCV('en')
                        setIsCVDropdownOpen(false)
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors last:rounded-b-md"
                    >
                      📄 CV English
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.projects}
              </a>
              <a
                href="#skills"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.skills}
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </a>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 text-muted-foreground hover:text-primary border border-border rounded-md hover:border-primary transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary border border-border rounded-md hover:border-primary transition-all duration-300"
                >
                  {language === "fr" ? "EN" : "FR"}
                </button>

                <div className="relative cv-dropdown">
                  <button
                    onClick={() => setIsCVDropdownOpen(!isCVDropdownOpen)}
                    className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
                  >
                    {t.nav.downloadCV}
                    <svg className={`w-4 h-4 transition-transform ${isCVDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isCVDropdownOpen && (
                    <div className="absolute bottom-full mb-2 w-48 bg-card border border-border rounded-md shadow-lg z-50">
                      <button
                        onClick={() => {
                          downloadCV('fr')
                          setIsCVDropdownOpen(false)
                        }}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors first:rounded-t-md"
                      >
                        📄 CV Français
                      </button>
                      <button
                        onClick={() => {
                          downloadCV('en')
                          setIsCVDropdownOpen(false)
                        }}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors last:rounded-b-md"
                      >
                        📄 CV English
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
