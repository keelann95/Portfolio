import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import { Search, ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = searchTerm
    ? blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.categories.some((category) =>
            category.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
    : blogPosts;

  // Animation variants
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
    <>
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Engineering Blog
          </h1>

          <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-12 max-w-4xl">
            Deep dives into frontend engineering concepts, performance
            optimizations, and technical solutions.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pl-12 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400"
                size={18}
              />
            </div>
          </div>
        </motion.div>

        {/* Featured post */}
        {!searchTerm && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blogPosts[0].categories.map((category) => (
                      <span
                        key={category}
                        className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    {blogPosts[0].title}
                  </h2>

                  <div className="flex items-center text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span>{blogPosts[0].date}</span>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    {blogPosts[0].excerpt}
                  </p>

                  <Button
                    to={`/blog/${blogPosts[0].id}`}
                    variant="primary"
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                  >
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Posts grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredPosts.slice(searchTerm ? 0 : 1).map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.slice(0, 2).map((category) => (
                      <span
                        key={category}
                        className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex items-center text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium flex items-center transition-colors">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              No articles found matching "{searchTerm}".
            </p>
            <Button onClick={() => setSearchTerm("")} variant="outline">
              Clear Search
            </Button>
          </div>
        )}
      </Section>
    </>
  );
};

export default Blog;
