import React from "react";
import Section from "../components/common/Section";
import SkillBar from "../components/common/SkillBar";
import Button from "../components/common/Button";
import { motion } from "framer-motion";
import { Download, Github, ExternalLink } from "lucide-react";
import CodeBlock from "../components/common/CodeBlock";

const About: React.FC = () => {
  const workHistory = [
    {
      company: "Personal Project – Decentralized Healthcare App",
      title: "Frontend Engineer",
      period: "May 2025 – Present",
      description:
        "Currently building a cutting-edge, privacy-first healthcare web application using React, TypeScript, Next.js, and modern browser APIs. The app empowers users to manage and visualize their medical data entirely on the client side with full offline support and secure sharing. Hosted on Vercel (in progress).",
      achievements: [
        "Implementing local-first architecture using IndexedDB with end-to-end encryption via Web Crypto API",
        "Building AI-assisted features using OpenAI for health pattern recognition and symptom analysis",
        "Designing interactive health visualizations with Chart.js and Tailwind for trends like blood pressure and weight",
        "Creating PDF export and secure QR code sharing for decentralized data exchange",
        "Adding FHIR/HL7 import support and intelligent parsing for medical data standards",
        "Developing as a fully offline-capable PWA with installable experience and service workers"
      ],
    },
    {
      company: "White Pearl Tour & Travel",
      title: "Lead Frontend Developer",
      period: " April 2025 - Present",
      description:
        "Led the end-to-end development of a luxury African tour and travel website, integrating AI-powered tools and immersive experiences to elevate user engagement and conversion.",
      achievements: [
        "Designed and built a  website using React and Tailwind CSS for dynamic UI",
        "Implemented advanced UX modules including 360° virtual tours, dynamic comparison tools, and real-time booking systems",
        "Collaborated with the client to deliver a scalable content architecture and CMS-ready layout"
      ],
    },    
    {
      company: "Moringa School",
      title: "Frontend Developer",
      period: "Nov 2024 - Dec 2024",
      description:
        "Led the development of a movie community web app enabling users to explore, discuss, and interact with the latest film releases.",
      achievements: [
        "Implemented secure authentication with token-based login using React and Flask",
        "Built dynamic, responsive navigation using React Router and Tailwind CSS",
        "Integrated protected routes and conditional rendering based on login state",
        "Designed and styled mobile-first UI components with accessibility in mind",
        "Managed frontend state and routing for seamless user experience",
      ],
    },    
    {
      company: "Moringa School",
      title: "Junior Frontend Developer",
      period: "june 2024 - Aug 2024",
      description:
        "Built a masterpiece frontend application for our first major project, working closely with designers and backend engineers.",
      achievements: [
        "Developed reusable component library from scratch",
        "Led the frontend team, leading to a 30% increase in team productivity",
        "Received a well deserved prize for outstanding work",
      ],
    },
  ];

  return (
    <>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              About Me
            </h1>

            <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              I'm a  frontend engineer with 2+ years of experience
              building web applications. I specialize in creating fast,
              accessible, and maintainable frontend solutions that deliver
              exceptional user experiences.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              My engineering approach focuses on three core principles:{" "}
              <strong>performance</strong>,<strong>accessibility</strong>, and{" "}
              <strong>maintainability</strong>. I believe in writing clean,
              well-tested code that solves real problems and scales with
              business needs.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              With extensive experience in React, TypeScript, and modern
              frontend tools, I've worked on projects like complex enterprise applications. I enjoy optimizing
              for Core Web Vitals, implementing accessible interfaces, and
              creating scalable component systems.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                href="https://mwaniki-curriculum-vitae.tiiny.site"
                variant="primary"
                icon={<Download size={16} />}
              >
                Download Resume
              </Button>

              <Button
                href="https://github.com/keelann95"
                variant="outline"
                icon={<Github size={16} />}
              >
                GitHub Profile
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                Core Competencies
              </h3>

              <SkillBar
                name="Frontend Architecture"
                level={95}
                color="primary"
              />
              <SkillBar name="React Ecosystem" level={90} color="primary" />
              <SkillBar
                name="Performance Optimization"
                level={92}
                color="secondary"
              />
              <SkillBar
                name="Accessibility (a11y)"
                level={88}
                color="secondary"
              />
              <SkillBar name="UI/UX Implementation" level={90} color="accent" />

              <div className="mt-8">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  Languages & Tools
                </h3>

                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "GraphQL",
                    "CSS/SCSS",
                    "Tailwind",
                    "Redux",
                    "Cypress",
                    "Webpack",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Engineering Philosophy */}
      <Section
        title="Engineering Philosophy"
        subtitle="My approach to building frontend applications"
        className="bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
              Performance First
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              I believe that performance is a core feature, not an afterthought.
              Every decision, from architecture to implementation, considers the
              performance impact.
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>Optimizing for Core Web Vitals</li>
              <li>Code splitting and lazy loading</li>
              <li>Bundle size optimization</li>
              <li>Efficient rendering strategies</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
              Accessibility for All
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Creating interfaces that work for everyone is both a technical
              challenge and an ethical responsibility. I prioritize
              accessibility in all my work.
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>WCAG 2.1 AA compliance</li>
              <li>Semantic HTML structure</li>
              <li>Keyboard navigation</li>
              <li>Screen reader optimization</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
              Maintainable Architecture
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Code should be written for humans first, computers second. I focus
              on creating maintainable systems that can evolve with changing
              requirements.
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>Component-driven design</li>
              <li>Consistent patterns</li>
              <li>Comprehensive testing</li>
              <li>Clear documentation</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Work Experience */}
      <Section
        title="Work Experience"
        subtitle="My professional journey as a frontend engineer"
      >
        <div className="space-y-12">
          {workHistory.map((job, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-500" />

              <div className="mb-2">
                <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm px-3 py-1 rounded-full">
                  {job.period}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {job.title}
              </h3>

              <h4 className="text-xl text-primary-500 mb-4">{job.company}</h4>

              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {job.description}
              </p>

              <h5 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">
                Key Achievements:
              </h5>

              <ul className="list-disc list-outside ml-6 text-neutral-600 dark:text-neutral-400 space-y-1">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

    </>
  );
};

export default About;
