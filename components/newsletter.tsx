'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto text-center"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
      <p className="text-muted-foreground mb-8">
        Get the latest articles and insights delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
          required
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2"
        >
          Subscribe
          <Send size={16} />
        </motion.button>
      </form>
    </motion.div>
  );
}