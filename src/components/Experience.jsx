import {
    Briefcase,
    Calendar,
    ChevronRight,
    Code,
    Database,
    Layers,
    Layout,
    MapPin,
    Monitor,
    PenTool,
    Server,
    Terminal,
    Users
} from "lucide-react";
import { useEffect, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const experienceSection = document.getElementById("experience-section");
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => {
      if (experienceSection) {
        observer.unobserve(experienceSection);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Software Developer",
      company: "Embeetek Technologies",
      type: "Freelance",
      period: "Jan 2025 - Present · 5 mos",
      location: "Sangli, Maharashtra, India · Remote",
      skills: [
        { name: "Full-Stack Development", icon: Code },
        { name: "Team Management", icon: Users },
        { name: "Problem Solving", icon: PenTool },
        { name: "RESTful APIs", icon: Server },
        { name: "Backend Development", icon: Terminal },
        { name: "System Design", icon: Layers }
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Novixel Technologies",
      type: "Freelance",
      period: "Sep 2024 - Nov 2024 · 3 mos",
      location: "Remote",
      skills: [
        { name: "Teaching", icon: Monitor },
        { name: "Problem Solving", icon: PenTool },
        { name: "Technical Presentations", icon: Layout },
        { name: "Workshop Development", icon: Users },
        { name: "Node.js", icon: Server },
        { name: "React.js", icon: Code },
        { name: "MongoDB", icon: Database },
        { name: "Express.js", icon: Terminal }
      ]
    },
    {
      title: "Software Developer",
      company: "Knam Construction",
      type: "Freelance",
      period: "Dec 2023 - Jun 2024 · 7 mos",
      location: "Remote",
      skills: [
        { name: "Team Management", icon: Users },
        { name: "Node.js", icon: Server },
        { name: "SQL", icon: Database },
        { name: "React.js", icon: Code },
        { name: "Leadership", icon: Users }
      ]
    }
  ];

  return (
    <section
      id="experience-section"
      className="w-full py-20 bg-white dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Professional Experience
          </h2>
          <div
            className={`h-1 w-20 bg-blue-600 mx-auto rounded transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 w-20" : "opacity-0 w-0"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <div 
            className={`lg:col-span-1 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
                Work Timeline
              </h3>
              <div className="space-y-1">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExperience(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between ${
                      activeExperience === index
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <div>
                      <p className="font-medium">{exp.company}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{exp.period}</p>
                    </div>
                    <ChevronRight
                      size={18}
                      className={`transition-transform ${
                        activeExperience === index ? "rotate-90 text-blue-600" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-sm p-8 border border-slate-100 dark:border-slate-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                    {experiences[activeExperience].title}
                  </h3>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Briefcase size={16} className="mr-2" />
                    <span className="font-medium">{experiences[activeExperience].company}</span>
                    <span className="mx-2">•</span>
                    <span className="text-slate-500 dark:text-slate-400">{experiences[activeExperience].type}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm font-medium">{experiences[activeExperience].period}</span>
                </div>
              </div>

              {/* Location */}
              <div className="mb-8 flex items-center text-slate-600 dark:text-slate-400">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span>{experiences[activeExperience].location}</span>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Code size={18} className="mr-2" />
                  Skills & Technologies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experiences[activeExperience].skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white dark:bg-slate-800 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 group hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                    >
                      <div className="mr-3 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-all duration-300">
                        <skill.icon size={16} />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities or Projects Section (placeholder) */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">
                      <ChevronRight size={16} />
                    </div>
                    <p>Successfully implemented and optimized complex system architectures, resulting in improved performance and scalability.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">
                      <ChevronRight size={16} />
                    </div>
                    <p>Led development teams in delivering high-quality software solutions within project deadlines and requirements.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">
                      <ChevronRight size={16} />
                    </div>
                    <p>Developed robust RESTful APIs and backend systems that powered seamless frontend experiences.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;