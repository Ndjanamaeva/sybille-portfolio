"use client";

import { useI18n } from '@/lib/i18n-context';
import { personalInfo } from '@/data/portfolio';
import { Github, Mail, Linkedin, Heart } from 'lucide-react';

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer & UI/UX Designer
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">{t.nav.home}</h4>
            <div className="space-y-2">
              {['about', 'skills', 'projects', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item);
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="block text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
                >
                  {t.nav[item as keyof typeof t.nav]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">{t.contact.title}</h4>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-cyan-500/20 hover:text-cyan-500 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-muted hover:bg-cyan-500/20 hover:text-cyan-500 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-cyan-500/20 hover:text-cyan-500 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} {personalInfo.name}. {t.footer.rights}.
            </p>
            <p className="flex items-center gap-2">
              {t.footer.builtWith} <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
