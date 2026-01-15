"use client";

import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { globalKPIs } from '@/data/portfolio';
import { useRef } from 'react';
import { TrendingUp, Award, Clock, Users, Code, Smartphone, Palette, Bot } from 'lucide-react';

export function ImpactSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { icon: TrendingUp, value: globalKPIs.experience, label: t.impact.metrics.experienceYears },
    { icon: Award, value: globalKPIs.projectsCompleted, label: t.impact.metrics.projectsCompleted },
    { icon: Clock, value: globalKPIs.onTimeDelivery, label: t.impact.metrics.onTimeDelivery },
    { icon: Users, value: globalKPIs.userSatisfaction, label: t.impact.metrics.userSatisfaction },
    { icon: TrendingUp, value: '~30%', label: t.impact.metrics.userTimeSaved },
    { icon: Bot, value: '25-40%', label: t.impact.metrics.processAutomation }
  ];

  const domains = [
    { icon: Code, title: t.impact.domains.web, color: 'from-cyan-500 to-blue-500' },
    { icon: Smartphone, title: t.impact.domains.mobile, color: 'from-purple-500 to-pink-500' },
    { icon: Palette, title: t.impact.domains.uiux, color: 'from-orange-500 to-red-500' },
    { icon: Bot, title: t.impact.domains.automation, color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <section id="impact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {t.impact.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.impact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-4">
                      <Icon className="h-6 w-6 text-cyan-500" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">{t.impact.domains.title}</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${domain.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground/90">
                    {domain.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
