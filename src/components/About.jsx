import { Award, Book, BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
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

    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  const educationData = [
    {
      period: "2023-2026",
      degree: "BTech In Computer Science And Engineering (Current)",
      institution: "Rajarambapu Institute Of Technology",
      grade: "8.35 CGPA",
      coursework:
        "Operating System, Computer Networking & Database Management etc.",
      icon: GraduationCap,
    },
    {
      period: "2020-2023",
      degree: "Diploma In Computer Engineering",
      institution: "Government Polytechnic Miraj",
      grade: "92.91 %",
      coursework: "C, C++, Java, Python, Web & Android etc.",
      icon: BookOpen,
    },
    {
      period: "2019-2020",
      degree: "SSC",
      institution: "Vidya Mandir Prashala, Miraj",
      grade: "83.40 %",
      coursework: "Maths, Science, English etc.",
      icon: Award,
    },
  ];

  return (
    <section
      id="about-section"
      className="w-full py-20 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            About Me
          </h2>
          <div
            className={`h-1 w-20 bg-blue-600 mx-auto rounded transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 w-20" : "opacity-0 w-0"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Me Text */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
              Professional Overview
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hello, I'm Altamsh Bairagdar, a dedicated Computer Science
                Engineering student with a passion for building robust digital
                solutions.
              </p>
              <p>
                Currently pursuing my B.Tech degree at Rajarambapu Institute of
                Technology, I balance academic excellence with practical
                industry experience. Throughout my academic journey, I've
                developed a comprehensive understanding of software development
                fundamentals and best practices.
              </p>
              <p>
                My professional experience includes collaborations with
                innovative startups as a freelance developer, where I've
                contributed to impactful Android and web development projects.
                These engagements have sharpened my ability to translate
                business requirements into technical solutions while adhering to
                industry standards.
              </p>
              <p>
                Recently, I've cultivated a deeper expertise in backend
                technologies and system architecture, enabling me to design and
                implement efficient, scalable solutions. I'm particularly
                interested in optimizing database performance and creating
                resilient API structures that support seamless frontend
                experiences.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-8">
              {educationData.map((education, index) => (
                <div
                  key={index}
                  className={`relative pl-10 pb-8 border-l-2 border-blue-100 dark:border-blue-900 transition-all duration-700 delay-${
                    300 + index * 100
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                    <education.icon size={14} className="text-white" />
                  </div>

                  {/* Period */}
                  <div className="flex items-center mb-1 text-blue-600 dark:text-blue-400 font-medium">
                    <Calendar size={16} className="mr-2" />
                    <span>{education.period}</span>
                  </div>

                  {/* Degree */}
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">
                    {education.degree}
                  </h4>

                  {/* Institution */}
                  <div className="flex items-center mb-2 text-slate-600 dark:text-slate-400">
                    <MapPin size={16} className="mr-2" />
                    <span>{education.institution}</span>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center mb-2 text-slate-600 dark:text-slate-400">
                    <Book size={16} className="mr-2" />
                    <span>{education.grade}</span>
                  </div>

                  {/* Coursework */}
                  <p className="text-sm text-slate-500 dark:text-slate-500 border-l-2 border-blue-200 dark:border-blue-800 pl-3 py-1">
                    <span className="font-medium">Coursework:</span>{" "}
                    {education.coursework}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
