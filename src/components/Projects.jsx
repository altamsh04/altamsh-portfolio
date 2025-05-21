import {
  ArrowUpRight,
  Award,
  Braces,
  Brain,
  Briefcase,
  ChevronDown,
  Code,
  CodeSquare,
  ExternalLink,
  Filter,
  Laptop,
  Monitor,
  Smartphone,
  Tag,
  Terminal,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("personal");
  const [showAllPersonalProjects, setShowAllPersonalProjects] = useState(false);

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

    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  // Reset showAllPersonalProjects when category or type changes
  useEffect(() => {
    setShowAllPersonalProjects(false);
  }, [activeCategory, activeType]);

  const categories = [
    { id: "all", name: "All Projects", icon: Filter },
    { id: "web", name: "Web", icon: Laptop },
    { id: "android", name: "Android", icon: Smartphone },
    { id: "desktop", name: "Desktop", icon: Monitor },
    { id: "cli", name: "CLI Tools", icon: Terminal },
    { id: "api", name: "APIs", icon: Braces },
    { id: "ai", name: "AI", icon: Brain },
  ];

  const projectTypes = [
    { id: "personal", name: "Personal", icon: Code },
    { id: "freelance", name: "Freelance", icon: Briefcase },
    { id: "hackathon", name: "Hackathon", icon: Award },
  ];

  const personalProjects = [
    {
      type: "web",
      title: "RIT-Attendance-Tracker",
      description:
        "A Chrome extension that provides enhanced attendance analytics for RIT students.",
      technologies: ["Chrome Extension", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/altamsh04/RIT-Attendance-Tracker",
      image:
        "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746200946/altamsh-portfolio/projects/web/gz7y3jptfv2a6pokucjy.png",
    },
    {
      type: "web",
      title: "AI Code Analyzer",
      description:
        "A sophisticated tool designed to assist developers in analyzing code for performance efficiency and security vulnerabilities. Leverages advanced AI models to provide insights on time and space complexity, as well as identifying potential security risks.",
      technologies: ["ReactJS", "Gemini API"],
      github: "https://github.com/altamsh04/ai-code-analyzer",
      image:
        "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746201030/altamsh-portfolio/projects/web/kgl9vvurwqvjvlm8xlhy.png",
    },
    {
      type: "web",
      title: "Ghibli Meme Maker",
      description:
        "Transform your favorite Studio Ghibli moments into hilarious memes with our easy-to-use meme creator.",
      technologies: ["ReactJS", "TailwindCSS"],
      github: "https://github.com/altamsh04/ghibli-meme-maker",
      live: "https://www.ghiblimemes.fun/",
      image:
        "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746201464/altamsh-portfolio/projects/web/epex8ns5cijyftq89x7t.png",
    },
    {
      type: "web",
      title: "GDG RIT Hiring Portal",
      description:
        "A portal for Google Developers student club at Rajaram bapu institute of technologies where students can apply on the team hiring and admins leads can manage everything.",
      technologies: ["ReactJS", "NodeJS", "Firebase", "TailwindCSS"],
      live: "https://gdg-rit-2025.vercel.app/",
      image:
        "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746201783/altamsh-portfolio/projects/web/doiukxgpqxbwzkhvfclc.png",
    },
    {
      type: "web",
      title: "followchat",
      description: "Chat Application built with modern web technologies.",
      technologies: ["ReactJS", "NodeJS", "MongoDB"],
      github: "https://github.com/altamsh04/followchat",
    },
    {
      type: "android",
      title: "RoomieChat",
      description:
        "RoomieChat is a simple chat room based application. It allows users to join chat rooms, send and receive messages in real-time, and manage their chat room participation.",
      technologies: ["Android", "Java", "XML", "Firebase"],
      github: "https://github.com/altamsh04/RoomieChat",
      image:
        "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746202720/altamsh-portfolio/projects/android/of3meovje56iwwprzkeq.png",
    },
    {
      type: "android",
      title: "Daily Random Quotes App",
      description:
        "The Daily Random Quotes App is an Android application designed to provide users with daily inspirational quotes. The app fetches random quotes from an online API and displays them in a user-friendly interface.",
      technologies: ["Android", "Java", "XML", "APIs"],
      github: "https://github.com/altamsh04/Daily-Random-Quotes-App",
      image:
        "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746202862/altamsh-portfolio/projects/android/twchvdkijxewbhlycbos.png",
    },
    {
      type: "desktop",
      title: "XEditor",
      description:
        "XEditor is open source text editor with minimalist text editing features for documentation, journaling and no suggestion coding.",
      technologies: ["Java", "Swing"],
      github: "https://github.com/altamsh04/XEditor",
    },
    {
      type: "cli",
      title: "FileMan",
      description:
        "This is a simple file manipulation project in bash script. It is used to search, create, delete files or directories and to set or get permissions using simple menu choices without needing terminal commands.",
      technologies: ["Linux", "Bash"],
      github: "https://github.com/altamsh04/File-Manipulation",
      image:
        "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746203674/altamsh-portfolio/projects/clitools/ba3uacjvxu55kbisieqr.png",
    },
    {
      type: "cli",
      title: "reminder-cli",
      description:
        "Reminder CLI is a lightweight, user-friendly command-line tool designed to help you manage tasks and reminders directly from your terminal. With simple and intuitive commands, you can quickly set, list, and track your personal reminders.",
      technologies: ["JavaScript", "CLI", "Data Structure"],
      github: "https://github.com/altamsh04/reminder-cli",
      live: "https://www.npmjs.com/package/@altamsh04/reminder-cli",
      image:
        "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746203983/altamsh-portfolio/projects/clitools/atqmjqm3zyjgqdestlvu.png",
    },
    {
      type: "api",
      title: "Random Quotes API",
      description:
        "Simple Random Quote API using Express.js, provides a quick way to access motivational quotes. Retrieve a random quote and its author for use in your projects, websites, or apps. Ideal for adding daily inspiration to your platform.",
      technologies: ["JavaScript", "NodeJS", "Express"],
      github: "https://github.com/altamsh04/RandomQuotes-API",
      live: "https://random-quotes-freeapi.vercel.app/",
      image:
        "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746204119/altamsh-portfolio/projects/apis/zywlfcvd4hqjx1udoahf.png",
    },
  ];

  const freelanceProjects = [
    {
      type: "web",
      title: "www.embeetek.com",
      description:
        "Personal Organization website for project inquiry, project showcase, overall company services, features etc with admin panel.",
      technologies: [],
      organization: "Embeetek Technologies",
      status: "In Progress",
      live: "http://www.embeetek.com",
    },
    {
      type: "web",
      title: "www.basuengineering.in",
      description:
        "Personal Organization website for products inquiry, overall company services, features etc with admin panel.",
      technologies: [],
      organization: "Basu Engineering",
      status: "Production",
      live: "http://www.basuengineering.in",
    },  
    {
      type: "web",
      title: "SiteIQ",
      description:
        "A personal site management website for Knam Construction which helps to manage all records of the sites including payments, employees data, materials management etc.",
      technologies: [],
      organization: "Knam Construction",
      status: "Production",
    },
    {
      type: "web",
      title: "www.knamconstruction.com",
      description:
        "Organization website for portfolio, services, and all about customer engagements.",
      technologies: [],
      organization: "Knam Construction",
      status: "In Progress",
    },
    {
      type: "ai",
      title: "Sign Language Interpretation",
      description:
        "AI Based Smart Glasses where I contributed on Image Processing, CNN, MQTT Protocols.",
      technologies: [],
      organization: "Embeetek Technologies",
      status: "Production",
    },
    {
      type: "api",
      title: "AutoSMS",
      description:
        "Write effective system for auto sms sending with integration of production level Rest APIs.",
      technologies: [],
      organization: "Anonymsms",
      status: "Production",
    },
  ];

  const hackathonProjects = [
    {
      type: "web",
      title: "Collaborative Project Management Tools for Remote Teams",
      description:
        "A comprehensive project management tool designed for remote teams to collaborate effectively.",
      technologies: ["MongoDB", "Express", "React", "NodeJS"],
      github: "https://github.com/altamsh04/hackathon-project-at-sgu",
      image:
        "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746206502/altamsh-portfolio/projects/hackathon/rfypcibyb2ni2kuvlpzn.png",
      event: "Sanjay Ghodawat University",
    },
    {
      type: "ai",
      title: "AI Powered LMS",
      description:
        "A learning management system powered by AI, using RAG (Retrieval-Augmented Generation) architecture for enhanced learning experiences.",
      technologies: ["AI", "RAG", "Gen AI", "React", "Django"],
      github: "https://github.com/altamsh04/aipoweredlms-backend",
      image:
        "https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746207139/altamsh-portfolio/projects/hackathon/evhkarc33l28rx8qgur0.jpg",
      features: [
        "FTP Upload + Processing for teacher materials",
        "RAG Core (Retriever + Generator) for accurate responses",
        "Student Panel with Notes Query, Quizzes, and Concept Visualization",
        "Teacher Panel with PPT Generation, Custom Question Papers, and Question Banks",
      ],
      event: "Rajarambapu Institute Of Technology",
    },
  ];

  const getProjectsByType = () => {
    let projects = [];
    
    if (activeType === "personal") {
      projects = personalProjects;
      
      // If "All Projects" is selected and we're in personal projects,
      // limit to first 3 projects unless showAllPersonalProjects is true
      if (activeCategory === "all" && !showAllPersonalProjects) {
        return projects.slice(0, 3);
      }
    } 
    else if (activeType === "freelance") {
      projects = freelanceProjects;
    }
    else if (activeType === "hackathon") {
      projects = hackathonProjects;
    }

    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.type === activeCategory);
  };

  const filteredProjects = getProjectsByType();
  
  // Determine if we should show the Load More button
  const shouldShowLoadMore = 
    activeType === "personal" && 
    activeCategory === "all" && 
    !showAllPersonalProjects && 
    personalProjects.length > 3;

  // Get the number of hidden projects
  const hiddenProjectsCount = 
    activeType === "personal" && 
    activeCategory === "all" ? 
    personalProjects.length - 3 : 0;

  return (
    <section
      id="projects-section"
      className="w-full py-20 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            My Projects
          </h2>
          <div
            className={`h-1 w-20 bg-blue-600 mx-auto rounded transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 w-20" : "opacity-0 w-0"
            }`}
          ></div>
          <p
            className={`mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Showcasing my journey through code - from personal explorations to
            professional client work and hackathon innovations.
          </p>
        </div>

        {/* Project Type Selector */}
        <div
          className={`mb-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setActiveType(type.id);
                  setActiveCategory("all");
                  setShowAllPersonalProjects(false);
                }}
                className={`flex items-center px-5 py-3 rounded-full transition-all ${
                  activeType === type.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                <type.icon size={18} className="mr-2" />
                <span className="font-medium">{type.name}</span>
                <span className="ml-2 text-xs bg-opacity-20 rounded-full px-2 py-0.5 bg-slate-200 dark:bg-slate-700">
                  {
                    (type.id === "personal"
                      ? personalProjects
                      : type.id === "freelance"
                      ? freelanceProjects
                      : hackathonProjects
                    ).length
                  }
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div
          className={`mb-10 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setShowAllPersonalProjects(false);
                }}
                className={`flex items-center px-4 py-2 rounded-lg text-sm transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800"
                }`}
              >
                <category.icon size={14} className="mr-1.5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 group relative flex flex-col transition-all duration-700 delay-${
                  500 + index * 100
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Project Image */}
                {project.image ? (
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                          >
                            <Code size={16} className="text-slate-800" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                          >
                            <ExternalLink
                              size={16}
                              className="text-slate-800"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                    {project.type === "web" && (
                      <Laptop size={40} className="text-white/80" />
                    )}
                    {project.type === "android" && (
                      <Smartphone size={40} className="text-white/80" />
                    )}
                    {project.type === "desktop" && (
                      <Monitor size={40} className="text-white/80" />
                    )}
                    {project.type === "cli" && (
                      <Terminal size={40} className="text-white/80" />
                    )}
                    {project.type === "api" && (
                      <Braces size={40} className="text-white/80" />
                    )}
                    {project.type === "ai" && (
                      <Brain size={40} className="text-white/80" />
                    )}
                  </div>
                )}

                {/* Project Content */}
                <div className="p-5 flex-grow flex flex-col">
                  {/* Type Badge */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full">
                      {project.type.toUpperCase()}
                    </span>
                    {project.status && (
                      <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2.5 py-1 rounded-full">
                        {project.status}
                      </span>
                    )}
                    {project.organization && (
                      <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2.5 py-1 rounded-full flex items-center">
                        <Briefcase size={12} className="mr-1" />
                        {project.organization}
                      </span>
                    )}
                    {project.event && (
                      <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2.5 py-1 rounded-full flex items-center">
                        <Award size={12} className="mr-1" />
                        {project.event}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                    {project.description.length > 120
                      ? `${project.description.substring(0, 120)}...`
                      : project.description}
                  </p>

                  {/* Features if available */}
                  {project.features && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center">
                        <Workflow size={12} className="mr-1" />
                        KEY FEATURES
                      </h4>
                      <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-1 mt-0.5 text-blue-500 dark:text-blue-400">
                              <ArrowUpRight size={12} />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {project.features.length > 2 && (
                          <li className="text-blue-500 dark:text-blue-400 text-xs">
                            +{project.features.length - 2} more features
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded flex items-center"
                        >
                          <Tag size={12} className="mr-1" />
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex justify-between">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                        >
                          <Code size={14} className="mr-1" />
                          Source Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                        >
                          <ExternalLink size={14} className="mr-1" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-500">
              <CodeSquare size={48} className="mb-4" />
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p>No projects match the current filter criteria</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {shouldShowLoadMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllPersonalProjects(true)}
              className="flex items-center justify-center mx-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md shadow-blue-500/20"
            >
              <span className="font-medium mr-2">Load More</span>
              <span className="text-xs bg-blue-500 rounded-full px-2 py-0.5">
                +{hiddenProjectsCount}
              </span>
              <ChevronDown size={16} className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;