import { useLanguage } from "../contexts/LanguageContext"

const projects = [
  {
    title: "OMPAY — Application de Paiement et Transfert Mobile",
    description:
      "Plateforme de paiement mobile : envoi et réception d'argent, paiement via code marchand, OTP SMS. Documentation générée avec Swagger/OpenAPI.",
    tech: ["Laravel", "PostgreSQL", "Laravel Passport", "OpenAPI"]
  },
  {
    title: "OMPAY CLI — Application Dart en Ligne de Commande",
    description:
      "Interface CLI permettant d'interagir avec l'API OMPAY : authentification, transfert, paiement.",
    tech: ["Dart", "Dio", "GetIt", "DotEnv"],
    github: "https://github.com/YaTedene01/OMPAY_DART.git",
  },
  {
    title: "OMPAY Flutter — Application Mobile (Clone Orange Money)",
    description:
      "Application mobile permettant transferts, paiements, consultation solde, historique transactions. Reproduction des principales fonctionnalités Orange Money.",
    tech: ["Flutter SDK 3.0+", "Dart SDK 2.19+"],
    github: "https://github.com/YaTedene01/OMPAY_FLUTTER.git",
  },
  {
    title: "Ges-Compte — API REST Banque",
    description:
      "Gestion comptes bancaires, clients, transactions + Swagger.",
    tech: ["Laravel", "PostgreSQL", "OAuth2", "OpenAPI"],
    github: "https://github.com/YaTedene01/ges-compte.git",
  },
  {
    title: "TODO — Gestion de Tâches",
    description:
      "Auth, partage, historique, multi-utilisateurs.",
    tech: ["Node.js", "Express", "TypeScript", "Prisma"],
    github: "https://github.com/YaTedene01/TODO.git",
  },
  {
    title: "FOTOLJAY — Marketplace Articles d'Occasion",
    description:
      "Achat/vente objets avec photo obligatoire.",
    tech: ["Angular 17", "Tailwind", "Node.js", "Prisma"],
    github: "https://github.com/YaTedene01/Fotoljay.git",
  },
  {
    title: "MAXIT — Transfert d'Argent",
    description:
      "Transactions, Woyofal, microservices.",
    tech: ["PHP", "PostgreSQL", "API REST"],
    referent: "Birane Baila Wane | Tél : +221 77 766 95 95",
    github: "https://github.com/YaTedene01/MAXIT.git",
  },
  {
    title: "Whatsapp — Application de Messagerie",
    description:
      "Chat temps réel WEB + interface responsive.",
    tech: ["JavaScript", "PostgreSQL"],
    github: "https://github.com/YaTedene01/Whatsapp.git",
  },
  {
    title: "Gestion-Salaire — Application Paie Entreprises",
    description:
      "Gestion paies, bulletins + PDF.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    referent: "Ali Tall Niang | Tél : +221 77 182 54 14",
    github: "https://github.com/YaTedene01/Gestion-Salaire.git",
  },
]

export default function Projects() {
  const { t } = useLanguage()

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
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {t.projects.viewCode}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t.projects.viewDemo}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
