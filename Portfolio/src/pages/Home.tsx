import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import SkillsSection from '../components/home/SkillsSection';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <FeaturedProjects />
      
      <SkillsSection />
      
      <Section
        title="My Engineering Approach"
        subtitle="I emphasize performance, accessibility, and clean architecture in everything I build"
        className="bg-white dark:bg-neutral-800"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Performance-First Mindset
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              I believe that performance is a feature, not an afterthought. My engineering decisions 
              are data-driven, focusing on metrics like Core Web Vitals, load times, and rendering optimization.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Clean, Maintainable Architecture
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              I design systems with separation of concerns, clear component boundaries, and predictable data flow. 
              My code is modular, testable, and built to evolve with changing requirements.
            </p>
            
            <Button
              to="/about"
              variant="outline"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              Learn More About My Approach
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl shadow-md"
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-neutral-900 dark:text-white">Core Web Vitals</h4>
                  <span className="text-success font-medium">Excellent</span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-neutral-900 dark:text-white">Accessibility</h4>
                  <span className="text-success font-medium">WCAG AA</span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-neutral-900 dark:text-white">Code Quality</h4>
                  <span className="text-success font-medium">95%</span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-neutral-900 dark:text-white">Test Coverage</h4>
                  <span className="text-success font-medium">90%</span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      <Section className="bg-primary-500 text-white">
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Build Something Amazing Together
          </motion.h2>
          
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm currently available for freelance projects, consultations, and full-time engineering positions.
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
    </div>
  );
};

export default Home;