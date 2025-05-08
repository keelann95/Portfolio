import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
          Page Not Found
        </h2>

        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button to="/" variant="primary" icon={<Home size={18} />}>
            Back to Home
          </Button>

          <Button
            onClick={() => window.history.back()}
            variant="outline"
            icon={<ArrowLeft size={18} />}
          >
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
