import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, ExternalLink, Mail, Phone } from "lucide-react";
import { GithubLogo } from "./icons";
import Image from "next/image";

interface ExperienceItemProps {
  name: string;
  role: string;
  location?: string;
  contact?: { phone?: string; email?: string; linkedin?: string; github?: string };
  period?: string;
  summary: string;
  technologies: string[];
  projects?: { title: string; subtitle?: string; desc?: string; live?: string; repo?: string }[];
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
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent overflow-hidden relative">
            {image ? (
              // using Image with 'fill' keeps layout identical to previous code
              <Image src={image} alt={name} fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-semibold text-sm text-muted-foreground">
                {name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
            )}
          </div>
          <div>
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 flex-wrap">
            {period && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{period}</span>
              </div>
            )}
            {location && <div className="text-sm text-muted-foreground">{location}</div>}
            {contact?.email && (
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="w-4 h-4" /> <span>{contact.email}</span>
              </a>
            )}
            {contact?.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="w-4 h-4" /> <span>{contact.phone}</span>
              </a>
            )}
            {contact?.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <ExternalLink className="w-4 h-4" /> <span>LinkedIn</span>
              </a>
            )}
            {contact?.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <GithubLogo className="w-4 h-4" /> <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground">{summary}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {projects.length > 0 && (
          <div className="mt-2 space-y-2">
            {projects.map((p, i) => (
              <div key={i} className="p-3 border rounded-lg bg-muted/3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">
                      {p.title}
                      {p.subtitle ? ` — ${p.subtitle}` : ""}
                    </div>
                    {p.desc && <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>}
                  </div>
                  <div className="flex items-center gap-2">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-primary flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-primary flex items-center gap-2"
                      >
                        <GithubLogo className="w-4 h-4" />
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
      image: "https://image2url.com/images/1764699632520-f7c62ff3-92b0-4f33-8326-e5cd3aab91e9.png",
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
      image: "https://image2url.com/images/1764699691412-248d74da-000e-4c3b-8a1f-dfecf11d7762.png",
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
      image: "https://image2url.com/images/1764699674825-33c9af41-529a-4181-8e78-6e9268681a82.png",
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
      image: "https://image2url.com/images/1764699653439-e6940683-2614-4183-8e7c-dfeffe0adb4e.png",
    },
  ];

  return (
    <section id="team" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Team
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">People Who Build</h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
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
