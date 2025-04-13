import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  level: string;
  icon: LucideIcon;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary-light p-4 rounded-lg shadow-sm flex items-center gap-4 border border-accent/20"
    >
      <div className="p-2 bg-accent/10 rounded-lg">
        <Icon size={24} className="text-accent" />
      </div>
      <div>
        <h4 className="font-medium text-accent-light">{name}</h4>
        <span className="text-sm text-accent/80">{level}</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;