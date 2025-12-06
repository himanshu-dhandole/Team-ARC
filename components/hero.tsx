import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <header
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      {/* Subtle animated grid for texture */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.05}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full"
        )}
      />

      <div className="relative z-10 text-center max-w-4xl w-full">
        {/* Top badge */}
        <div className="flex justify-center mb-6">
          <Badge className="rounded-full border bg-white/70 backdrop-blur-sm text-gray-900 px-3 py-1 text-[11px] font-medium tracking-wide shadow-sm">
            <Zap className="h-3.5 w-3.5 text-yellow-500 mr-1" />
            BETTER CALL <span className="font-bold">TEAM ARC</span>
          </Badge>
        </div>

        {/* Main heading */}
        <h1
          id="hero-heading"
          className="text-[55px] sm:text-[65px] md:text-[72px] font-serif tracking-tight leading-[1.05] text-gray-900"
        >
          <span className="italic font-light text-gray-700">Build</span> your Dream Startup.
        </h1>

        {/* One-line value prop */}
        <p className="mt-4 text-[18px] sm:text-[19px] font-semibold text-gray-800">
          TEAM ARC — elite freelance engineers, designers and product leaders.
        </p>

        {/* Supporting description */}
        <p className="mt-3 text-[15px] sm:text-[16px] text-gray-800 max-w-[680px] mx-auto leading-relaxed font-light">
          We partner with startups and product teams to ship robust, production-ready systems — fast. Frontend, backend, infra,
          and end-to-end product delivery from a single trusted team.
        </p>

        {/* Primary CTAs */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full text-[14px] bg-gray-600 text-white hover:bg-blue-700 font-medium px-6 h-11 shadow-md inline-flex items-center"
            aria-label="Get a proposal"
          >
            GET A PROPOSAL
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

        </div>

        {/* Quick project input (prefill for proposal) */}
      

        {/* Trusted / proof row */}
        <div className="mt-16 flex items-center justify-center gap-12 flex-wrap opacity-90">
          <div className="text-center">
            <p className="text-[12px] font-semibold text-gray-800 uppercase tracking-wide">Trusted by</p>
            <p className="mt-1 text-[13px] text-gray-600">startups & enterprise</p>
          </div>

          <div className="text-center">
            <p className="text-[12px] font-semibold text-gray-800 uppercase tracking-wide">50+ Projects</p>
            <p className="mt-1 text-[10px] text-gray-500 uppercase tracking-wider">shipped on time</p>
          </div>

          <div className="text-center">
            <p className="text-[12px] font-semibold text-gray-800 uppercase tracking-wide">Zero Downtime</p>
            <p className="mt-1 text-[10px] text-gray-500 uppercase tracking-wider">production ready</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
