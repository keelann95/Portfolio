import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface FooterProps {
  onCursorHover: (hovering: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ onCursorHover }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold text-primary-500 flex items-center"
            >
              <span className="mr-1">{"<"}</span>
              <span className=" font-extrabold">SM</span>
              <span className="ml-1">{"/>"}</span>
            </Link>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Frontend Engineer specializing in building exceptional digital
              experiences with a focus on performance, accessibility, and clean
              code.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-neutral-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  onMouseEnter={() => onCursorHover(true)}
                  onMouseLeave={() => onCursorHover(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  onMouseEnter={() => onCursorHover(true)}
                  onMouseLeave={() => onCursorHover(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  onMouseEnter={() => onCursorHover(true)}
                  onMouseLeave={() => onCursorHover(false)}
                >
                  Projects
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  onMouseEnter={() => onCursorHover(true)}
                  onMouseLeave={() => onCursorHover(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="font-bold text-neutral-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/keelann95"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
                onMouseEnter={() => onCursorHover(true)}
                onMouseLeave={() => onCursorHover(false)}
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/stephen-mwaniki-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
                onMouseEnter={() => onCursorHover(true)}
                onMouseLeave={() => onCursorHover(false)}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:005.stephenmwaniki@gmail.com"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
                onMouseEnter={() => onCursorHover(true)}
                onMouseLeave={() => onCursorHover(false)}
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              <a
                href="mailto:005.stephenmwaniki@gmail.com"
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onMouseEnter={() => onCursorHover(true)}
                onMouseLeave={() => onCursorHover(false)}
              >
                005.stephenmwaniki@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              © {currentYear} Stephen Mwaniki. All rights reserved.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2 md:mt-0">
              Made with <span className="text-error">♥</span> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
