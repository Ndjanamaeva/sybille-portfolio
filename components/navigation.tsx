"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { LanguageToggle } from '@/components/language-toggle';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useI18n();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 origin-left z-50"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-b shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-20 relative">
            <div className="flex items-center gap-8">
              {[
                { key: 'home', id: 'hero' },
                { key: 'about', id: 'about' },
                { key: 'skills', id: 'skills' },
                { key: 'projects', id: 'projects' },
                { key: 'services', id: 'services' },
                { key: 'contact', id: 'contact' }
              ].map((item, index) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-cyan-500 transition-colors"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-0 flex items-center gap-2"
            >
              <LanguageToggle />
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
