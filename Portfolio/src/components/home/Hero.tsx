import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, ChevronDown } from "lucide-react";
import Button from "../common/Button";

interface HeroProps {
  onCursorHover?: (hovering: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ onCursorHover }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const handleScrollClick = () => {
    if (scrollRef.current) {
      const offsetTop = scrollRef.current.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const roles = [
    "Frontend Engineer",
    "UI Performance Expert",
    "Accessibility Advocate",
    "React Specialist",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const role = roles[currentRoleIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(role.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        
        // If we completed typing the current role
        if (currentText === role) {
          setTypingSpeed(2000); // Pause before deleting
          setIsDeleting(true);
        }
      } else {
        // Deleting 
        setCurrentText(role.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        
        // If  deleted everything, move to next role
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentRoleIndex, isDeleting, typingSpeed, roles]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pb-24 overflow-hidden px-6 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 z-0" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      

      <div
        className="z-10 container mx-auto"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          animation: "fadeInUp 0.8s ease-out forwards"
        }}
      >
        <p className="text-primary-500 font-medium mb-4">Hi, my name is</p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">
          Stephen M. <span className="text-primary-500">Mwaniki</span>
        </h1>
        
        <div className="h-12 md:h-16">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-700 dark:text-neutral-300">
            I'm a{" "}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              {currentText}
            </span>
            <span className="animate-pulse">|</span>
          </h2>
        </div>
        
        <p className="mt-6 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 text-lg md:text-xl leading-relaxed">
          I specialize in creating exceptional digital experiences with a focus on performance, 
          accessibility, and clean code. With 8+ years of experience, I deliver modern, 
          polished frontend solutions.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            to="/projects"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
            className="shadow-lg hover:scale-105 transition-transform duration-300"
            onMouseEnter={() => onCursorHover?.(true)}
            onMouseLeave={() => onCursorHover?.(false)}
          >
            View My Work
          </Button>
          
          <Button
            to="/contact"
            variant="outline"
            size="lg"
            onMouseEnter={() => onCursorHover?.(true)}
            onMouseLeave={() => onCursorHover?.(false)}
          >
            Contact Me
          </Button>
        </div>
        
        {/* Social links */}
        <div className="mt-12 flex space-x-6 justify-center">
          <a
            href="https://github.com/keelann95"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            aria-label="GitHub"
            onMouseEnter={() => onCursorHover?.(true)}
            onMouseLeave={() => onCursorHover?.(false)}
          >
            <Github size={24} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/stephen-mwaniki-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            aria-label="LinkedIn"
            onMouseEnter={() => onCursorHover?.(true)}
            onMouseLeave={() => onCursorHover?.(false)}
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        style={{
          animation: "bounce 2s infinite ease-in-out"
        }}
        onClick={handleScrollClick}
        onMouseEnter={() => onCursorHover?.(true)}
        onMouseLeave={() => onCursorHover?.(false)}
      >
        <ChevronDown size={32} className="text-primary-500" />
      </div>
      
      {/* Reference for scroll */}
      <div ref={scrollRef} />
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-15px) translateX(-50%);
          }
          60% {
            transform: translateY(-7px) translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;