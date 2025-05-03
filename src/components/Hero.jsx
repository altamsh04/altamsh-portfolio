import { Code, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import QuoteArchitecture from "./QuoteArchitecture";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showQuoteArchitecture, setShowQuoteArchitecture] = useState(false);
  const [fetchTrigger, setFetchTrigger] = useState(0);
  const quoteRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleQuoteButtonClick = () => {
    if (showQuoteArchitecture) {
      // If already showing, just trigger a new fetch
      setFetchTrigger(prev => prev + 1);
      if (quoteRef.current) {
        quoteRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // If not showing yet, show and then trigger fetch
      setShowQuoteArchitecture(true);
      setFetchTrigger(prev => prev + 1);
      setTimeout(() => {
        if (quoteRef.current) {
          quoteRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 text-white px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="z-10 flex flex-col items-center justify-center max-w-4xl w-full mx-auto">
        {/* Profile Image with minimal border */}
        <div
          className={`mb-6 md:mb-8 transition-all duration-700 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
            <div className="p-1 bg-slate-950 rounded-full">
              <img
                src="https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746198212/altamsh-portfolio/assets/ywqqpbquz6vokfg04gjq.jpg"
                alt="Altamsh Bairagdar"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1
          className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-3 text-center transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Altamsh Bairagdar
        </h1>

        {/* Legend/Tagline */}
        <p
          className={`text-base sm:text-lg md:text-xl text-blue-200/80 mb-6 sm:mb-8 md:mb-10 text-center font-light transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          A Full Stack Developer Who Loves Backend Most
        </p>

        {/* CTA Buttons - Professional Style */}
        <div
          className={`flex flex-wrap gap-3 sm:gap-4 justify-center transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => {
              const section = document.getElementById("projects-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-md shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>View Projects</span>
            <Code size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>

          <button
            onClick={handleQuoteButtonClick}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-md shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>Dev Quote</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="sm:w-[18px] sm:h-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
          </button>
        </div>

        {/* Quote Architecture Component */}
        {showQuoteArchitecture && (
          <div 
            ref={quoteRef}
            className="w-full max-w-4xl mx-auto mt-12 sm:mt-16 animate-fadeIn"
          >
            <QuoteArchitecture key={fetchTrigger} externalFetchTrigger={fetchTrigger} />
          </div>
        )}

        {/* Social Media Icons - Professional Layout */}
        <div
          className={`flex gap-6 sm:gap-8 mt-10 sm:mt-12 transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="https://github.com/altamsh04"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-full transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={18} className="sm:w-[20px] sm:h-[20px]" />
          </a>
          <a
            href="https://linkedin.com/in/altamsh-bairagdar-324ab7254"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-full transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="sm:w-[20px] sm:h-[20px]" />
          </a>
          <a
            href="mailto:bairagdaraltamsh@gmail.com"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-full transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={18} className="sm:w-[20px] sm:h-[20px]" />
          </a>
        </div>
      </div>

      {/* Scroll indicator - Only show when QuoteArchitecture isn't displayed */}
      {!showQuoteArchitecture && (
        <div
          className={`absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-600 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className="flex flex-col items-center justify-center text-blue-300 hover:text-blue-100 transition-colors duration-300 focus:outline-none group"
            aria-label="More about me"
            onClick={() => {
              window.scrollBy({ top: 500, behavior: "smooth" });
            }}
          >
            <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300 animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform transition-transform duration-300 group-hover:translate-y-1"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;