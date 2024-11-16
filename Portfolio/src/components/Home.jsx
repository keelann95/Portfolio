import React from 'react'
import DeskCanvas from '../three/DeskCanvas'
import LinkedinCanvas from '../three/LinkedinCanvas'
import WhatsappCanvas from '../three/WhatsappCanvas'
import InstaCanvas from '../three/InstaCanvas'
import { Code2, Palette, Box, Brain, Rocket } from 'lucide-react';
import { ExternalLink, Code, Laptop, Github } from 'lucide-react';
import { useState } from 'react'


import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_le03pk8', 'template_2vg28ck', form.current, {
        publicKey: '5MMtFlNa1zLeXN6NS',
      })
      .then(
        () => {
          setShowAlert(true);
          form.current.reset();
          setTimeout(() => {
            setShowAlert(false);
          }, 5000);

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="relative">
      {showAlert && (
        <div className="fixed top-4 right-4 flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 shadow-lg animate-slide-in-right">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ml-3 text-sm font-medium">
            Message sent successfully! I'll get back to you soon.
          </div>
          <button
            type="button"
            onClick={() => setShowAlert(false)}
            className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8"
          >
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
      )}

      <form ref={form} onSubmit={sendEmail}>
        <div className="flex justify-center items-center p-8 pt-16 bg-gradient-to-b from-black to-gray-900 h-auto">
          <div className="w-[90%] md:w-[60%] lg:w-[40%] h-auto bg-gradient-to-b shadow-xl shadow-gray-600 from-gray-900 to-black p-8 rounded-2xl space-y-6">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white mb-4">Let's Talk</h1>
              <p className="text-zinc-400 w-full md:w-[90%] mx-auto text-lg">
                Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="from_name" className="text-white text-sm">Full Name</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="user_email" className="text-white text-sm">Email Address</label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white text-sm">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-tr from-gray-600 to-black text-white rounded-lg text-lg font-semibold shadow-xl transform transition-all hover:scale-105 hover:shadow-xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

const Home = () => {  
  const cards = [
    {
      icon: <Code2 className="w-12 h-12 text-red-500 mb-4" />,
      title: "Frontend Developer",
      content: "Hey there! I'm Stephen, a frontend-focused software developer currently honing my skills at Moringa School in collaboration with Flatiron School. I'm passionate about creating web experiences that are not only visually engaging but also smooth and intuitive to use."
    },
    {
      icon: <Palette className="w-12 h-12 text-red-500 mb-4" />,
      title: "Tech Stack",
      content: "My toolkit revolves around React.js, JavaScript, HTML, and CSS, and I'm skilled in crafting responsive designs with Tailwind CSS. I believe a clean, efficient UI can transform how users interact with an application, and Tailwind helps me get the details just right."
    },
    {
      icon: <Box className="w-12 h-12 text-red-500 mb-4" />,
      title: "3D Exploration",
      content: "Lately, I've been diving into Three.js, bringing 3D elements to the web to make interactions even more immersive. This exploration keeps my work fresh and lets me push the boundaries of what's possible with modern web design."
    },
    {
      icon: <Brain className="w-12 h-12 text-red-500 mb-4" />,
      title: "Learning Journey",
      content: "In the near future, I'm excited to expand my expertise by learning Next.js for server-side rendering and GSAP for advanced animations. I aim to build even more interactive and performant web experiences."
    },
    {
      icon: <Rocket className="w-12 h-12 text-red-500 mb-4" />,
      title: "Future Goals",
      content: "I'm dedicated to continuously improving my craft, staying on top of new trends, and delivering high-performance applications that make an impact. Looking forward to what's next on this journey in tech!"
    }
  ];

  const cards2 = [
    {
      title: "Project-Based Learning",
      subtitle:"Developed hands-on skills through a variety of projects, including:",
      content1: "MagnumX E-commerce Website: Built a fully responsive e-commerce platform with a teammate, featuring an intuitive user interface and seamless navigation to showcase product displays, highlighting front-end development skills and collaborative experience.",
      content2: "School Website: Created a responsive school website with a focus on front-end design, demonstrating a strong command of HTML, CSS, and React. This project showcases my ability to create visually appealing and user-friendly websites."
    },
    {
      title: "Technical Skills",
      content: "Proficient in JavaScript, React.js, Tailwind CSS, CSS, and HTML. Currently expanding my skillset to include Three.js for 3D graphics and animations, as well as Next.js for more advanced front-end capabilities."
    },
    {
      title: "Code Challenges",
      content: "Lately, I've been diving into Three.js, bringing 3D elements to the web to make interactions even more immersive. This exploration keeps my work fresh and lets me push the boundaries of what's possible with modern web design."
    },
    {
      title: "Learning Journey",
      content: "Completed weekly code challenges consistently over the past 25 weeks, building a strong foundation in problem-solving, algorithm design, and JavaScript fundamentals. All solutions are available on my GitHub, demonstrating a commitment to continuous improvement and technical growth."
    },
    {
      title: "Professional Development",
      content: "Experienced in Git and GitHub for version control and collaborative coding. Gained exposure to AI fundamentals and project management tools like ClickUp and Jira, as well as deployment practices to ensure project readiness and performance."
    },
    {
      title: "Future Goals",
      content: "Focused on mastering Three.js, Next.js, and GSAP to bring high-level animations and interactive experiences to front-end development. Additionally, aiming to expand into back-end development with Node.js and Express.js, working towards becoming a full-stack developer and achieving a well-rounded skill set in software engineering."
    }
  ];
  
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "School Website",
      description: "Modern educational platform with interactive UI/UX",
      link: "https://school-website-sepia-theta.vercel.app/",
      icon: <Laptop className="w-6 h-6" />,
      tags: [ "Tailwind","UI/UX", "React"],
      color: "from-blue-600 to-cyan-400"
    },
    {
      title: "MagnumX",
      description: "Cutting-edge web application with dynamic features",
      link: "https://magnumx.vercel.app/",
      icon: <Code className="w-6 h-6" />,
      tags: ["React", "Animation", "UI/UX"],
      color: "from-purple-600 to-pink-400"
    }
  ];
  return (
    <>
    <section className="p-8 align-center justify-center items-center sm:p-10">
  <div className="pt-16 sm:pt-[70px]">
    <div className="text-center">
      <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold items-center gap-2">
        Hi, I'm Stephen Mwaniki <span className="text-3xl md:text-4xl lg:text-5xl animate-wave">👋</span>
      </h5>
      <p className="pt-4 text-lg sm:text-2xl md:text-3xl text-gray-400 font-semibold">
        Building products & brands
      </p>
    </div>
  </div>
  
  <div className="flex justify-between items-center mt-8">
    <div className="m-4 w-[10%] sm:w-[8%] h-[8vh] sm:h-[10vh] flex justify-center">
      <LinkedinCanvas />
    </div>
    <div className="m-4 w-[10%] sm:w-[8%] h-[8vh] sm:h-[10vh] flex justify-center">
      <WhatsappCanvas />
    </div>
  </div>
  
  
  <div className="flex justify-center items-center pt-10">
    <div className="w-full sm:w-[80%] h-[50vh] sm:h-[70vh]">
      <DeskCanvas />
    </div>
  </div>
  
  <div className="flex justify-between items-center mt-8">
    <div className="m-4 w-[10%] sm:w-[8%] h-[8vh] sm:h-[10vh] flex justify-center">
      <InstaCanvas />
    </div>
  </div>
</section>


     
        <section className="py-16 px-4 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About <span className="text-red-500">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-zinc-900 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 border border-zinc-800"
            >
              <div className="flex flex-col items-center mb-4">
                {card.icon}
                <h3 className="text-xl font-semibold text-white mb-4">{card.title}</h3>
              </div>
              <p className="text-zinc-400 text-center leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

<div className='   pt-16 flex justify-center items-center align-middle'>
    <section className="relative rounded-2xl py-20 px-4 bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-10xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-lg">Showcasing frontend magic and innovative designs</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-xl bg-zinc-800/30 backdrop-blur-sm p-8 transition-all duration-500 hover:bg-zinc-800/50">
                {/* Gradient border animation */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-border-shine" />
                </div>

                <div className="relative">
                  {/* Content */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`rounded-xl bg-gradient-to-r ${project.color} p-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 group-hover:text-zinc-300">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="text-zinc-400 group-hover:text-purple-400 transition-all duration-300 transform group-hover:rotate-12" />
                  </div>

                  {/* Tags */}                  {/* Tags */}

                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-zinc-700/50 text-zinc-300 transition-all duration-300 group-hover:bg-purple-500/20 group-hover:text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effects */}
                <div className="absolute inset-0 rounded-xl transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10" />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-purple-500/50 transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50 pointer-events-none">
        <div className="absolute w-2 h-2 bg-purple-500 rounded-full top-1/4 left-1/4 animate-pulse" />
        <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-3/4 left-3/4 animate-pulse animation-delay-1000" />
        <div className="absolute w-2 h-2 bg-pink-500 rounded-full top-1/2 right-1/4 animate-pulse animation-delay-2000" />
      </div>
    </section>
    </div>

    <section className="py-14 px-4 bg-gradient-to-b from-black via-zinc-900 to-gray-900">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-extrabold text-center mb-10 text-white">
      My <span className="text-red-500">Experience</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards2.map((card, index) => (
        <div 
          key={index}
          className="bg-gray-800 p-5 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-zinc-900 hover:border-transparent border border-gray-700 shadow-md shadow-red-600/10 group"
        >
          <div className="flex flex-col items-center text-center">
            
            <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-white">
              {card.title}
            </h3>
            <p className="text-zinc-400 text-md font-serif leading-relaxed">
              {card.subtitle}
            </p>
            <ul className="text-zinc-200 text-md font-serif space-y-1 mt-2">
              {card.content1 && <li>- {card.content1}</li>}
              {card.content2 && <li>- {card.content2}</li>}
              {!card.content1 && !card.content2 && <li>{card.content}</li>}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section>
 <ContactUs />
</section>



    </>
  )
}

export default Home
