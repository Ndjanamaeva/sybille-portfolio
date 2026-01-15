"use client";

import { useI18n } from '@/lib/i18n-context';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'fr' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Languages className="h-4 w-4" />
      <motion.span
        key={locale}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        {locale === 'en' ? 'FR' : 'EN'}
      </motion.span>
    </Button>
  );
}
