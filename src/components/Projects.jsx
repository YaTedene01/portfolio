const projects = [
  {
    title: "Application de Gestion des Salaires",
    description:
      "Système complet de gestion multi-entreprises permettant la gestion des employés, cycles de paie, bulletins et paiements avec génération automatique de documents PDF.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    referent: "Aly Tall Niang | Tél : +221 77 182 54 14",
  },
  {
    title: "MaxIt - Application de Transfert D'Argent",
    description:
      "Plateforme complète incluant la gestion d'envoi/retrait et Achat avec woyofal",
    tech: ["php", "PostgreSQL", "API REST"],
    referent: "Birane Baila Wane | Tél : +221 77 766 95 95",
  },
  {
    title: "Application de Messagerie Instantanée",
    description:
      "Application de chat en temps réel avec envoi de messages, gestion des contacts et interface réactive inspirée de WhatsApp.",
    tech: ["javascript","PostgreSQL"],
  },
  {
    title: "Système de Gestion des Apprenants",
    description:
      "Outil de suivi pédagogique permettant de gérer la liste des étudiants, leurs présences et informations académiques dans un environnement intuitif.",
    tech: ["PHP", "MySQL"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6 animate-fade-in bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Projets Réalisés
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et innovants
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 stagger-children">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-500 group hover-lift hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">{project.description}</p>
              {project.referent && (
                <p className="text-sm text-muted-foreground mb-6 italic">
                  <strong>Référent :</strong> {project.referent}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
