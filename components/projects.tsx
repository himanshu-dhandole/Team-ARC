"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X, Globe } from "lucide-react";
import Image from "next/image";

const GithubLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string[];
}

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <div 
      onClick={() => onSelect(project)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-xl hover:border-gray-300 cursor-pointer hover:scale-105 active:scale-95"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
        <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed font-light line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge 
              key={tech} 
              className="rounded-full border border-gray-200 bg-blue-50 text-blue-600 px-2.5 py-0.5 text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge 
              className="rounded-full border border-gray-200 bg-blue-50 text-blue-600 px-2.5 py-0.5 text-xs font-medium"
            >
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <p className="text-xs text-blue-600 font-medium">Click to view details →</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "PerpEX",
      description:
        "Decentralized perpetual futures protocol with vAMM core, NFT-backed position tokens, on-chain liquidation & funding.",
      image: "https://image2url.com/images/1764700426792-f43e236d-a44a-4742-8768-25257a4f99a3.png",
      technologies: ["Solidity", "Foundry", "vAMM", "NFTs", "Keeper Network"],
      githubUrl: "https://github.com/himanshu-dhandole/PerpEX",
      liveUrl: "https://perp-ex.vercel.app",
      details: [
        "Decentralized perpetual futures protocol with vAMM (Virtual Automated Market Maker) core",
        "NFT-backed position tokens for derivative trading",
        "On-chain liquidation & funding mechanisms",
        "Production-minded: fully tested with Foundry",
        "Incentive-driven keeper network for automatic liquidations",
        "Secure smart contract architecture with comprehensive testing"
      ]
    },
    {
      title: "Flexi-Yield",
      description:
        "AI-driven yield optimization protocol that automatically reallocates liquidity to top-performing DeFi pools.",
      image: "https://image2url.com/images/1764698560655-385a0ee4-6852-4beb-a56f-beacf34d8d94.png",
      technologies: ["Solidity", "Python AI", "Keepers", "ERC-4626", "DeFi"],
      liveUrl: "https://flexi-yields.vercel.app",
      githubUrl: "https://github.com/himanshu-dhandole/Flexi-Yields",
      details: [
        "AI-driven yield optimization for DeFi liquidity",
        "Automatic reallocation to top-performing pools",
        "Python model for predictions and strategy generation",
        "Keeper network for automated allocation updates",
        "ERC-4626 vault standard for composability",
        "Real-time APY analysis and optimization"
      ]
    },
    {
      title: "FoodFactory",
      description:
        "Secure, scalable food-delivery backend powered by Spring Boot with comprehensive features.",
      image: "https://image2url.com/images/1764698484386-077676b7-85ea-4f11-8c88-87ae7c14360f.png",
      technologies: ["Spring Boot", "JWT", "Razorpay", "UploadCare", "Postgres"],
      liveUrl: "https://foodfactory-arc.netlify.app/",
      githubUrl: "https://github.com/himanshu-dhandole/Food-Factory",
      details: [
        "Secure Spring Boot backend with JWT authentication",
        "Razorpay payment integration for transactions",
        "UploadCare image uploads for product visuals",
        "Real-time delivery tracking system",
        "Multi-user support: customers, restaurants, delivery partners",
        "Scalable PostgreSQL database architecture"
      ]
    },
    {
      title: "Vermint",
      description: "Decentralized E-Commerce Platform | Blockchain-based NFT digital twins of physical products",
      image: "https://themewagon.com/wp-content/uploads/2021/06/landing-1.png",
      technologies: ["Solidity", "Foundry", "React", "IPFS", "OpenZeppelin", "ERC1155"],
      liveUrl: "https://verimint.vercel.app/",
      githubUrl: "https://github.com/arpitSatpute/VeriMint.git",
      details: [
        "ERC1155 smart contracts for multi-token product representation",
        "Escrow and order management system with automated redemption workflows",
        "IPFS integration for immutable product provenance and metadata",
        "React frontend with Wagmi/Viem for Web3 connectivity",
        "Trustless escrow enabling secure transactions between buyers and sellers",
        "On-chain verification for product authenticity and ownership tracking"
      ]
    },
    {
      title: "Insight Yield",
      description: "AI-Powered DeFi Yield Optimizer | Autonomous liquidity engine for optimal DeFi strategies",
      image: "https://tse2.mm.bing.net/th/id/OIP.Hik1VgHplD5oRYqK5VWTeAAAAA?w=400&h=300&rs=1&pid=ImgDetMain&o=7&rm=3",
      technologies: ["Solidity", "Foundry", "Python", "React", "Polygon", "Wagmi/Viem"],
      liveUrl: "https://insight-yield.vercel.app/",
      githubUrl: "https://github.com/arpitSatpute/InsightYield.git",
      details: [
        "Modular ERC-4626 vault system on Polygon for composable DeFi integration",
        "Custom Python AI engine with XGBoost for real-time risk scoring and APY prediction",
        "EIP-712 verification ensuring authenticated and tamper-proof on-chain recommendations",
        "Automated capital reallocation based on AI-generated strategies",
        "Off-chain AI predictions combined with on-chain cryptographic proofs",
        "Real-time yield optimization reducing slippage and maximizing returns"
      ]
    },
    {
      title: "Skedula",
      description: "Business & Appointment Management Platform | Full-stack platform for service booking",
      image: "https://global-uploads.webflow.com/5f717831e96c96004f99c4a3/6409cece08938bdfac45ec06_SCR-20230309-jie.png",
      technologies: ["Spring Boot", "React", "PostgreSQL", "Redis", "Docker", "Razorpay"],
      liveUrl: "https://skedula-customer.vercel.app/",
      githubUrl: "https://github.com/arpitSatpute/Skedula",
      details: [
        "Spring MVC architecture with Spring Boot and RabbitMQ based notification system",
        "Razorpay wallet integration with secure transaction handling",
        "Redis caching for improved performance and reduced database load",
        "Dockerized deployment with PostgreSQL database",
        "Real-time appointment scheduling and notification system",
        "Business dashboard for service management and revenue analytics",
        "Business Portal Link: https://skedula-business.vercel.app/"
      ]
    },
    {
      title: "Proxima",
      description: "AI-Powered Exam Integrity System | Real-time AI-driven exam monitoring platform",
      image: "https://static.vecteezy.com/system/resources/previews/018/815/472/original/landing-page-design-modern-landing-page-templates-landing-page-design-templates-free-free-vector.jpg",
      technologies: ["Spring Boot", "React", "React Native", "WebRTC", "Gemini AI", "PostgreSQL"],
      liveUrl: "https://proxima-frontend-three.vercel.app",
      githubUrl: "https://github.com/Yash-Zade/Proxima.git",
      details: [
        "WebRTC and WebSocket for real-time monitoring and communication",
        "Gemini AI integration for scenario-based test generation",
        "Bluetooth and WiFi device detection for exam security",
        "Cross-platform support (Web and Mobile)",
        "Real-time face detection and proctoring capabilities",
        "Automated anomaly detection for academic integrity violations"
      ]
    },
    {
      title: "PlanIt",
      description: "Event Management Platform | Connecting event hosts, organizers, and vendors",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f6ce21140178657.623ca2fa82516.jpg",
      technologies: ["Spring Boot", "React", "PostgreSQL", "Docker", "RabbitMQ"],
      liveUrl: "https://plan-it-roan-two.vercel.app/",
      githubUrl: "https://github.com/arpitSatpute/PlanIt",
      details: [
        "Microservices architecture with Spring Boot and RabbitMQ",
        "Dual booking system for direct hiring or vendor marketplace",
        "Secure escrow holding 10% payment until post-event review",
        "Dockerized deployment with PostgreSQL database",
        "Real-time vendor and organizer communication system",
        "Comprehensive event analytics and performance metrics dashboard"
      ]
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[52px] sm:text-[68px] font-serif tracking-tight text-gray-900 leading-tight mb-4">
            <span className="italic font-light text-gray-600">Featured</span> Work
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Production-minded builds across Web2 and Web3 — protocol engineering,
            resilient backends, and AI-driven systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] md:max-h-[95vh] overflow-y-auto border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex justify-between items-start mb-4 md:mb-6 gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 break-words">{selectedProject.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {selectedProject.description}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-200 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 md:space-y-6">
                {/* Live Preview */}
                <div>
                  <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Live Preview</h4>
                  <div className="rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                    {selectedProject.liveUrl ? (
                      <div style={{ 
                        height: '500px', 
                        overflow: 'hidden',
                        backgroundColor: '#f3f4f6',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        padding: '0'
                      }}>
                        <div style={{
                          transform: 'scale(0.5)',
                          transformOrigin: 'top center',
                          width: '1380px',
                          margin: '0',
                          padding: '0'
                        }}>
                          <iframe 
                            src={selectedProject.liveUrl} 
                            title={selectedProject.title}
                            className="border-0"
                            style={{ 
                              width: '1380px', 
                              height: '1000px', 
                              display: 'block',
                              margin: '0',
                              padding: '0'
                            }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="h-80 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 md:mb-3 text-base md:text-lg">Key Features & Achievements</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-xs md:text-sm text-gray-700">
                        <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 md:mb-3 text-base md:text-lg">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-blue-50 text-blue-600 border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white transition text-sm md:text-base flex-1"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium border-2 border-gray-300 hover:border-gray-400 text-gray-700 transition text-sm md:text-base flex-1"
                    >
                      <GithubLogo className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;