"use client";

import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { services, personalInfo } from '@/data/portfolio';
import { useRef } from 'react';
import { Palette, Code2, Server, Smartphone, Zap, CheckCircle, MapPin, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const iconMap: Record<string, any> = {
  Palette,
  Code2,
  Server,
  Smartphone,
  Figma: Palette,
  Zap
};

export function ServicesSection() {
  const { t, locale } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Code2;
              const serviceKey = service.id as keyof typeof t.services;
              const serviceData = t.services[serviceKey] as { title: string; description: string };

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-cyan-500" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{serviceData.title}</h3>
                  <p className="text-muted-foreground mb-4">{serviceData.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.categories.map((category, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">{t.services.availability.title}</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">{t.services.availability.status}</div>
                  <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">
                    {personalInfo.availability === 'available' ? t.services.availability.status : ''}
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">{t.services.availability.start}</div>
                  <div className="text-sm text-muted-foreground">{t.services.availability.start}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">{t.services.availability.response}</div>
                  <div className="text-sm text-muted-foreground">{personalInfo.responseTime}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">{t.services.availability.location}</div>
                  <div className="text-sm text-muted-foreground">
                    {typeof personalInfo.location === 'string' ? personalInfo.location : personalInfo.location[locale]} / {t.services.availability.remote}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 md:col-span-2">
                <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">{t.services.availability.types}</div>
                  <div className="text-sm text-muted-foreground">{t.services.availability.typesValue}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                onClick={() => scrollToSection('contact')}
              >
                {t.services.cta.discuss}
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => scrollToSection('contact')}>
                {t.services.cta.quote}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
