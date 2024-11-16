'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Cube } from '@/components/cube';
import { TypeWriter } from '@/components/type-writer';
import { BentoGrid } from '@/components/bento-grid';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            className="touch-none"
            dpr={[1, 2]}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
              <Cube />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <TypeWriter text="Exploring Design & Technology" />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A curated space where minimalism meets innovation, featuring insights on design, 
              technology, and creative development.
            </p>
            <motion.a
              href="#projects"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1"
          >
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-muted-foreground rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <Skills />
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        id="projects"
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work in web development, design, and creative coding.
            </p>
          </motion.div>
          <BentoGrid />
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <Experience />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <Contact />
        </div>
      </motion.section>

      <ScrollToTop />
    </>
  );
}