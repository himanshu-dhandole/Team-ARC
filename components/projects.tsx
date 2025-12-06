import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const GithubLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

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
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg hover:border-gray-300">
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-[19px] font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-[14px] text-gray-700 mb-4 leading-relaxed font-light">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              className="rounded-full border border-gray-200 bg-white text-gray-700 px-2.5 py-0.5 text-[10px] font-medium tracking-wide shadow-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button 
              className="rounded-full text-[13px] bg-gray-900 text-white hover:bg-gray-800 font-medium px-4 h-9 shadow-md transition-all" 
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              className="rounded-full text-[13px] bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 font-medium px-4 h-9 shadow-sm transition-all"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1.5 h-3.5 w-3.5" />
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
  ];

  return (
    <section id="projects" className="relative py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[52px] sm:text-[68px] font-serif tracking-tight text-gray-900 leading-tight">
            <span className="italic font-light text-gray-600">Featured</span> Work
          </h2>
          <p className="text-[16px] text-gray-700 mt-4 max-w-3xl mx-auto font-light">
            Production-minded builds across Web2 and Web3 — protocol engineering,
            resilient backends, and AI-driven systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;