import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent pointer-events-none" />

      <div className="max-w-screen-md mx-auto relative">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <div className="animate-in fade-in slide-in-from-left-6 duration-700">
              <Badge variant="secondary" className="mb-4">
                About Me
              </Badge>
            </div>

            <ProfileImage className="mt-3 mb-8 block md:hidden" />

            <h2 className="text-4xl font-bold mb-4 tracking-tight animate-in fade-in slide-in-from-left-6 duration-700 delay-100">
              Passionate about creating{" "}
              <span className="relative inline-block">
                impactful
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 100 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q25,1 50,3 T100,5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-primary/50"
                  />
                </svg>
              </span>{" "}
              web experiences
            </h2>

            <p className="text-muted-foreground mb-6 text-justify leading-relaxed animate-in fade-in slide-in-from-left-6 duration-700 delay-200">
              With over 5 years of experience in full-stack development, I
              specialize in building scalable web applications using modern
              technologies. My expertise includes React, Node.js, and cloud
              architecture. I&apos;m passionate about creating elegant solutions
              to complex problems and sharing knowledge with the developer
              community.
            </p>

            <div className="flex flex-wrap gap-4 justify-start animate-in fade-in slide-in-from-left-6 duration-700 delay-300">
              <Button className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group">
                <GithubLogo />
                View Github
              </Button>
              <Button
                variant="outline"
                className="rounded-full shadow-none hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <Download className="group-hover:animate-bounce" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "mt-10 w-48 h-48 md:w-64 md:h-64 animate-in fade-in zoom-in-95 duration-700 delay-150",
      className
    )}
    {...props}
  >
    <div className="relative w-full h-full group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent border-4 border-background shadow-2xl transform group-hover:scale-105 transition-all duration-500">
        <Image
          src="/placeholder.svg"
          alt="Profile"
          className="object-cover"
          fill
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
    </div>
  </div>
);

export default About;