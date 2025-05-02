import { Calendar, Check, Clock, MapPin, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const achievementsSection = document.getElementById("achievements-section");
    if (achievementsSection) {
      observer.observe(achievementsSection);
    }

    return () => {
      if (achievementsSection) {
        observer.unobserve(achievementsSection);
      }
    };
  }, []);

  const achievementsData = [
    {
      title: "Gate 2025 Qualified",
      image: "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746212868/altamsh-portfolio/achivements/jg1xf6bpg2ge6pyvj2xb.png",
      organization: "Hosted By IIT Roorkee",
      period: "Feb 2025"
    },
    {
      title: "Android Team Lead",
      image: "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746212863/altamsh-portfolio/achivements/e3j6kuem3ven9sehqd73.jpg",
      organization: "GDG On Campus, RIT",
      period: "Jan 2025 - Present · 5 mos"
    },
    {
      title: "Open Source Contributor",
      image: "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746212864/altamsh-portfolio/achivements/odut75vkwmbpozlr8ek9.jpg",
      organization: "GirlScript Summer of Code",
      period: "Oct 2024 - Dec 2024 · 3 mos"
    }
  ];

  return (
    <section
      id="achievements-section"
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
            Achievements
          </h2>
          <div 
            className={`h-1 w-20 bg-blue-600 mx-auto rounded transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 w-20" : "opacity-0 w-0"
            }`}
          ></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-10">
          {achievementsData.map((achievement, index) => (
            <div 
              key={index}
              className={`bg-slate-50 dark:bg-slate-900 rounded-xl shadow-md overflow-hidden transition-all duration-700 delay-${200 + index * 150} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Achievement Details */}
                <div className="lg:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mr-3 border-2 border-blue-600 shadow-md">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover object-center" 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        {achievement.title}
                      </h3>
                      {achievement.organization && (
                        <p className="text-blue-600 dark:text-blue-400">
                          {achievement.organization}
                        </p>
                      )}
                    </div>
                  </div>

                  {achievement.location && (
                    <div className="flex items-center mb-4 text-slate-600 dark:text-slate-300">
                      <MapPin size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <span>{achievement.location}</span>
                    </div>
                  )}

                  {achievement.period && !achievement.positions && (
                    <div className="flex items-center mb-4 text-slate-600 dark:text-slate-300">
                      <Calendar size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <span>{achievement.period}</span>
                    </div>
                  )}

                  {achievement.description && !achievement.positions && (
                    <p className="mb-4 text-slate-700 dark:text-slate-300">
                      {achievement.description}
                    </p>
                  )}

                  {/* For positions-based achievements like GDG */}
                  {achievement.positions && (
                    <div className="space-y-6 mt-4">
                      {achievement.positions.map((position, posIndex) => (
                        <div key={posIndex} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4 py-1">
                          <h4 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center">
                            {position.role}
                          </h4>
                          <div className="flex items-center mb-2 text-slate-600 dark:text-slate-400">
                            <Clock size={14} className="mr-2 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm">{position.period}</span>
                          </div>
                          <p className="mb-2 text-slate-700 dark:text-slate-300 text-sm">
                            {position.description}
                          </p>
                          <div className="flex items-center text-slate-600 dark:text-slate-400">
                            <Zap size={14} className="mr-2 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium">{position.skills}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills section */}
                  {achievement.skills && !achievement.positions && (
                    <div className="mt-4">
                      <h4 className="flex items-center text-slate-800 dark:text-white font-medium mb-2">
                        Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {achievement.skills.split(',').map((skill, skillIndex) => (
                          <div 
                            key={skillIndex}
                            className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm flex items-center"
                          >
                            <Check size={12} className="mr-1" />
                            {skill.trim()}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;