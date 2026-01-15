"use client";

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { Target, Users, Lightbulb, Shield, Rocket, Zap, Globe, BookOpen } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function AboutSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description
    },
    {
      icon: Users,
      title: t.about.values.collaboration.title,
      description: t.about.values.collaboration.description
    },
    {
      icon: Lightbulb,
      title: t.about.values.creativity.title,
      description: t.about.values.creativity.description
    },
    {
      icon: Shield,
      title: t.about.values.responsibility.title,
      description: t.about.values.responsibility.description
    }
  ];

  const motivations = [
    { icon: Rocket, text: t.about.motivation.impact },
    { icon: Zap, text: t.about.motivation.simplicity },
    { icon: Globe, text: t.about.motivation.transformation },
    { icon: BookOpen, text: t.about.motivation.learning }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border mb-12"
          >
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              {t.about.intro}
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              {t.about.vision}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">{t.about.values.title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                        <Icon className="h-6 w-6 text-cyan-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">{t.about.motivation.title}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {motivations.map((motivation, index) => {
                const Icon = motivation.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                      <p className="text-foreground/90">{motivation.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
