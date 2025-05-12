import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  LineChart,
  Github,
  ExternalLink,
} from "lucide-react";
import Button from "../components/common/Button";
import Section from "../components/common/Section";
import CodeBlock from "../components/common/CodeBlock";
import { projects } from "../data/projects";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          Project not found
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Button to="/projects" variant="primary">
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Project Header */}
      <div className="bg-neutral-100 dark:bg-neutral-800 py-16 mb-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="inline-block mr-2 px-3 py-1 bg-primary-100 dark:bg-primary-800/20 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-4xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-6 items-center text-neutral-600 dark:text-neutral-400 mb-8">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{project.date}</span>
              </div>

              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{project.duration}</span>
              </div>

              <div className="flex items-center">
                <LineChart size={18} className="mr-2 text-success" />
                <span className="text-success font-medium">
                  {project.metrics}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  variant="primary"
                  icon={<ExternalLink size={16} />}
                >
                  Live Demo
                </Button>
              )}

              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  variant="outline"
                  icon={<Github size={16} />}
                >
                  View Code
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-xl shadow-md mb-12"
              />

              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                Project Overview
              </h2>

              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                This case study explores the development of {project.title}, a
                project that focused on creating a high-performance, accessible,
                and maintainable solution. The project presented several
                technical challenges that required careful consideration of
                architecture, performance optimization, and code quality.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                  Architecture Decisions
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                  The architecture was designed around a component-based
                  approach with clear separation of concerns. We implemented a
                  custom state management solution that combined Context API
                  with hooks to avoid the overhead of larger state management
                  libraries while maintaining scalability.
                </p>
                <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md mb-6">
                  <h4 className="font-bold text-neutral-900 dark:text-white mb-2">
                    Architecture Overview
                  </h4>
                  <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
                    <li>Presentation layer: React components</li>
                    <li>State management: Custom hooks + Context API</li>
                    <li>Data fetching: React Query with optimistic updates</li>
                    <li>Routing: React Router with code splitting</li>
                    <li>Styling: Styled Components with theming</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                  Accessibility Considerations
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                  We prioritized accessibility throughout the development
                  process, implementing:
                </p>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2 mb-4">
                  <li>Semantic HTML structure</li>
                  <li>ARIA attributes for complex interactive elements</li>
                  <li>Keyboard navigation support</li>
                  <li>High contrast mode</li>
                  <li>Screen reader optimization</li>
                </ul>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  The application was tested with various assistive
                  technologies, including screen readers and keyboard-only
                  navigation, to ensure a seamless experience for all users.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mt-12 mb-6">
                Outcomes and Metrics
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                    Performance
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-neutral-600 dark:text-neutral-400">
                          First Contentful Paint
                        </span>
                        <span className="text-success font-medium">0.8s</span>
                      </div>
                      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                        <div
                          className="bg-success h-2 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-neutral-600 dark:text-neutral-400">
                          Largest Contentful Paint
                        </span>
                        <span className="text-success font-medium">1.2s</span>
                      </div>
                      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                        <div
                          className="bg-success h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-neutral-600 dark:text-neutral-400">
                          Cumulative Layout Shift
                        </span>
                        <span className="text-success font-medium">0.02</span>
                      </div>
                      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                        <div
                          className="bg-success h-2 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                    Business Impact
                  </h3>
                  <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start">
                      <span className="text-success mr-2">✓</span>
                      <span>47% improvement in page load time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success mr-2">✓</span>
                      <span>23% increase in user engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success mr-2">✓</span>
                      <span>15% reduction in bounce rate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success mr-2">✓</span>
                      <span>98% score on Lighthouse accessibility audit</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mt-12 mb-6">
                Lessons Learned
              </h2>

              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                This project reinforced several important engineering
                principles:
              </p>

              <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-4 mb-8">
                <li>
                  <span className="font-medium text-neutral-900 dark:text-white">
                    Measure, then optimize:
                  </span>{" "}
                  Data-driven performance optimization led to better results
                  than intuition-based approaches.
                </li>
                <li>
                  <span className="font-medium text-neutral-900 dark:text-white">
                    Progressive enhancement:
                  </span>{" "}
                  Building core functionality first, then enhancing with
                  advanced features provided a more robust solution.
                </li>
                <li>
                  <span className="font-medium text-neutral-900 dark:text-white">
                    Accessibility from the start:
                  </span>{" "}
                  Incorporating accessibility from the beginning of the project
                  was more effective than retrofitting it later.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="sticky top-24"
            >
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  Project Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">
                      Client
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {project.client || "Confidential"}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">
                      Timeline
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {project.duration}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">
                      My Role
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {project.role || "Lead Frontend Engineer"}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  More Projects
                </h3>

                <div className="space-y-6">
                  {projects
                    .filter((p) => p.id !== id)
                    .slice(0, 3)
                    .map((p) => (
                      <Link
                        key={p.id}
                        to={`/projects/${p.id}`}
                        className="block group"
                      >
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="ml-4">
                            <h4 className="font-medium text-neutral-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                              {p.title}
                            </h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-1">
                              {p.categories.join(", ")}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>

                <div className="mt-6">
                  <Button to="/projects" variant="outline" className="w-full">
                    View All Projects
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <Section className="bg-primary-500 text-white">
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Interested in working together?
          </motion.h2>

          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm currently available for freelance projects and engineering
            consultations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default ProjectDetail;
