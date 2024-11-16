'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Innovators Inc.',
    position: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: 'Leading the frontend development team in building modern web applications.',
    achievements: [
      'Implemented new design system reducing development time by 40%',
      'Led migration to Next.js improving performance metrics by 60%',
      'Mentored junior developers and established best practices'
    ]
  },
  {
    company: 'Digital Solutions Ltd.',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained full-stack applications for enterprise clients.',
    achievements: [
      'Built scalable microservices architecture serving 1M+ users',
      'Optimized database queries reducing response time by 70%',
      'Implemented automated testing increasing code coverage to 90%'
    ]
  },
  {
    company: 'Creative Agency',
    position: 'UI/UX Developer',
    period: '2018 - 2020',
    description: 'Created engaging user interfaces and experiences for various clients.',
    achievements: [
      'Designed and developed 20+ client websites',
      'Increased user engagement by 45% through UX improvements',
      'Established mobile-first design approach'
    ]
  }
];

export function Experience() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A timeline of my professional journey and key achievements.
        </p>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:grid md:grid-cols-5 md:gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Building2 className="w-4 h-4" />
                  <h3 className="font-semibold">{exp.company}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <p className="font-medium">{exp.position}</p>
              </div>
              
              <div className="md:col-span-3 space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}