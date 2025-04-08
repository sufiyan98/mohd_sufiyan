import React, { useState, useEffect } from 'react';
import myImage from './images/MyImage.png';
import myResearchAssistant from './images/aiassistant.png';
import loan from './images/loanapproval.png';
import videocall from './images/videocall.png';


function Typewriter({
  texts,
  speed = 100,
  pause = 1500,
}: {
  texts: string[];
  speed?: number;
  pause?: number;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex <= texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (!deleting && charIndex > texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDeleting(true);
        setCharIndex(charIndex - 1);
      }, pause);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [texts, textIndex, charIndex, deleting, speed, pause]);

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {displayedText}
      <span className="blinking-caret"></span>
    </span>
  );
}
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Download, Mail, ExternalLink, Code2, Database, Layout, Server } from 'lucide-react';
import Navbar from './components/Navbar';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import Background from './components/Background';

function App() {
  const { scrollYProgress } = useScroll();
  
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const backendSkills = [
    { name: 'Java (Advanced)', level: 'Intermediate', icon: Server },
    { name: 'MySQL', level: 'Intermediate', icon: Database },
    { name: 'Spring MVC', level: 'Intermediate', icon: Server },
    { name: 'Spring Boot', level: 'Intermediate', icon: Server },
    { name: 'Microservices Architecture', level: 'Intermediate', icon: Server },
    { name: 'Spring Data JPA', level: 'Intermediate', icon: Database },
    { name: 'Hibernate', level: 'Intermediate', icon: Database },
  ];

  const frontendSkills = [
    { name: 'HTML5', level: 'Intermediate', icon: Layout },
    { name: 'CSS3', level: 'Intermediate', icon: Layout },
    { name: 'JavaScript', level: 'Intermediate', icon: Code2 },
    { name: 'React JS', level: 'Intermediate', icon: Code2 },
    { name: 'Bootstrap', level: 'Intermediate', icon: Layout },
    { name: 'Material UI', level: 'Intermediate', icon: Layout },
    { name: 'Tailwind CSS', level: 'Intermediate', icon: Layout },
  ];

 

  const projects = [
    {
      title: 'Loan Approval Automation',
      description: 'Automated loan approval system using machine learning algorithms and Spring Boot microservices.',
      image: loan,
      sourceCode: 'https://github.com/sufiyan98/Loan-Approval-Automation-System',
    },
    {
      title: 'Research Assistant – AI',
      description: 'AI-powered research assistant that helps researchers find and analyze academic papers.',
      image: myResearchAssistant,
      sourceCode: 'https://github.com/sufiyan98/Research-Assistant-SpringBoot',
    },
    {
      title: 'Video Call Application',
      description: 'Real-time video calling application built with WebRTC and Spring Boot.',
      image: videocall,
      sourceCode: 'https://github.com/sufiyan98/Video-Call-App',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-dark text-accent-light">
      <Background />
      <Navbar />


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
<motion.div 
  className="container mx-auto max-w-screen-2xl px-4 flex flex-col-reverse lg:flex-row items-center justify-between"
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <p className="text-accent mb-2">Hello, I'm</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-accent-light mb-4">Mohammed Sufiyan</h1>
            <h2 className="text-xl lg:text-2xl text-accent/80 mb-6">
              <Typewriter
                texts={[
                  'Java Full Stack Developer . . .',
                  'Backend Developer . . .',
                  'Web Developer . . .',
                ]}
                speed={80}
                pause={800}
              />
            </h2>
            <div className="relative z-50 flex gap-4 justify-center lg:justify-start mb-6">
<a
  href="https://drive.google.com/file/d/1hFSOdNH6T-ITv0JUURoANdLg4_-wCfrs/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block w-fit bg-accent text-primary-dark px-6 py-3 rounded-lg flex items-center gap-2 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-200 hover:scale-105"
>
  <Download size={20} /> Download CV
</a>
<Link
  to="contact"
  smooth={true}
  className="border-2 border-accent text-accent px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-accent hover:text-primary-dark transition-all duration-200 hover:scale-105 cursor-pointer"
>
  <Mail size={20} /> Contact Info
</Link>
            </div>
            <div className="relative z-20 flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com/sufiyan98" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/mohammedsufiyan98" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className=" lg:w-1/2 mb-10 lg:mb-0"
          >
            <img
              src={myImage}
              alt="Mohammed Sufiyan"
              className="rounded-full w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-cover mx-auto shadow-lg border-4 border-accent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-primary-dark">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-accent"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-dark/50 p-6 rounded-lg border border-accent/20 "
            >
              <h3 className="text-2xl font-semibold mb-2 text-accent">Experience</h3>
              <p className="text-accent-light">3 years <br /> Java Full Stack Developer</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-dark/50 p-6 rounded-lg border border-accent/20"
            >
              <h3 className="text-2xl font-semibold mb-2 text-accent">Education</h3>
              <p className="text-accent-light">Bachelor's in Technology <br /> Computer Science and Engineering</p>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent-light text-lg text-center max-w-3xl mx-auto"
          >
            Hey there! I'm a self-taught Full Stack Developer with around 3 years of experience and a real passion for diving into new technologies. I love working with Java Spring Boot for microservices and building sleek front-end experiences with React.js, HTML, and CSS. When I'm not coding, you'll probably find me enjoying a cup of tea (or coffee). I'm all about learning and growing, and I can't wait to take on new challenges!
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="experience" className="py-20 px-4 bg-primary-dark">
        <div className="container mx-auto max-w-screen-2xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-accent"
          >
            Experience
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">Frontend Development</h3>
              <div className="grid gap-4">
                {frontendSkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">Backend Development</h3>
              <div className="grid gap-4">
                {backendSkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className=" py-20 px-4">
        <div className="container mx-auto max-w-screen-2xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-accent"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="relative z-20 text-center mt-12">
           <a href="https://github.com/sufiyan98" target="_blank" rel="noopener noreferrer">
  <button className="bg-accent text-primary-dark px-6 py-3 rounded-lg flex items-center gap-2 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-200 mx-auto hover:scale-105">
    <ExternalLink size={20} /> Explore All
  </button>
</a> 





          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-32 py-20 px-4 bg-primary-dark">
        <div className="relative z-50 container mx-auto max-w-screen-2xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-accent"
          >
            Contact Me
          </motion.h2>
          <div className="relative z-20 flex flex-col items-center gap-6 mb-12">
            <a
              href="mailto:mohammedsufiyan2001@gmail.com"
              className="flex items-center gap-3 text-accent-light hover:text-accent transition-colors"
            >
              <Mail size={24} />
              mohammedsufiyan2001@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/mohammedsufiyan98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-accent-light hover:text-accent transition-colors"
            >
              <Linkedin size={24} />
              LinkedIn Profile
            </a>
          </div>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.querySelector('input[name="name"]') as HTMLInputElement).value.trim();
              const email = (form.querySelector('input[name="email"]') as HTMLInputElement).value.trim();
              const message = (form.querySelector('textarea[name="message"]') as HTMLTextAreaElement).value;


              emailjs.send(
                'service_ltzzq0l',
                'template_vu83z8k',
                { from_name: name, from_email: email, message },
                'J9DL4z5Ls3kg8QdjI'
              ).then(
                () => alert('Message sent successfully!'),
                (error) => alert('Failed to send message: ' + error.text)
              );
            }}
            className="w-full z-50 max-w-full px-4 sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-primary-light text-accent-light border border-accent/30 focus:outline-none focus:border-accent transition-all duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-primary-light text-accent-light border border-accent/30 focus:outline-none focus:border-accent transition-all duration-300"
              required
           />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-primary-light text-accent-light border border-accent/30 focus:outline-none focus:border-accent transition-all duration-300"
              required
           ></textarea>
            <button
              type="submit"
              className="relative z-20 px-6 py-3 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-primary-dark transition-all duration-300 hover:scale-105 mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-50 bg-primary-light py-8 px-4">
        <div className="container mx-auto max-w-screen-2xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex gap-6 mb-6 md:mb-0">
              <Link to="about" smooth={true} className="text-accent-light hover:text-accent transition-colors cursor-pointer">
                About
              </Link>
              <Link to="experience" smooth={true} className="text-accent-light hover:text-accent transition-colors cursor-pointer">
                Experience
              </Link>
              <Link to="projects" smooth={true} className="text-accent-light hover:text-accent transition-colors cursor-pointer">
                Projects
              </Link>
              <Link to="contact" smooth={true} className="text-accent-light hover:text-accent transition-colors cursor-pointer">
                Contact
              </Link>
            </nav>
            <p className="text-accent-light text-center">© 2025 Mohammed Sufiyan. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
