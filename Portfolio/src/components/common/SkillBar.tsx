import React from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  level,
  color = "primary",
}) => {
  // Map color to Tailwind color class
  const colorMap = {
    primary: "bg-primary-500",
    secondary: "bg-secondary-500",
    accent: "bg-accent-500",
    success: "bg-success",
    warning: "bg-warning",
    error: "bg-error",
  };

  const barColor = colorMap[color as keyof typeof colorMap] || colorMap.primary;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
          {name}
        </span>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {level}%
        </span>
      </div>
      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${barColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
