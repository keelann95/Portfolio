import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  fullWidth?: boolean;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  className = "",
  fullWidth = false,
  id,
}) => {
  const containerClasses = fullWidth
    ? "w-full"
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <section id={id} className={`py-12 md:py-24 ${className}`}>
      <div className={containerClasses}>
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
