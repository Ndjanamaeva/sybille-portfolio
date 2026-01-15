import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { I18nProvider } from '@/lib/i18n-context';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sybille Ndjana Ebogo Maeva - Software Engineer & UI/UX Designer',
  description: 'Software Engineer & UI/UX Designer specializing in high-impact web and mobile applications. Creating user-centered digital solutions from concept to deployment.',
  keywords: ['Software Engineer', 'UI/UX Designer', 'Web Development', 'Mobile Development', 'Flutter', 'React', 'Cameroon'],
  authors: [{ name: 'Sybille Ndjana Ebogo Maeva' }],
  openGraph: {
    title: 'Sybille Ndjana Ebogo Maeva - Software Engineer & UI/UX Designer',
    description: 'Software Engineer & UI/UX Designer specializing in high-impact web and mobile applications',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sybille Ndjana Ebogo Maeva - Software Engineer & UI/UX Designer',
    description: 'Software Engineer & UI/UX Designer specializing in high-impact web and mobile applications',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
            <Toaster />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
