import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cloud,
  Database,
  GitBranch
} from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const Skills: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      description: "Core programming languages I'm actively developing",
      skills: [
        { name: "JavaScript", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "HTML", level: 85 },
        { name: "CSS", level: 85 },
        { name: "Python", level: 65 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <GitBranch className="w-8 h-8" />,
      description: "Frontend technologies I'm currently learning and improving",
      skills: [
        { name: "React.js", level: 70 },
        { name: "TailwindCSS", level: 75 },
        { name: "Responsive Design", level: 80 },
        { name: "DOM Manipulation", level: 70 },
        { name: "Web APIs", level: 65 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-8 h-8" />,
      description: "Backend technologies I'm developing proficiency in",
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Express.js", level: 60 },
        { name: "MongoDB", level: 70 },
        { name: "RESTful APIs", level: 70 },
        { name: "Authentication", level: 65 }
      ]
    },
    {
      title: "Development Tools",
      icon: <Cloud className="w-8 h-8" />,
      description: "Development tools I'm becoming proficient with",
      skills: [
        { name: "Git & GitHub", level: 75 },
        { name: "VS Code", level: 80 },
        { name: "npm/yarn", level: 75 },
        { name: "Chrome DevTools", level: 70 },
        { name: "Postman", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.skills.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Skills I'm Developing
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Key areas I'm actively working on to become a well-rounded developer
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="skill-badge">Full-Stack Development</span>
              <span className="skill-badge">Responsive Web Design</span>
              <span className="skill-badge">API Development</span>
              <span className="skill-badge">Database Management</span>
              <span className="skill-badge">Cloud Deployment</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
