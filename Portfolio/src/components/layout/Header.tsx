import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface HeaderProps {
  onCursorHover: (hovering: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onCursorHover }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold relative text-primary-500 flex items-center"
          onMouseEnter={() => onCursorHover(true)}
          onMouseLeave={() => onCursorHover(false)}
        >
          <span className="mr-1 text-primary-500">{"<"}</span>
          <span>JD</span>
          <span className="ml-1 text-primary-500">{"/>"}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all duration-200 py-1 relative ${
                isActive
                  ? "text-primary-500"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400"
              }`
            }
            onMouseEnter={() => onCursorHover(true)}
            onMouseLeave={() => onCursorHover(false)}
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary-500 w-full"
                    layoutId="navIndicator"
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-all duration-200 py-1 relative ${
                isActive
                  ? "text-primary-500"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400"
              }`
            }
            onMouseEnter={() => onCursorHover(true)}
            onMouseLeave={() => onCursorHover(false)}
          >
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary-500 w-full"
                    layoutId="navIndicator"
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition-all duration-200 py-1 relative ${
                isActive
                  ? "text-primary-500"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400"
              }`
            }
            onMouseEnter={() => onCursorHover(true)}
            onMouseLeave={() => onCursorHover(false)}
          >
            {({ isActive }) => (
              <>
                Projects
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary-500 w-full"
                    layoutId="navIndicator"
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `transition-all duration-200 py-1 relative ${
                isActive
                  ? "text-primary-500"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400"
              }`
            }
            onMouseEnter={() => onCursorHover(true)}
            onMouseLeave={() => onCursorHover(false)}
          >
            {({ isActive }) => (
              <>
                Blog
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary-500 w-full"
                    layoutId="navIndicator"
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-all duration-200 py-1 relative ${
                isActive
                  ? "text-primary-500"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400"
              }`
            }
            onMouseEnter={() => onCursorHover(true)}
            onMouseLeave={() => onCursorHover(false)}
          >
            {({ isActive }) => (
              <>
                Contact
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary-500 w-full"
                    layoutId="navIndicator"
                  />
                )}
              </>
            )}
          </NavLink>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            onMouseEnter={() => onCursorHover(true)}
            onMouseLeave={() => onCursorHover(false)}
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-neutral-700" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 dark:text-neutral-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-neutral-900"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-2 px-4 rounded transition-colors ${
                isActive
                  ? "bg-primary-50 dark:bg-primary-900/20 text-primary-500"
                  : "text-neutral-700 dark:text-neutral-300"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-2 px-4 rounded transition-colors ${
                isActive
                  ? "bg-primary-50 dark:bg-primary-900/20 text-primary-500"
                  : "text-neutral-700 dark:text-neutral-300"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `py-2 px-4 rounded transition-colors ${
                isActive
                  ? "bg-primary-50 dark:bg-primary-900/20 text-primary-500"
                  : "text-neutral-700 dark:text-neutral-300"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `py-2 px-4 rounded transition-colors ${
                isActive
                  ? "bg-primary-50 dark:bg-primary-900/20 text-primary-500"
                  : "text-neutral-700 dark:text-neutral-300"
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `py-2 px-4 rounded transition-colors ${
                isActive
                  ? "bg-primary-50 dark:bg-primary-900/20 text-primary-500"
                  : "text-neutral-700 dark:text-neutral-300"
              }`
            }
          >
            Contact
          </NavLink>

          <div className="flex space-x-4 py-2 px-4">
            <a
              href="https://github.com/keelann95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/stephen-mwaniki-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
