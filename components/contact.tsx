'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:contact@example.com',
    color: 'hover:text-blue-500'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    color: 'hover:text-gray-400'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
    color: 'hover:text-blue-400'
  }
];

export function Contact() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          Have a project in mind or just want to chat? Feel free to reach out through any of these channels.
        </p>

        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-card border border-border ${link.color} transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}