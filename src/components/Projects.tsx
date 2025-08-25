import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];

  const projects = [
    {
      id: 1,
      title: "NextWeather App",
      description: "A beautiful, modern weather app built with Next.js and TailwindCSS. Features real-time weather data, dark/light mode toggle, and responsive design with search functionality for any city worldwide.",
      image: "/project-images/weather-mainpage.jpg",
      category: "frontend",
      tech: ["Next.js", "TailwindCSS", "JavaScript", "OpenWeatherMap API", "Responsive Design"],
      github: "https://github.com/221-Batuhan/my-weatherapp",
      demo: "https://nextweather221.netlify.app/", 
      featured: true,
      slug: "nextweather-app",
      details: {
        overview: "A modern weather application that provides real-time weather information for any city worldwide. Built with Next.js and TailwindCSS, featuring a beautiful UI with dark/light mode toggle and responsive design.",
        features: [
          "Real-time weather data from OpenWeatherMap API",
          "Dark/Light mode toggle with localStorage persistence",
          "Fully responsive design for mobile, tablet, and desktop",
          "Modern UI with smooth gradients and animations",
          "Search functionality for any city worldwide",
          "Fast and optimized with Next.js",
          "Beautiful weather icons and detailed information display"
        ],
        challenges: [
          "Integrating external weather API with proper error handling",
          "Implementing responsive design for all device sizes",
          "Creating smooth animations and transitions",
          "Managing state for theme switching"
        ],
        solutions: [
          "Used OpenWeatherMap API with comprehensive error handling",
          "Mobile-first responsive design with TailwindCSS",
          "Framer Motion for smooth animations and transitions",
          "localStorage for theme persistence across sessions"
        ],
        images: [
          "/project-images/weather-mainpage.jpg",
          "/project-images/weather-search.jpg",
          "/project-images/weather-darkmode.jpg",
          "/project-images/weather-mobile.jpg"
        ]
      }
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce website with user authentication, product management, shopping cart, and payment integration. Currently in development.",
      image: "/project-images/ecommerce-mainpage.jpg",
      category: "fullstack",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/221-Batuhan/ecommerce-store",
      demo: "#", 
      featured: true,
      slug: "ecommerce-platform",
      details: {
        overview: "A comprehensive e-commerce solution built with modern web technologies, featuring a complete shopping experience from product browsing to checkout.",
        features: [
          "User authentication and authorization",
          "Product catalog with search and filtering",
          "Shopping cart and wishlist functionality",
          "Secure payment processing with Stripe",
          "Order management and tracking",
          "Admin dashboard for product management",
          "Responsive design for all devices"
        ],
        challenges: [
          "Mobile app development for iOS and Android",
          "Advanced analytics and reporting dashboard",
          "Multi-language and multi-currency support",
          "AI-powered product recommendations"
        ],
        solutions: [
          "React Native for cross-platform mobile development",
          "Data visualization with Chart.js and D3.js",
          "Internationalization (i18n) framework integration",
          "Machine learning integration for personalized recommendations"
        ],
        images: [
          "/project-images/ecommerce-mainpage.jpg",
          "/project-images/ecommerce-suits.jpg", 
          "/project-images/ecommerce-cartpage.jpg",
          "/project-images/ecommerce-signup.jpg"
        ]
      }
    },
    {
      id: 3,
      title: "Personal Blog Platform",
      description: "A modern blog website with content management, user authentication, and responsive design. Features include article creation, commenting system, and SEO optimization.",
      image: "/project-images/blogged-mainpage.jpg",
      category: "fullstack",
      tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
      github: "https://github.com/221-Batuhan/blog-platform",
      demo: "#", 
      featured: true,
      slug: "blog-platform",
      details: {
        overview: "A comprehensive blog platform that allows users to create, edit, and share articles. Features a modern design with full content management capabilities and user interaction features.",
        features: [
          "User authentication and registration",
          "Article creation and editing with rich text editor",
          "Comment system with user interactions",
          "Category and tag organization",
          "Search functionality across articles",
          "Responsive design for all devices",
          "SEO optimization with meta tags",
          "Admin dashboard for content management"
        ],
        challenges: [
          "Implementing rich text editing capabilities",
          "Managing user permissions and content ownership",
          "Optimizing search functionality",
          "Ensuring responsive design across devices"
        ],
        solutions: [
          "Integrated React Quill for rich text editing",
          "Role-based access control system",
          "Full-text search with MongoDB indexes",
          "Mobile-first responsive design approach"
        ],
        images: [
          "/project-images/blogged-mainpage.jpg",
          "/project-images/blogged-postpage.jpg",
          "/project-images/blogged-createpost.jpg",
          "/project-images/blogged-signin.jpg"
        ]
      }
    }
  ];

  const filters = [
    { id: 'all', label: t.projects.filters.all },
    { id: 'fullstack', label: t.projects.filters.fullstack },
    { id: 'frontend', label: t.projects.filters.frontend },
    { id: 'ai', label: t.projects.filters.ai }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleViewDetails = (projectSlug: string) => {
    
    window.location.href = `/project/${projectSlug}`;
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              {}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="View demo"
                      >
                        <Eye className="w-5 h-5" />
                      </a>
                    )}
                    <button
                      onClick={() => handleViewDetails(project.slug)}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      aria-label="View details"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {}
                <div className="flex space-x-4">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t.projects.links.code}
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.projects.links.demo}
                    </a>
                  )}
                  {(project.github === "#" || project.demo === "#") && (
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {t.projects.links.comingSoon}
                    </span>
                  )}
                  <button
                    onClick={() => handleViewDetails(project.slug)}
                    className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View Details
                  </button>
                </div>
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
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.projects.cta.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t.projects.cta.subtitle}
            </p>
            <a
              href="https://github.com/221-Batuhan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              {t.projects.cta.button}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
