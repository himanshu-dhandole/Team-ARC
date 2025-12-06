"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  gradient: string;
}

const TestimonialCard = ({ quote, author, gradient }: TestimonialProps) => {
  return (
    <div
      className={`flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl p-10 flex flex-col justify-between min-h-[380px] ${gradient}`}
    >
      {/* Stars */}
      <div className="flex items-center justify-center gap-1 mb-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 100 100"
          >
            <path
              d="M50 8
       L58 38
       L88 38
       L63 55
       L72 85
       L50 67
       L28 85
       L37 55
       L12 38
       L42 38
       Z"
              fill="white"
            />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[18px] text-white leading-relaxed font-light mb-12 flex-1">
        {quote}
      </p>

      {/* Author */}
      <p className="text-[13px] text-white font-medium tracking-wider uppercase">
        {author}
      </p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote:
        "TEAM ARC delivered our Web3 protocol on time with production-ready quality. Their blockchain expertise and attention to detail made all the difference.",
      author: "SARAH W.",
      gradient: "bg-gradient-to-br from-blue-400 via-blue-300 to-yellow-200",
    },
    {
      quote:
        "Working with TEAM ARC was seamless. They built our backend infrastructure with Spring Boot and handled complex microservices architecture flawlessly.",
      author: "ANDREW P.",
      gradient: "bg-gradient-to-br from-green-500 via-green-400 to-lime-300",
    },
    {
      quote:
        "The team shipped our full-stack product faster than expected. Their GenAI integrations and modern frontend work exceeded our expectations.",
      author: "SONIA H.",
      gradient: "bg-gradient-to-br from-cyan-400 via-teal-300 to-emerald-200",
    },
    {
      quote:
        "TEAM ARC transformed our idea into a scalable platform. Their expertise in both Web2 and Web3 technologies gave us the best of both worlds.",
      author: "MICHAEL K.",
      gradient: "bg-gradient-to-br from-purple-400 via-pink-300 to-rose-200",
    },
    {
      quote:
        "From smart contracts to UI/UX, the team handled everything with professionalism. Our DeFi platform launched without a single issue.",
      author: "JENNIFER L.",
      gradient: "bg-gradient-to-br from-orange-400 via-amber-300 to-yellow-200",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById("testimonials-container");
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="relative py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[52px] sm:text-[68px] font-serif tracking-tight text-gray-900 leading-tight mb-2">
            <span className="italic font-light text-gray-600">Read</span> what
            people say
          </h2>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => handleScroll("left")}
            className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Testimonials Container */}
        <div
          id="testimonials-container"
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
