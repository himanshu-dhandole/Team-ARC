import { Badge } from "@/components/ui/badge";
import { Server, Layers, Zap, ShieldCheck, Rocket, Cpu } from "lucide-react";

const services = [
  {
    title: "Full-Stack Product Development",
    icon: <Zap className="w-5 h-5" />,
    description:
      "End-to-end engineering — frontend, backend, databases, deployments. Fast iterations and production-grade execution.",
    stack: ["Next.js", "React", "TypeScript", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Backend & API Engineering",
    icon: <Server className="w-5 h-5" />,
    description:
      "Robust APIs, authentication, database design, caching layers, monitoring, and scale-ready backend systems.",
    stack: ["Spring Boot", "Node.js", "Redis", "MongoDB"],
  },
  {
    title: "UI / UX & Design Systems",
    icon: <Layers className="w-5 h-5" />,
    description:
      "Clean, consistent, accessible interfaces. Component libraries, design tokens, and systemized UI.",
    stack: ["Figma", "Tailwind", "Framer Motion"],
  },
  {
    title: "Web3 & Smart Contracts",
    icon: <Rocket className="w-5 h-5" />,
    description:
      "Production-ready Solidity contracts, protocol design, DeFi mechanisms, keepers, and indexing systems.",
    stack: ["Solidity", "Foundry", "Wagmi", "Viem", "IPFS"],
  },
  {
    title: "Infrastructure & DevOps",
    icon: <ShieldCheck className="w-5 h-5" />,
    description:
      "Pipelines, deployments, monitoring, containers, infra-as-code, and reliability engineering.",
    stack: ["Docker", "Kubernetes", "Terraform", "AWS"],
  },
  {
    title: "AI Integrations & Automation",
    icon: <Cpu className="w-5 h-5" />,
    description:
      "Model integration, workflow automation, AI-powered features, embeddings, and intelligent routing.",
    stack: ["Python", "LangChain", "OpenAI", "Vector DBs"],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Services
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            What We Deliver
          </h2>

          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Straightforward engineering. Minimal noise. Measurable output.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-accent hover:border-primary/40 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-accent/50">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
