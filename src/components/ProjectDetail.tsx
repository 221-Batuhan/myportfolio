import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, CheckCircle, Target } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

// Import project data (you can move this to a separate file later)
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce website with user authentication, product management, shopping cart, and payment integration. Currently in development.",
    image: "/project-images/ecommerce-mainpage.jpg",
    category: "fullstack",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/221-Batuhan/ecommerce-store", // TODO: Add your GitHub link
    demo: "#", // TODO: Add your demo link
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
        "Implementing secure payment processing",
        "Managing complex state for shopping cart",
        "Optimizing database queries for large product catalogs",
        "Ensuring responsive design across all devices"
      ],
      solutions: [
        "Used Stripe API for secure payment handling",
        "Implemented Redux for state management",
        "Optimized MongoDB queries with proper indexing",
        "Used CSS Grid and Flexbox for responsive design"
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
    id: 2,
    title: "Personal Blog Platform",
    description: "A modern blog website with content management, user authentication, and responsive design. Features include article creation, commenting system, and SEO optimization.",
    image: "/project-images/blogged-mainpage.jpg",
    category: "fullstack",
    tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    github: "https://github.com/221-Batuhan/blog-platform", // TODO: Add your GitHub link
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
  },
  // Add other projects here...
];

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const foundProject = projectsData.find(p => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Redirect to projects page if project not found
      navigate('/#projects');
    }
  }, [slug, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16"
      >
        <div className="container-custom">
          <button
            onClick={() => navigate('/#projects')}
            className="flex items-center text-white/80 hover:text-white transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </button>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              {project.description}
            </p>
            
            {/* Project Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
              )}
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.details.overview}
              </p>
            </motion.div>

            {/* Project Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Project Screenshots
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.details.images.map((image: string, index: number) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.details.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Expected Developments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Target className="w-8 h-8 text-green-500 mr-3" />
                Expected Developments
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.details.solutions.map((development: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{development}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="skill-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Project Info
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Category</span>
                  <p className="text-gray-900 dark:text-white font-medium capitalize">{project.category}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Status</span>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {project.featured ? 'Featured Project' : 'Active Development'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
