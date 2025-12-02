const skillsData = {
  Langages: ["JavaScript", "TypeScript", "PHP", "Java", "Dart", "HTML/CSS", "C"],
  Frameworks: ["React", "Node.js", "Express", "Laravel", "Flutter"],
  "Bases de données": ["MySQL", "PostgreSQL", "MongoDB"],
  Design: ["Figma", "UI/UX Design"],
  Outils: ["Git/GitHub", "Docker", "Jenkins"],
  Méthodologie: ["Agile/Scrum"],
}

const softSkills = ["Autonomie", "Communication", "Créativité", "Initiative", "Adaptabilité"]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6 animate-fade-in bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Compétences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que je maîtrise
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-3xl font-semibold text-foreground mb-8 animate-fade-in text-center">Compétences Techniques</h3>
            <div className="grid md:grid-cols-3 gap-8 stagger-children">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover-lift hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-foreground uppercase tracking-wider">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default hover:shadow-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-foreground mb-8 animate-fade-in text-center">Compétences Transversales</h3>
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 animate-scale-in hover-lift hover:border-primary/50 transition-all duration-500">
              <div className="flex flex-wrap gap-4 justify-center stagger-children">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 text-base font-semibold bg-primary/10 text-primary rounded-xl border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-primary/25"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
