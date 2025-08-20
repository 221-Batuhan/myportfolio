import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase, Globe, Award, Trophy, FileText } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const Experience: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];

  const experiences = [
    {
      id: 1,
      type: 'education',
      title: t.experience.items.education.title,
      organization: 'Altinbas University',
      location: 'Istanbul, Turkey',
      period: '2022 - 2026',
      description: t.experience.items.education.description,
      icon: <GraduationCap className="w-6 h-6" />,
      highlights: t.experience.items.education.highlights
    },
    {
      id: 2,
      type: 'experience',
      title: t.experience.items.erasmus.title,
      organization: 'Bialystok University of Technology',
      location: 'Bialystok, Poland',
      period: 'Feb 2025 - Jul 2025',
      description: t.experience.items.erasmus.description,
      icon: <Globe className="w-6 h-6" />,
      highlights: t.experience.items.erasmus.highlights
    },
    {
      id: 3,
      type: 'experience',
      title: t.experience.items.tedx.title,
      organization: t.experience.items.tedx.organization,
      location: 'Istanbul, Turkey',
      period: 'September 2024 - Present',
      description: t.experience.items.tedx.description,
      icon: <Award className="w-6 h-6" />,
      highlights: t.experience.items.tedx.highlights
    },
    {
      id: 4,
      type: 'achievement',
      title: t.experience.items.karate.title,
      organization: t.experience.items.karate.organization,
      location: 'Turkey',
      period: t.experience.items.karate.period,
      description: t.experience.items.karate.description,
      icon: <Trophy className="w-6 h-6" />,
      highlights: t.experience.items.karate.highlights
    },
    {
      id: 5,
      type: 'project',
      title: t.experience.items.projects.title,
      organization: t.experience.items.projects.organization,
      location: 'Remote',
      period: '2025 - Present',
      description: t.experience.items.projects.description,
      icon: <Briefcase className="w-6 h-6" />,
      highlights: t.experience.items.projects.highlights
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "Meta Front-End Developer Professional Certificate",
      organization: "Coursera",
      date: "2026",
      description: "Comprehensive front-end development certification covering React, JavaScript, and modern web technologies."
    },
    {
      id: 2,
      title: "Meta Back-End Developer Professional Certificate",
      organization: "Coursera",
      date: "2026",
      description: "Advanced back-end development certification focusing on server-side programming and database management."
    },
    {
      id: 3,
      title: "IBM AI Engineering Professional Certificate",
      organization: "Coursera",
      date: "2026",
      description: "Specialized AI engineering certification covering machine learning, deep learning, and AI applications."
    },
    {
      id: 4,
      title: "DeepLearning.AI TensorFlow Developer Certificate",
      organization: "Coursera",
      date: "2026",
      description: "Expert-level TensorFlow certification for building and deploying machine learning models."
    },
    {
      id: 5,
      title: "Google IT Automation with Python Professional Certificate",
      organization: "Coursera",
      date: "2026",
      description: "Python-based IT automation certification covering scripting, automation, and system administration."
    },
    {
      id: 6,
      title: "AWS Cloud Foundations",
      organization: "Coursera",
      date: "2026",
      description: "Fundamental AWS cloud computing certification covering core services and best practices."
    },
    {
      id: 7,
      title: "Google Cloud Fundamentals",
      organization: "Coursera",
      date: "2026",
      description: "Essential Google Cloud Platform certification for cloud infrastructure and services."
    },
    {
      id: 8,
      title: "Agile Project Management by Google",
      organization: "Coursera",
      date: "2026",
      description: "Professional project management certification focusing on Agile methodologies and team leadership."
    },
    {
      id: 9,
      title: "Databases for Developers: PostgreSQL & MongoDB",
      organization: "Coursera",
      date: "2026",
      description: "Comprehensive database development certification covering both SQL and NoSQL database technologies."
    },
    {
      id: 10,
      title: "Responsive Web Design",
      organization: "FreeCodeCamp",
      date: "2026",
      description: "Completed responsive web design certification covering HTML, CSS, and modern web development principles."
    },
    {
      id: 11,
      title: "JavaScript Algorithms & Data Structures",
      organization: "FreeCodeCamp",
      date: "2026",
      description: "Advanced JavaScript certification focusing on algorithms, data structures, and programming fundamentals."
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
      case 'experience':
        return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400';
      case 'project':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400';
      case 'achievement':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'education':
        return t.experience.labels.education;
      case 'experience':
        return t.experience.labels.experience;
      case 'project':
        return t.experience.labels.project;
      case 'achievement':
        return t.experience.labels.achievement;
      default:
        return t.experience.labels.other;
    }
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className="card p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getTypeColor(experience.type)}`}>
                          {experience.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {experience.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {experience.organization}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(experience.type)}`}>
                        {getTypeLabel(experience.type)}
                      </span>
                    </div>

                    {/* Location and Period */}
                    <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {experience.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t.experience.certificates.title}
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t.experience.certificates.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {certificate.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {certificate.organization}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                  {certificate.date}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {certificate.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.experience.future.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t.experience.future.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {t.experience.future.skills.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
