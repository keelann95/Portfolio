import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import CodeBlock from "../components/common/CodeBlock";
import { blogPosts } from "../data/blogPosts";

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          Article not found
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Button to="/blog" variant="primary">
          Back to Blog
        </Button>
      </div>
    );
  }

  // Sample code snippet (would typically be part of the post content)
  const codeSnippet = `// Custom React hook for progressive image loading
import { useState, useEffect } from 'react';

type ProgressiveImageState = {
  isLoaded: boolean;
  currentSrc: string;
};

export function useProgressiveImage(lowQualitySrc: string, highQualitySrc: string): ProgressiveImageState {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc);

  useEffect(() => {
    // Reset state if sources change
    setIsLoaded(false);
    setCurrentSrc(lowQualitySrc);
    
    const highQualityImage = new Image();
    highQualityImage.src = highQualitySrc;
    
    highQualityImage.onload = () => {
      setIsLoaded(true);
      setCurrentSrc(highQualitySrc);
    };
    
    return () => {
      // Clean up by removing the onload handler
      highQualityImage.onload = null;
    };
  }, [lowQualitySrc, highQualitySrc]);

  return { isLoaded, currentSrc };
}`;

  return (
    <>
      <div className="bg-neutral-100 dark:bg-neutral-800 py-16 mb-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-4">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="inline-block mr-2 px-3 py-1 bg-primary-100 dark:bg-primary-800/20 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 items-center text-neutral-600 dark:text-neutral-400 mb-8">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <article className="max-w-3xl mx-auto">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-xl shadow-md mb-8"
              />

              <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-neutral-900 dark:prose-headings:text-white prose-p:text-neutral-600 dark:prose-p:text-neutral-400 max-w-none">
                <p>
                  Performance optimization is one of the most critical aspects
                  of frontend engineering, directly impacting user experience,
                  engagement, and conversion rates. In this article, we'll
                  explore advanced techniques for optimizing React applications,
                  focusing on rendering performance and bundle size reduction.
                </p>

                <h2>Understanding React's Rendering Process</h2>
                <p>
                  React's virtual DOM and reconciliation algorithm are powerful
                  but can become performance bottlenecks as applications grow in
                  complexity. To optimize rendering performance, it's essential
                  to understand how React determines when to re-render
                  components.
                </p>
                <p>
                  The key insight is that React will re-render a component when:
                </p>
                <ul>
                  <li>Its state changes</li>
                  <li>Its props change</li>
                  <li>Its parent component re-renders</li>
                </ul>

                <h2>Memoization Techniques</h2>
                <p>
                  Memoization is a powerful technique to prevent unnecessary
                  re-renders. React provides several APIs for memoization:
                </p>
                <ul>
                  <li>
                    <code>React.memo</code> for component memoization
                  </li>
                  <li>
                    <code>useMemo</code> for computed value memoization
                  </li>
                  <li>
                    <code>useCallback</code> for function memoization
                  </li>
                </ul>
                <p>
                  Here's an example of a custom hook that implements progressive
                  image loading using memoization:
                </p>

                <CodeBlock
                  code={codeSnippet}
                  language="typescript"
                  fileName="useProgressiveImage.ts"
                />

                <h2>Bundle Size Optimization</h2>
                <p>
                  Large JavaScript bundles can significantly impact initial load
                  time. Here are effective strategies to reduce bundle size:
                </p>

                <h3>Code Splitting</h3>
                <p>
                  Code splitting allows you to divide your application into
                  smaller chunks that can be loaded on demand. React.lazy and
                  Suspense make this straightforward:
                </p>

                <CodeBlock
                  code={`// Dynamic import with React.lazy
const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dashboard />
    </Suspense>
  );
}`}
                  language="jsx"
                  fileName="App.jsx"
                />

                <h3>Tree Shaking</h3>
                <p>
                  Tree shaking eliminates unused code from your bundle. To
                  leverage tree shaking effectively:
                </p>
                <ul>
                  <li>
                    Use ES modules syntax (<code>import</code>/
                    <code>export</code>)
                  </li>
                  <li>
                    Avoid commonjs patterns (<code>require</code>,{" "}
                    <code>module.exports</code>)
                  </li>
                  <li>Use named imports instead of namespace imports</li>
                </ul>

                <CodeBlock
                  code={`// Good: Named imports allow tree shaking
import { Button, Card } from 'ui-library';

// Avoid: Namespace imports prevent tree shaking
// import * as UIComponents from 'ui-library';`}
                  language="javascript"
                />

                <h2>Practical Performance Strategies</h2>
                <p>
                  Beyond the core techniques, here are practical strategies that
                  have significantly improved performance in production
                  applications:
                </p>

                <h3>Virtualization for Long Lists</h3>
                <p>
                  When rendering long lists, virtualization ensures only visible
                  items are actually rendered, dramatically improving
                  performance. Libraries like <code>react-window</code> and{" "}
                  <code>react-virtualized</code> make this easy to implement.
                </p>

                <h3>Web Workers for CPU-Intensive Tasks</h3>
                <p>
                  Moving CPU-intensive operations off the main thread using Web
                  Workers prevents UI blocking and keeps your application
                  responsive.
                </p>

                <h3>Optimistic UI Updates</h3>
                <p>
                  Updating the UI immediately before server confirmation creates
                  the perception of speed while data is being processed in the
                  background.
                </p>

                <h2>Measuring Performance</h2>
                <p>
                  Performance optimization should always be data-driven. Use the
                  following tools to measure and validate your optimizations:
                </p>
                <ul>
                  <li>React DevTools Profiler to identify expensive renders</li>
                  <li>Lighthouse for overall performance metrics</li>
                  <li>WebPageTest for real-world performance testing</li>
                  <li>
                    Chrome DevTools Performance panel for runtime analysis
                  </li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Performance optimization is not a one-time effort but an
                  ongoing process. By implementing the techniques outlined in
                  this article and continuously measuring your application's
                  performance, you can deliver exceptional user experiences that
                  engage and delight.
                </p>
                <p>
                  What performance challenges have you encountered in your React
                  applications? Share your experiences and questions in the
                  comments below.
                </p>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 mt-12 pt-8">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <span className="text-neutral-600 dark:text-neutral-400">
                      Share this article:
                    </span>
                    <div className="flex space-x-4 mt-2">
                      <button
                        aria-label="Share on Twitter"
                        className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {post.id !== blogPosts[0].id && (
                      <Button
                        to={`/blog/${blogPosts[0].id}`}
                        variant="outline"
                        size="sm"
                      >
                        Previous Article
                      </Button>
                    )}

                    {post.id !== blogPosts[blogPosts.length - 1].id && (
                      <Button
                        to={`/blog/${blogPosts[blogPosts.length - 1].id}`}
                        variant="outline"
                        size="sm"
                      >
                        Next Article
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </motion.div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="sticky top-24">
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  Recent Articles
                </h3>

                <div className="space-y-6">
                  {blogPosts
                    .filter((p) => p.id !== id)
                    .slice(0, 3)
                    .map((p) => (
                      <Link
                        key={p.id}
                        to={`/blog/${p.id}`}
                        className="block group"
                      >
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="ml-4">
                            <h4 className="font-medium text-neutral-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                              {p.title}
                            </h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {p.readTime} min read
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>

                <div className="mt-6">
                  <Button to="/blog" variant="outline" className="w-full">
                    View All Articles
                  </Button>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  Categories
                </h3>

                <div className="flex flex-wrap gap-2">
                  {Array.from(
                    new Set(blogPosts.flatMap((post) => post.categories))
                  ).map((category) => (
                    <Link
                      key={category}
                      to={`/blog?category=${category}`}
                      className="inline-block px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 text-sm rounded-full transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related posts */}
      <Section
        title="You Might Also Like"
        className="bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts
            .filter((p) => p.id !== id)
            .slice(0, 3)
            .map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <div className="flex items-center text-neutral-600 dark:text-neutral-400 mb-2 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <span className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium flex items-center transition-colors">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </Section>
    </>
  );
};

export default BlogPost;
