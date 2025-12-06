"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Mail, Phone } from "lucide-react";
import { useState } from "react";

const GithubLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface ExperienceItemProps {
  name: string;
  role: string;
  location?: string;
  contact?: {
    phone?: string;
    email?: string;
    linkedin?: string;
    github?: string;
  };
  period?: string;
  summary: string;
  technologies: string[];
  projects?: {
    title: string;
    subtitle?: string;
    desc?: string;
    live?: string;
    repo?: string;
  }[];
  image?: string;
}

const ExperienceItem = ({
  name,
  role,
  location,
  contact,
  period,
  summary,
  technologies,
  projects = [],
  image,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 pb-16 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-3 h-full w-[1px] bg-gray-200 group-last:hidden" />
      <div className="absolute left-0 top-3 h-2.5 w-2.5 -ml-[4.5px] rounded-full border border-gray-300 bg-white shadow-sm group-hover:border-gray-900 group-hover:scale-125 transition-all" />

      {/* Content */}
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gray-100 overflow-hidden relative shadow-sm">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-semibold text-sm text-gray-600 bg-gray-50">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="text-xl font-semibold text-gray-900">
              {name}
            </div>
            <div className="text-[15px] text-gray-600 font-light mt-0.5">{role}</div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 flex-wrap text-[13px] text-gray-600">
            {period && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{period}</span>
              </div>
            )}
            {location && <div>{location}</div>}
          </div>
          <div className="flex items-center gap-4 flex-wrap text-[13px] text-gray-600 mt-2">
            {contact?.email && (
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> <span>{contact.email}</span>
              </a>
            )}
            {contact?.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> <span>{contact.phone}</span>
              </a>
            )}
            {contact?.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> <span>LinkedIn</span>
              </a>
            )}
            {contact?.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
              >
                <GithubLogo className="w-3.5 h-3.5" /> <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        <p className="text-[15px] text-gray-700 leading-relaxed font-light">{summary}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              className="rounded-full border border-gray-200 bg-white text-gray-700 px-3 py-0.5 text-[11px] font-medium tracking-wide shadow-sm hover:shadow-md transition-all"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {projects.length > 0 && (
          <div className="mt-4 space-y-3">
            {projects.map((p, i) => (
              <div
                key={i}
                className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-all hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-gray-900 text-[15px]">
                      {p.title}
                      {p.subtitle ? ` — ${p.subtitle}` : ""}
                    </div>
                    {p.desc && (
                      <div className="text-[14px] text-gray-600 mt-1 font-light">
                        {p.desc}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-gray-600 hover:text-gray-900 flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-gray-600 hover:text-gray-900 flex items-center gap-1.5 transition-colors"
                      >
                        <GithubLogo className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const team: ExperienceItemProps[] = [
    {
      name: "Himanshu Dhandole",
      role: "Blockchain Developer",
      location: "Nagpur, India",
      contact: {
        phone: "+919284961467",
        email: "dhandolehimanshu@gmail.com",
        linkedin: "https://www.linkedin.com/in/himanshu-dhandole",
        github: "https://github.com/himanshudhandole",
      },
      period: "2022 — Present",
      summary:
        "Blockchain developer specialized in Solidity and DeFi. 10+ contracts deployed. Full-stack experience with Java, Spring Boot and React. Focused on architecting scalable Web3 solutions.",
      technologies: [
        "Solidity",
        "Foundry",
        "TypeScript",
        "Next.js",
        "Spring Boot",
        "Wagmi/Viem",
        "MongoDB",
        "Microservices",
      ],
      image:
        "https://image2url.com/images/1764699632520-f7c62ff3-92b0-4f33-8326-e5cd3aab91e9.png",
    },
    {
      name: "Vikram Shrivastav",
      role: "Product Designer & Full-Stack / GenAI",
      location: "Nagpur, India",
      contact: {
        linkedin: "https://www.linkedin.com/in/vikram-shrivastav",
        github: "https://github.com/vikram-shrivastav",
      },
      period: "2022 — Present",
      summary:
        "Passionate AI + full-stack dev. Builder mindset — focuses on GenAI integrations, Next.js frontends, and scalable stacks. Prototypes fast and ships usable interfaces.",
      technologies: [
        "Next.js",
        "TypeScript",
        "GenAI",
        "LangChain",
        "Prisma",
        "Redis",
        "Postgres",
        "React Native",
      ],
      image:
        "https://image2url.com/images/1764699691412-248d74da-000e-4c3b-8a1f-dfecf11d7762.png",
    },
    {
      name: "Yash Zade",
      role: "Full Stack Engineer (Backend-first)",
      location: "Nagpur, India",
      contact: {
        linkedin: "https://www.linkedin.com/in/yash-zade",
        github: "https://github.com/yashzade",
      },
      period: "2022 — Present",
      summary:
        "Backend-first fullstack with emphasis on Java & Spring Boot plus modern JS stacks. Ships robust APIs, integrations, and production services.",
      technologies: [
        "Spring Boot",
        "Java",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Prisma",
        "AWS",
      ],
      image:
        "https://image2url.com/images/1764699674825-33c9af41-529a-4181-8e78-6e9268681a82.png",
    },
    {
      name: "Arpit Satpute",
      role: "Platform & Blockchain Engineer",
      location: "Nagpur, India",
      contact: {
        linkedin: "https://www.linkedin.com/in/arpit-satpute",
        github: "https://github.com/arpitSatpute",
      },
      period: "2022 — Present",
      summary:
        "Software engineer focused on blockchain, microservices, and production-ready backend systems. Works across Solidity, Spring Boot and Node.js stacks.",
      technologies: [
        "Solidity",
        "Foundry",
        "Spring Boot",
        "Node.js",
        "Postgres",
        "Docker",
        "IPFS",
      ],
      image:
        "https://image2url.com/images/1764699653439-e6940683-2614-4183-8e7c-dfeffe0adb4e.png",
    },
  ];

  return (
    <section id="team" className="relative py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="rounded-full border border-gray-200 bg-white text-gray-700 px-3 py-1 text-[11px] font-medium tracking-wide shadow-sm uppercase">
              Our Team
            </Badge>
          </div>
          <h2 className="text-[52px] sm:text-[68px] font-serif tracking-tight text-gray-900 leading-tight">
            <span className="italic font-light text-gray-600">People</span> Who Build
          </h2>
          <p className="text-[16px] text-gray-700 mt-4 max-w-2xl mx-auto font-light">
            Core team — focused roles, production projects, real outcomes.
          </p>
        </div>

        <div className="relative">
          {team.map((member, index) => (
            <ExperienceItem key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;