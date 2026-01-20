"use client";

import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { projects } from '@/data/portfolio';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ProjectsSection() {
  const { t, locale } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

  const toggleProject = (id: string) => {
    setExpandedProjects(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProjects.includes(project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                          {project.title[locale]}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          <span className="font-semibold">{t.projects.role}:</span> {project.role[locale]}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {project.period}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-cyan-600">{t.projects.objective}</h4>
                        <p className="text-foreground/80 leading-relaxed">
                          {project.objective[locale]}
                        </p>
                      </div>

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          <div>
                            <h4 className="font-semibold mb-2 text-cyan-600">{t.projects.actions}</h4>
                            <ul className="list-disc list-inside space-y-1 text-foreground/80">
                              {project.actions[locale].map((action, idx) => (
                                <li key={idx} className="leading-relaxed">{action}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2 text-cyan-600">{t.projects.results}</h4>
                            <ul className="list-disc list-inside space-y-1 text-foreground/80">
                              {project.results[locale].map((result, idx) => (
                                <li key={idx} className="leading-relaxed">{result}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3 text-cyan-600">{t.projects.keyMetrics}</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {Object.entries(project.kpis).map(([key, value], idx) => (
                                <div
                                  key={idx}
                                  className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-3 border border-cyan-500/20"
                                >
                                  <div className="text-xl font-bold text-cyan-600">
                                    {typeof value === 'boolean' ? (value ? '✓' : '✗') : value}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {t.projects.kpiLabels[key as keyof typeof t.projects.kpiLabels] || key}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.links.demo && (
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            {t.projects.viewDemo}
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            {t.projects.viewCode}
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2"
                        onClick={() => toggleProject(project.id)}
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="h-4 w-4" />
                            {t.common.readLess}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4" />
                            {t.common.readMore}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
