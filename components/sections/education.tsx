"use client";

import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { education } from '@/data/portfolio';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function EducationSection() {
  const { t, locale } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-teal-500/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
            {t.education.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.education.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-teal-500" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    className="relative z-10 flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="flex-1 bg-card/50 backdrop-blur-sm rounded-xl p-6 border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-foreground/90 mb-3">
                      {edu.institution}
                    </h4>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{typeof edu.location === 'string' ? edu.location : edu.location[locale]}</span>
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed">
                      {typeof edu.description === 'string' ? edu.description : edu.description[locale]}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
