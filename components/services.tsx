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
    <section id="services" className="relative py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
        
          <h2 className="text-[52px] sm:text-[68px] font-serif tracking-tight text-gray-900 leading-tight">
            <span className="italic font-light text-gray-600">What</span> We Deliver
          </h2>
          <p className="text-[16px] text-gray-700 mt-4 max-w-2xl mx-auto font-light">
            Straightforward engineering. Minimal noise. Measurable output.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gray-100 text-gray-700">
                  {service.icon}
                </div>
                <h3 className="text-[17px] font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>

              <p className="text-[14px] text-gray-700 leading-relaxed mb-4 font-light">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.stack.map((tech) => (
                  <Badge 
                    key={tech} 
                    className="rounded-full border border-gray-200 bg-white text-gray-700 px-2.5 py-0.5 text-[10px] font-medium tracking-wide shadow-sm"
                  >
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