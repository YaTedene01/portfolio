"use client"

import { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      title: "Ya Tedene Faye",
      subtitle: "Full-Stack Web & Mobile Developer",
      description:
        "Passionate about creating high-performance web and mobile applications. I transform your ideas into quality technical solutions.",
      contactMe: "Contact Me",
      viewProjects: "View My Projects",
    },
    about: {
      title: "About",
      profile: "Profile",
      profileText:
        "Holder of a Bachelor's degree in Computer Science, Software Engineering option, I am a Full-Stack developer passionate about creating high-performance web and mobile applications. My expertise covers the entire development cycle, from design to production deployment. Rigorous and creative, I am committed to delivering quality technical solutions with an excellent user experience.",
      education: "Education",
      educationDegree: "Bachelor's in Software Engineering",
      educationUniversity: "Iba Der Thiam University, Thiès",
      educationYears: "2018 - 2021",
      educationTraining: "Web & Mobile Dev Training",
      educationAcademy: "Sonatel Academy",
      information: "Information",
      location: "Location",
      locationValue: "Dakar, Senegal",
      availability: "Availability",
      availabilityValue: "Remote or On-site",
      languages: "Languages",
      languagesValue: "French (Advanced), English (Intermediate)",
    },
    projects: {
      title: "My Projects",
      viewCode: "View Code",
      viewDemo: "View Demo",
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      tools: "Tools & Others",
    },
    contact: {
      title: "Contact Me",
      description: "Have a project in mind? Feel free to contact me to discuss it.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Dakar, Senegal",
      whatsapp: "Contact on WhatsApp",
      whatsappMessage: "Hello Ya Tedene, I'm contacting you from your portfolio.",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      downloadCV: "Télécharger CV",
    },
    hero: {
      title: "Ya Tedene Faye",
      subtitle: "Développeuse Full-Stack Web & Mobile",
      description:
        "Passionnée par la création d'applications web et mobile performantes. Je transforme vos idées en solutions techniques de qualité.",
      contactMe: "Me contacter",
      viewProjects: "Voir mes projets",
    },
    about: {
      title: "À propos",
      profile: "Profil",
      profileText:
        "Titulaire d'une Licence en Informatique, option Génie Logiciel, je suis une développeuse Full-Stack passionnée par la création d'applications web et mobile performantes. Mon expertise couvre l'ensemble du cycle de développement, de la conception à la mise en production. Rigoureuse et créative, je m'attache à livrer des solutions techniques de qualité avec une excellente expérience utilisateur.",
      education: "Formation",
      educationDegree: "Licence en Génie Logiciel",
      educationUniversity: "Université Iba Der Thiam, Thiès",
      educationYears: "2018 - 2021",
      educationTraining: "Formation Dev Web & Mobile",
      educationAcademy: "Sonatel Academy",
      information: "Informations",
      location: "Localisation",
      locationValue: "Dakar, Sénégal",
      availability: "Disponibilité",
      availabilityValue: "Télétravail ou Présentiel",
      languages: "Langues",
      languagesValue: "Français (Avancé), Anglais (Intermédiaire)",
    },
    projects: {
      title: "Mes Projets",
      viewCode: "Voir le code",
      viewDemo: "Voir la démo",
    },
    skills: {
      title: "Compétences",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      tools: "Outils & Autres",
    },
    contact: {
      title: "Contactez-moi",
      description: "Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Dakar, Sénégal",
      whatsapp: "Contacter sur WhatsApp",
      whatsappMessage: "Bonjour Ya Tedene, je vous contacte depuis votre portfolio.",
    },
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"))
  }

  const t = translations[language]

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
