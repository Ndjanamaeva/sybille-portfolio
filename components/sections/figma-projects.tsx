
"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { figmaProjects } from "@/data/portfolio";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function FigmaProjectsSection() {
  const { t } = useI18n();
  return (
    <section id="figma-projects" className="py-24 bg-gradient-to-b from-blue-50/60 to-white dark:from-gray-900/60 dark:to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400">
            {t.figma.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.figma.subtitle}
          </p>
        </motion.div>
        <div className="flex flex-col gap-12 md:gap-16 px-2 md:px-16 lg:px-32">
          {figmaProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            // Example dynamic images for demo purposes
            // Use Unsplash images with a neutral/tech/design theme
            const images = [
              `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80`,
              `https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80`,
              `https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80`
            ];
            // Use translations for title/description if available
            const translated = t.figma.projects?.[idx];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${isEven ? '' : 'md:flex-row-reverse'} gap-4 md:gap-8 w-full`}
              >
                {/* Text Side */}
                <div className="flex-1 px-2 md:px-4 flex flex-col justify-center items-start">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400">
                    {translated?.title || project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">{translated?.description || project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow hover:scale-105 hover:shadow-lg transition-transform duration-200 dark:from-cyan-400 dark:to-blue-400"
                  >
                    {t.figma.viewProject}
                  </a>
                </div>
                {/* Dynamic Carousel Side */}
                <div className="flex-1 flex items-center justify-center min-w-[220px] max-w-xs w-full px-2 md:px-4">
                  <div className="relative w-[240px] h-[480px] flex items-center justify-center group">
                    {/* Slightly reduced phone screen, no border/frame, with hover animation */}
                    <div className="relative z-20 w-[224px] h-[448px] rounded-[2rem] overflow-hidden flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:z-30">
                      <Carousel className="w-full h-full">
                        <CarouselContent>
                          {images.map((img, i) => (
                            <CarouselItem key={i}>
                              <div className="w-full h-full flex items-center justify-center">
                                <img
                                  src={img}
                                  alt={(translated?.title || project.title) + ' screenshot ' + (i + 1)}
                                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                  style={{ aspectRatio: '9/19.5', maxHeight: '448px', maxWidth: '224px' }}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
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
