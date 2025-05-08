import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
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
            Get in Touch
          </h1>

          <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-12 max-w-3xl">
            I'm currently available for freelance projects, consultations, and
            full-time engineering positions. Feel free to reach out if you have
            any questions or want to work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-8 text-center">
                <div className="inline-block p-4 bg-primary-100 dark:bg-primary-900/20 text-primary-500 rounded-full mb-6">
                  <Send size={32} />
                </div>

                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                  Message Sent!
                </h2>

                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible, usually within 24-48 hours.
                </p>

                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Send Me a Message
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="Project Inquiry">Project Inquiry</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            )}
          </motion.div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="text-primary-500" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-neutral-900 dark:text-white">
                      Email
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      <a
                        href="005.stephenmwaniki@gmail.com"
                        className="hover:text-primary-500 dark:hover:text-primary-400"
                      >
                       005.stephenmwaniki@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="text-primary-500" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-neutral-900 dark:text-white">
                      Phone
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      <a
                        href="tel:+254798342295"
                        className="hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        +254 798 342 295
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="text-primary-500" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-neutral-900 dark:text-white">
                      Location
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Nairobi, Kenya                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Connect with Me
              </h2>

              <div className="space-y-4">
                <a
                  href="https://github.com/keelann95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                >
                  <Github
                    size={20}
                    className="text-neutral-800 dark:text-white"
                  />
                  <span className="ml-4 text-neutral-700 dark:text-neutral-300">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/stephen-mwaniki-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                >
                  <Linkedin size={20} className="text-[#0077B5]" />
                  <span className="ml-4 text-neutral-700 dark:text-neutral-300">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Common questions about working with me"
        className="bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {[
              {
                question: "What's your availability for new projects?",
                answer:
                  "I'm currently available for freelance projects and consultations. For full-time positions, I require a 1-week notice period. Feel free to reach out and we can discuss timelines for your specific needs.",
              },
              {
                question: "What's your typical process for new projects?",
                answer:
                  "My process starts with a thorough discovery phase to understand your needs and objectives. I then develop a detailed proposal including timeline and deliverables. Once approved, I work in iterative cycles with regular check-ins to ensure alignment throughout the project.",
              },
              {
                question: "Do you offer maintenance after project completion?",
                answer:
                  "Yes, I offer maintenance packages tailored to your project's needs. This can include bug fixes, performance monitoring, and regular updates to ensure your application stays current with the latest standards and security practices.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "I specialize in modern frontend technologies with a focus on React, TypeScript, Next.js, and related tools. I also have experience with Node.js for backend development, GraphQL for API design, and various CSS frameworks including Tailwind CSS.",
              },
              {
                question: "How do you handle project communication?",
                answer:
                  "I believe in clear and consistent communication. Depending on your preference, we can set up regular video calls, use project management tools like Jira or Asana, and maintain a dedicated Slack channel. I provide weekly progress reports and am available for ad-hoc discussions as needed.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  {item.question}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
