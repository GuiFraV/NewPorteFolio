'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Figma } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Design System',
    description: 'A comprehensive design system built with React and AI capabilities for dynamic theming and component generation.',
    category: 'Development',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=80',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4',
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
      figma: 'https://figma.com'
    },
    size: 'large',
    featured: true
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    description: 'Real-time analytics dashboard for e-commerce platforms with advanced data visualization.',
    category: 'Web App',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-keyboard-with-blue-backlighting-1745-large.mp4',
    links: {
      github: 'https://github.com'
    },
    size: 'medium'
  },
  {
    id: 3,
    title: 'Portfolio Template',
    description: 'Minimalist portfolio template with dark mode and smooth animations.',
    category: 'Template',
    tech: ['React', 'Framer Motion', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000&auto=format&fit=crop&q=80',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-at-his-desk-with-a-laptop-4790-large.mp4',
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    },
    size: 'small'
  },
  {
    id: 4,
    title: 'Mobile App Design',
    description: 'UI/UX design for a meditation and mindfulness mobile application.',
    category: 'Design',
    tech: ['Figma', 'Prototyping', 'Motion Design'],
    image: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=1000&auto=format&fit=crop&q=80',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4',
    links: {
      figma: 'https://figma.com'
    },
    size: 'medium'
  },
  {
    id: 5,
    title: 'Three.js Experience',
    description: '3D interactive web experience showcasing creative coding capabilities.',
    category: '3D',
    tech: ['Three.js', 'WebGL', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-quick-lights-4264-large.mp4',
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    },
    size: 'small'
  }
];

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`group relative overflow-hidden rounded-xl bg-card border border-border ${
            project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
            project.size === 'medium' ? 'md:col-span-2 lg:col-span-1' : ''
          }`}
        >
          {/* Media Container */}
          <div className="aspect-[16/9] relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <video
              src={project.video}
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="space-y-3 text-white">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-primary/20 backdrop-blur-sm rounded-full">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2 py-1 text-xs font-medium bg-yellow-500/20 backdrop-blur-sm rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200/80 line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                {project.links.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                )}
                {project.links.github && (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={16} />
                  </motion.a>
                )}
                {project.links.figma && (
                  <motion.a
                    href={project.links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Figma size={16} />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}