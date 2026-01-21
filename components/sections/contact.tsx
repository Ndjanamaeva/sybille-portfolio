"use client";

import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { personalInfo } from '@/data/portfolio';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Figma } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const { t, locale } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Mail, label: t.contact.info.email, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: t.contact.info.phone, value: personalInfo.phone, href: `https://wa.me/${personalInfo.phone.replace(/\D/g, '')}` },
    { icon: MapPin, label: t.contact.info.location, value: typeof personalInfo.location === 'string' ? personalInfo.location : personalInfo.location[locale] }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const card = (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-white/20 shadow-sm hover:border-cyan-500/50 transition">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex-shrink-0">
                      <Icon className="h-5 w-5 text-cyan-500" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">{info.label}</div>
                      <div className="text-lg font-semibold text-foreground break-words">{info.value}</div>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    className="block"
                  >
                    {card}
                  </a>
                ) : (
                  <div key={index}>{card}</div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">{t.contact.social.title}</h3>
                <p className="text-sm text-muted-foreground">{t.contact.social.subtitle}</p>
              </div>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2"
                  asChild
                >
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2"
                  asChild
                >
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2"
                  asChild
                >
                  <a href={personalInfo.figma} target="_blank" rel="noopener noreferrer">
                    <Figma className="h-5 w-5" />
                    Figma
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
