"use client"

import { useLanguage } from "../contexts/LanguageContext"
import profileImage from "/YATEDENE.png"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 border border-primary/20 rotate-45 animate-pulse float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-accent/10 rounded-full blur-sm float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 border border-primary/15 rotate-12 float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-accent/20 rounded-full blur-xs float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
            <img
              src={profileImage}
              alt="Yaye Tedene Faye"
              className="relative rounded-full w-48 h-48 mx-auto shadow-2xl border-4 border-primary/30 hover:scale-105 transition-all duration-500 hover:shadow-primary/30 object-cover"
            />
          </div>
        </div>

        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            <span className="typing-animation">{t.hero.title}</span>
          </h1>
          <p className="text-2xl md:text-3xl text-primary mb-8 font-medium animate-slide-in-bottom" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>{t.hero.subtitle}</p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-in-bottom" style={{ animationDelay: '1s', animationFillMode: 'both' }}>{t.hero.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-bounce-in" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:from-primary/80 hover:to-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1 border border-primary/50"
            >
              {t.hero.contactMe}
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-10 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 backdrop-blur-sm"
            >
              {t.hero.viewProjects}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/70 rounded-full flex justify-center backdrop-blur-sm bg-card/20">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
