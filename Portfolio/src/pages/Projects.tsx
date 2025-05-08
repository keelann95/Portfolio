import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import {
  Filter,
  ArrowRight,
  Code,
  LineChart,
  Database,
  Layout,
  Shield,
  Server,
} from "lucide-react";

// Import project data
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Projects", icon: <Filter size={16} /> },
    { id: "frontend", name: "Frontend", icon: <Layout size={16} /> },
    { id: "performance", name: "Performance", icon: <LineChart size={16} /> },
    { id: "architecture", name: "Architecture", icon: <Code size={16} /> },
    { id: "data", name: "Data Management", icon: <Database size={16} /> },
    { id: "security", name: "Security", icon: <Shield size={16} /> },
    { id: "backend", name: "Backend Integration", icon: <Server size={16} /> },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Projects & Case Studies
          </h1>

          <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-12 max-w-4xl">
            Explore my engineering projects with a focus on technical
            challenges, architecture decisions, and measurable outcomes.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                icon={category.icon}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-block px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs font-medium rounded">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="text-sm text-primary-500 font-medium mb-4">
                    🚀 {project.metrics}
                  </div>
                )}

                <Button
                  to={`/projects/${project.id}`}
                  variant="outline"
                  size="sm"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  View Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              No projects found in this category.
            </p>
            <Button onClick={() => setActiveFilter("all")} variant="outline">
              View All Projects
            </Button>
          </div>
        )}
      </Section>
    </>
  );
};

export default Projects;
