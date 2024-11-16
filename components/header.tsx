'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { Clock } from './clock';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    setCurrentPath(window.location.pathname);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[60px] border-b transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-border/50'
          : 'bg-background/50 backdrop-blur-sm border-transparent'
      )}
    >
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Left Section - Location */}
          <div className="hidden md:flex items-center space-x-3 text-sm text-muted-foreground">
            <span>Latest Visit</span>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-muted/50 rounded-full">
              <span role="img" aria-label="Location">🌍</span>
              <span>Paris, France</span>
            </div>
          </div>

          {/* Center Section - Navigation */}
          <nav className="hidden md:block">
            <div className="px-1.5 py-1.5 bg-muted/10 rounded-full">
              <ul className="flex space-x-1">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/posts', label: 'Posts' },
                  { href: '/about', label: 'About' },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={cn(
                        'px-4 py-1.5 rounded-full transition-colors inline-block',
                        currentPath === item.href
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Right Section - Controls */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Clock />
            </div>
            <button
              className="p-2 hover:bg-muted/20 rounded-full transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted/20 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/posts', label: 'Posts' },
                  { href: '/about', label: 'About' },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={cn(
                        'block px-4 py-2 rounded-lg transition-colors',
                        currentPath === item.href
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between px-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>Latest Visit</span>
                    <div className="flex items-center space-x-1 px-2 py-1 bg-muted/50 rounded-full">
                      <span role="img" aria-label="Location">🌍</span>
                      <span>Paris, France</span>
                    </div>
                  </div>
                  <Clock />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}