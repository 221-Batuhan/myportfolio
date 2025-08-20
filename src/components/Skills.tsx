import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Brain,
  Cloud,
  Database,
  GitBranch,
  Globe
} from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const Skills: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];

  const skillCategories = [
    {
      title: "Front-End Development",
      icon: <Code className="w-8 h-8" />,
      description: "Modern web development with responsive design and user experience focus",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "TailwindCSS", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Algorithms & Data Structures", level: 85 }
      ]
    },
    {
      title: "Back-End Development",
      icon: <GitBranch className="w-8 h-8" />,
      description: "Server-side development with modern frameworks and databases",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Authentication & Authorization", level: 85 },
        { name: "Payment Integration (Stripe)", level: 80 },
        { name: "Content Management", level: 85 },
        { name: "API Security", level: 80 }
      ]
    },
    {
      title: "Database & Data Management",
      icon: <Database className="w-8 h-8" />,
      description: "Database design, management, and optimization",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Database Design", level: 85 },
        { name: "Data Modeling", level: 80 },
        { name: "Query Optimization", level: 80 },
        { name: "NoSQL & SQL", level: 85 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      description: "Artificial intelligence and machine learning development",
      skills: [
        { name: "Python", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "AI Engineering", level: 85 },
        { name: "Neural Networks", level: 80 },
        { name: "Model Deployment", level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      description: "Cloud computing and development operations",
      skills: [
        { name: "AWS Cloud Services", level: 85 },
        { name: "Google Cloud Platform", level: 80 },
        { name: "IT Automation", level: 85 },
        { name: "Python Scripting", level: 90 },
        { name: "System Administration", level: 80 },
        { name: "Cloud Security", level: 75 }
      ]
    },
    {
      title: "Project Management & Tools",
      icon: <Globe className="w-8 h-8" />,
      description: "Agile methodologies and development tools",
      skills: [
        { name: "Agile Project Management", level: 85 },
        { name: "Git & Version Control", level: 90 },
        { name: "Team Leadership", level: 80 },
        { name: "Scrum Methodology", level: 85 },
        { name: "Project Planning", level: 80 },
        { name: "Cross-functional Collaboration", level: 85 }
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

        {/* Main Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Advanced Skills & Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced Skills & Specializations
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Specialized expertise and advanced technologies I'm proficient in
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="skill-badge">E-commerce Development</span>
              <span className="skill-badge">Blog Platform Development</span>
              <span className="skill-badge">Payment Processing</span>
              <span className="skill-badge">User Authentication</span>
              <span className="skill-badge">Content Management</span>
              <span className="skill-badge">SEO Optimization</span>
              <span className="skill-badge">Mobile-First Design</span>
              <span className="skill-badge">Progressive Web Apps</span>
              <span className="skill-badge">API Development</span>
              <span className="skill-badge">Database Optimization</span>
              <span className="skill-badge">Cloud Deployment</span>
              <span className="skill-badge">DevOps Practices</span>
              <span className="skill-badge">Agile Methodologies</span>
              <span className="skill-badge">Team Collaboration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
