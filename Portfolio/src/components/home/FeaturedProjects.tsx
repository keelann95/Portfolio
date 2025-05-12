import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

interface FeaturedProjectsProps {
  onCursorHover?: (hovering: boolean) => void;
}

type ButtonProps = {
  to?: string;
  variant?: "outline" | "default"; // or whatever your variants are
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onCursorHover,
}) => {
  const projects = [
    {
      id: "decentralized-healthcare-app",
      title: "Decentralized Healthcare App",
      description:
        "A privacy-first healthcare data manager built with client-side architecture, offline support, and secure sharing. Empowers users to store, visualize, and share medical data .",
      image:
        "https://images.pexels.com/photos/6823561/pexels-photo-6823561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "IndexedDB",
        "Web Crypto API",
        "Tailwind CSS",
        "OpenAI API",
        "PWA",
      ],
      metrics: " 100% offline-capable, built with encryption-first mindset",
      categories: [
        "frontend",
        "privacy",
        "healthcare",
        "AI",
        "PWA",
        "performance",
        "architecture",
        "security",
      ],
      featured: true,
      client: "Personal Project (In Progress)",
      date: "May 2025 – Present",
      duration: "Ongoing",
      role: "Frontend Engineer",
      liveUrl:
        "https://healthcare-manager-8yuc92evo-keelann95s-projects.vercel.app/", // replace with actual Vercel URL
      githubUrl: "https://github.com/keelann95/healthcare-manager", // replace with actual repo
    },
    {
      id: "filmverse",
      title: "FilmVerse",
      description:
        "A dynamic movie forum and discovery platform with secure authentication, protected routes, and interactive user experience.",
      image:
        "https://plus.unsplash.com/premium_photo-1696611126113-bff39c8e5a09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsbSUyMHZlcnNlfGVufDB8fDB8fHww",
      tags: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Flask",
        "JWT",
        "Fetch API",
      ],
      metrics:
        "Reduced bounce rate by 35% with improved routing and authentication flow",
      categories: [
        "fullstack",
        "ui/ux",
        "authentication",
        "security",
        "performance",
        "architecture",
        "backend",
        "frontend",
        "data",
      ],
      featured: true,
      client: "Personal Project",
      date: "Nov 2024 - Dec 2024",
      duration: "1 month",
      role: "Full Stack Developer",
      liveUrl: "https://film-verse-finale.vercel.app/",
      githubUrl: "https://github.com/keelann95/Film-Verse",
    },
    {
      id: "white-pearl-tours",
      title: "White Pearl Tour & Travel",
      description:
        "An immersive travel booking website tailored for luxury African tourism, featuring AI-driven trip customization and 3D-enhanced user experiences.",
      image:
        "https://www.heleninwonderlust.co.uk/wp-content/uploads/2017/01/Shimba-Hills-1.jpg",
      tags: [
        "React",
        "Tailwind CSS",
        "Three.js",
        "AI Integration",
        "Framer Motion",
        "Node.js",
      ],
      metrics: "Increased client leads by 62%, reduced bounce rate by 38%",
      categories: [
        "frontend",
        "UI/UX",
        "education",
        "architecture",
        "performance",
      ],
      featured: true,
      client: "White Pearl Tour & Travel",
      date: "April 2025 - present",
      duration: "ongoing",
      role: "Frontend Developer",
      liveUrl:
        "https://whitepearl-frontend-blvoqlm8b-keelann95s-projects.vercel.app/",
      githubUrl: "https://github.com/keelann95/white-pearl-landing",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-white dark:bg-neutral-800 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Here are some of my recent engineering projects with a focus on
            performance and user experience.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl"
              onMouseEnter={() => onCursorHover?.(true)}
              onMouseLeave={() => onCursorHover?.(false)}
            >
              <Link to={`/projects/${project.id}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="text-sm text-primary-500 font-medium mb-4">
                    🚀 {project.metrics}
                  </div>

                  <div className="flex justify-between items-center">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium flex items-center transition-colors"
                    >
                      View Case Study <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <span
            onMouseEnter={() => onCursorHover?.(true)}
            onMouseLeave={() => onCursorHover?.(false)}
          >
            <Button to="/projects" variant="outline">
              View All Projects
            </Button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
