"use client";

import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { personalInfo } from '@/data/portfolio';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle, XCircle, Figma } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ContactSection() {
  const { t, locale } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    { icon: Mail, label: t.contact.info.email, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: t.contact.info.phone, value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: t.contact.info.location, value: typeof personalInfo.location === 'string' ? personalInfo.location : personalInfo.location[locale] }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus('success');

    setTimeout(() => {
      setSubmitStatus('idle');
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex-shrink-0">
                      <Icon className="h-5 w-5 text-cyan-500" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{info.label}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </motion.div>
                );

                return info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    target={info.icon === Github ? '_blank' : undefined}
                    rel={info.icon === Github ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">{t.contact.form.name}</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="mt-2"
                  placeholder={t.contact.form.name}
                />
              </div>

              <div>
                <Label htmlFor="email">{t.contact.form.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2"
                  placeholder={t.contact.form.email}
                />
              </div>

              <div>
                <Label htmlFor="subject">{t.contact.form.subject}</Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  className="mt-2"
                  placeholder={t.contact.form.subject}
                />
              </div>

              <div>
                <Label htmlFor="message">{t.contact.form.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="mt-2 min-h-[150px]"
                  placeholder={t.contact.form.message}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {t.contact.form.send}
                  </>
                )}
              </Button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-500/10 p-4 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>{t.contact.form.success}</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-500/10 p-4 rounded-lg"
                >
                  <XCircle className="h-5 w-5" />
                  <span>{t.contact.form.error}</span>
                </motion.div>
              )}
            </form>

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
