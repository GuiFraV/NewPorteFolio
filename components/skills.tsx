'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Terminal, Cpu, LineChart, Globe } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive web applications with modern frameworks.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: Terminal,
    title: 'Backend Development',
    description: 'Creating scalable server-side applications and APIs.',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems']
  },
  {
    icon: Cpu,
    title: 'DevOps',
    description: 'Managing deployment and infrastructure automation.',
    technologies: ['Docker', 'AWS', 'CI/CD', 'Kubernetes']
  },
  {
    icon: LineChart,
    title: 'Analytics',
    description: 'Implementing tracking and analyzing user behavior.',
    technologies: ['Google Analytics', 'Mixpanel', 'Hotjar', 'Amplitude']
  },
  {
    icon: Globe,
    title: 'Performance',
    description: 'Optimizing web applications for speed and efficiency.',
    technologies: ['Webpack', 'Lighthouse', 'Core Web Vitals', 'SEO']
  }
];

export function Skills() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and areas of expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <skill.icon className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-muted-foreground mb-4">{skill.description}</p>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}