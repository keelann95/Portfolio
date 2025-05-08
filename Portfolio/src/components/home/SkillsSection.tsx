import React from "react";
import { motion } from "framer-motion";
import SkillBar from "../common/SkillBar";
import {
  Code,
  Layout,
  Database,
  LineChart,
  Cpu,
  ServerCrash,
} from "lucide-react";

interface SkillsSectionProps {
  onCursorHover?: (hovering: boolean) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ onCursorHover }) => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-primary-500" size={24} />,
      skills: [
        { name: "React", level: 95, color: "primary" },
        { name: "TypeScript", level: 80, color: "primary" },
        { name: "Next.js", level: 85, color: "primary" },
        { name: "CSS/SCSS", level: 92, color: "primary" },
      ],
    },
    {
      title: "UI/UX",
      icon: <Code className="text-secondary-500" size={24} />,
      skills: [
        { name: "Tailwind CSS", level: 90, color: "secondary" },
        { name: "Framer Motion", level: 85, color: "secondary" },
        { name: "Storybook", level: 50, color: "secondary" },
        { name: "Figma", level: 55, color: "secondary" },
      ],
    },
    {
      title: "State Management",
      icon: <Database className="text-accent-500" size={24} />,
      skills: [
        { name: "Redux", level: 90, color: "accent" },
        { name: "Context API", level: 95, color: "accent" },
        { name: "React Query", level: 85, color: "accent" },
        { name: "Zustand", level: 80, color: "accent" },
      ],
    },
    {
      title: "Performance",
      icon: <LineChart className="text-success" size={24} />,
      skills: [
        { name: "Core Web Vitals", level: 95, color: "success" },
        { name: "Code Splitting", level: 90, color: "success" },
        { name: "Lazy Loading", level: 88, color: "success" },
        { name: "Bundle Optimization", level: 92, color: "success" },
      ],
    },
    {
      title: "Backend Integration",
      icon: <ServerCrash className="text-error" size={24} />,
      skills: [
        { name: "GraphQL", level: 85, color: "error" },
        { name: "REST APIs", level: 90, color: "error" },
        { name: "Node.js", level: 80, color: "error" },
        { name: "Firebase", level: 75, color: "error" },
      ],
    },
  ];

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
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A showcase of my technical expertise and specializations
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
              onMouseEnter={() => onCursorHover?.(true)}
              onMouseLeave={() => onCursorHover?.(false)}
            >
              <div className="flex items-center mb-6">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {category.skills.map((skill, idx) => (
                <SkillBar
                  key={idx}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color as any}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
