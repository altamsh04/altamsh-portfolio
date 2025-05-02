import { Code, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 text-white px-6 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="z-10 flex flex-col items-center justify-center max-w-4xl w-full mx-auto">
        {/* Profile Image with minimal border */}
        <div className={`mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
            <div className="p-1 bg-slate-950 rounded-full">
              <img 
                src="https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746198212/altamsh-portfolio/assets/ywqqpbquz6vokfg04gjq.jpg" 
                alt="Altamsh Bairagdar" 
                className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 
          className={`text-3xl md:text-5xl font-bold mb-3 text-center transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Altamsh Bairagdar
        </h1>

        {/* Legend/Tagline */}
        <p 
          className={`text-lg md:text-xl text-blue-200/80 mb-10 text-center font-light transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          A Full Stack Developer Who Loves Backend Most
        </p>

        {/* CTA Button - Professional Style */}
        <div
          className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white text-base font-medium px-8 py-3 rounded-md shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <span>View Projects</span>
            <Code size={18} />
          </button>
        </div>

        {/* Social Media Icons - Professional Layout */}
        <div 
          className={`flex gap-8 mt-12 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <a href="https://github.com/altamsh04" className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-full transition-all duration-300" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/altamsh-bairagdar-324ab7254" className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-full transition-all duration-300" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:bairagdaraltamsh@gmail.com" className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-full transition-all duration-300" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        
        {/* Professional tag line */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-slate-400 font-light">
            Based in Miraj, India
          </p>
        </div>
        
        {/* Floating "More about me" button with animated arrow */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <button
            className="flex flex-col items-center justify-center text-blue-300 hover:text-blue-100 transition-colors duration-300 focus:outline-none group"
            aria-label="More about me"
          >
            <span className="text-sm font-medium mb-2">More about me</span>
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
      </div>
    </section>
  );
};

export default Hero;