import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  sourceCode: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, sourceCode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className=" bg-primary-dark rounded-lg overflow-hidden shadow-md border border-accent/20 "

    >
      <img src={image} alt={title} className=" w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="relative z-50 text-xl text-center font-semibold mb-2 text-accent">{title}</h3>
        <p className="text-accent-light mb-4">{description}</p>
        <div className="flex justify-center mt-4">
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 z-20 py-2 rounded-lg flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-primary-dark transition-all duration-200"
          >
            <Github size={20} />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
