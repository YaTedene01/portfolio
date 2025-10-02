"use client"

import { useLanguage } from "../contexts/LanguageContext"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 px-6 relative bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-2">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6 animate-fade-in bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours et mes motivations
          </p>
        </div>

        <div className="space-y-8 stagger-children relative z-10">
           <div className="bg-card/80 backdrop-blur-md p-8 rounded-xl border border-primary/20 hover-lift hover:border-primary/60 transition-all duration-500 shadow-lg hover:shadow-primary/10">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{t.about.profile}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{t.about.profileText}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card/80 backdrop-blur-md p-6 rounded-xl border border-primary/20 hover-lift hover:border-primary/60 transition-all duration-500 shadow-lg hover:shadow-primary/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary">{t.about.education}</h4>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-6">
                  <p className="font-semibold text-foreground text-lg">{t.about.educationDegree}</p>
                  <p className="text-muted-foreground">{t.about.educationUniversity}</p>
                  <p className="text-sm text-muted-foreground">{t.about.educationYears}</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-6">
                  <p className="font-semibold text-foreground text-lg">{t.about.educationTraining}</p>
                  <p className="text-muted-foreground">{t.about.educationAcademy}</p>
                </div>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-md p-6 rounded-xl border border-primary/20 hover-lift hover:border-primary/60 transition-all duration-500 shadow-lg hover:shadow-primary/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary">{t.about.information}</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">{t.about.location}:</span> {t.about.locationValue}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">{t.about.availability}:</span>{" "}
                    {t.about.availabilityValue}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0V1m10 3V1m0 3l1 1v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5l1-1z" />
                  </svg>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">{t.about.languages}:</span> {t.about.languagesValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
