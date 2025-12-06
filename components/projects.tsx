import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "PerpEX",
      description:
        "Decentralized perpetual futures protocol with vAMM core, NFT-backed position tokens, on-chain liquidation & funding. Production-minded: fully tested with Foundry and backed by an incentive-driven keeper network for automatic liquidations.",
      image: "https://image2url.com/images/1764700426792-f43e236d-a44a-4742-8768-25257a4f99a3.png",
      technologies: ["Solidity", "Foundry", "vAMM", "NFTs", "Keeper Network"],
      githubUrl: undefined,
      liveUrl: undefined,
    },
    {
      title: "Flexi-Yield",
      description:
        "AI-driven yield optimization protocol that automatically reallocates liquidity to top-performing DeFi pools. Includes a Python model for predictions and a keeper for automated allocation updates.",
      image: "https://image2url.com/images/1764698560655-385a0ee4-6852-4beb-a56f-beacf34d8d94.png",
      technologies: ["Solidity", "Python AI", "Keepers", "ERC-4626", "DeFi"],
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      title: "FoodFactory",
      description:
        "Secure, scalable food-delivery backend powered by Spring Boot. JWT auth, Razorpay payments, UploadCare image uploads, and real-time delivery tracking for customers, restaurants, and delivery partners.",
      image: "https://image2url.com/images/1764698484386-077676b7-85ea-4f11-8c88-87ae7c14360f.png",
      technologies: ["Spring Boot", "JWT", "Razorpay", "UploadCare", "Postgres"],
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      title: "Vermint",
      description:
        "Blockchain e-commerce platform where brands mint NFT digital twins for physical products with trustless escrow and on-chain verification. ERC1155 tokens, IPFS provenance, automated redemption workflows.",
      image: "https://themewagon.com/wp-content/uploads/2021/06/landing-1.png",
      technologies: ["Solidity", "ERC1155", "IPFS", "React", "OpenZeppelin"],
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      title: "Insight Yield",
      description:
        "Autonomous liquidity engine combining off-chain AI predictions with on-chain proofs to optimize DeFi yields. Modular ERC-4626 vaults, Python XGBoost scoring, and EIP-712 signed recommendations for secure reallocation.",
      image: "https://tse2.mm.bing.net/th/id/OIP.Hik1VgHplD5oRYqK5VWTeAAAAA?w=400&h=300&rs=1&pid=ImgDetMain&o=7&rm=3",
      technologies: ["Solidity", "Python", "XGBoost", "ERC-4626", "Polygon"],
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      title: "Skedula",
      description:
        "Business & appointment management platform with payments. Microservices architecture (Spring Boot + RabbitMQ), Razorpay wallet, Redis caching, and Dockerized deployments.",
      image: "https://global-uploads.webflow.com/5f717831e96c96004f99c4a3/6409cece08938bdfac45ec06_SCR-20230309-jie.png",
      technologies: ["Spring Boot", "RabbitMQ", "Razorpay", "Redis", "Postgres"],
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      title: "Proxima",
      description:
        "AI-powered exam integrity system: real-time proctoring with WebRTC/WebSocket, Gemini AI for scenario generation, device detection, and cross-platform support (Web + Mobile).",
      image: "https://static.vecteezy.com/system/resources/previews/018/815/472/original/landing-page-design-modern-landing-page-templates-landing-page-design-templates-free-free-vector.jpg",
      technologies: ["WebRTC", "Spring Boot", "React Native", "Gemini AI", "Postgres"],
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      title: "PlanIt",
      description:
        "Event management platform connecting hosts, organizers and vendors. Microservices, secure escrow (holds 10% until post-event review), Dockerized infra and dual booking support.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f6ce21140178657.623ca2fa82516.jpg",
      technologies: ["Spring Boot", "React", "Postgres", "Docker", "RabbitMQ"],
      liveUrl: undefined,
      githubUrl: undefined,
    },
    // keep any additional project entries here
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Production-minded builds across Web2 and Web3 — protocol engineering,
            resilient backends, and AI-driven systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
