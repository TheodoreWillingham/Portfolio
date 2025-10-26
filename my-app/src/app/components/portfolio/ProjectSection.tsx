import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Resume Critiquer",
    description:
      "A simple yet effective AI Resume Critiquer using StreamLit and OpenAI's LLM.",
    image: "/Projects/AI-Resume-Critiquer.png",
    tags: ["StreamLit", "OpenAI"],
    githubUrl: "https://github.com/TheodoreWillingham/AI-Projects.git",
    demoUrl: "/not-found",
  },
  {
    id: 2,
    title: "Bulldog Marketplace",
    description:
      "A online marketplace for UGA students using MapBoxAPI and MongoDB as backend.",
    image: "Projects/Bulldog Marketplace.png",
    tags: ["React", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/TheodoreWillingham/Portfolio.git",
    demoUrl: "/bulldog-marketplace",
  },
  {
    id: 3,
    title: "Small Satellite Research Laboratory",
    description:
      "Assigned to MEMESat-1, a cube sat capable of bringing memes to space.",
    image: "/Projects/SSRL.png",
    tags: ["Fprime", "Embedded Systems"],
    githubUrl:
      "https://github.com/SmallSatelliteResearchLaboratoryUGA/MEMESat-FSW.git",
    demoUrl: "https://smallsat.uga.edu/",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my most recent Projects. I am curretnly working on a
          personal fish-tank IoT project which I will be posting soon.{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/40 text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      target="_blank"
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      target="_blank"
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/TheodoreWillingham"
          >
            Check My Github <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
