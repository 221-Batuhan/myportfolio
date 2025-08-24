import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Code, Award, Languages } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];

  const features = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: t.about.features.student.title,
      description: t.about.features.student.description
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t.about.features.international.title,
      description: t.about.features.international.description
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: t.about.features.developer.title,
      description: t.about.features.developer.description
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t.about.features.member.title,
      description: t.about.features.member.description
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {}
              <div className="relative w-96 h-96">
                {}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl shadow-2xl"></div>
                
                {}
                <div className="absolute inset-4 bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-600/50"></div>
                
                {}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white/60 dark:border-gray-500/60">
                    <img 
                      src="/profile-photo.jpg" 
                      alt="Batuhan Açan" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {}
                <div className="absolute top-3 right-3 w-4 h-4 bg-primary-500/60 rounded-full shadow-md"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 bg-primary-400/60 rounded-full shadow-md"></div>
              </div>
            </div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t.about.whoIAm}
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                {t.about.bio1}
              </p>
              
              <p>
                {t.about.bio2}
              </p>
              
              <p>
                {t.about.bio3}
              </p>
            </div>

            {}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
              <div className="flex items-center space-x-3 mb-3">
                <Languages className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <h4 className="font-semibold text-gray-900 dark:text-white">{t.about.languages}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">Turkish (Native)</span>
                <span className="skill-badge">English (Fluent)</span>
                <span className="skill-badge">Russian (Learning)</span>
              </div>
            </div>

            {}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
