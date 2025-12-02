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
    demo: "https://projet-whatsapp-eight.vercel.app/",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
