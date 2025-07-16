import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Free Background Remover | Remove Image Backgrounds Instantly',
  description:
    'Remove image backgrounds 100% free using AI. Upload any photo and get a transparent background in seconds. No watermark, no sign-up needed.',
  keywords:
    'image bg remover, free bg remover, bg remover, photo bg remover, background remover, free image background remover, remove background from image, AI background remover, photo editing, transparent background, online image editor',
  authors: [{ name: 'BG Remover Team', url: 'https://bg-remove-ruddy.vercel.app/' }],
  metadataBase: new URL('https://bg-remove-ruddy.vercel.app/'), // replace with your domain
  openGraph: {
    title: 'Free AI Background Remover | No Sign-Up Required',
    description:
      'Try our free AI-powered background remover tool. Upload an image and remove the background instantly with high-quality results.',
    url: 'https://bg-remove-ruddy.vercel.app/',
    siteName: 'BG Remover',
    images: [
      {
        url: 'https://bg-remove-ruddy.vercel.app//og-image.jpg', // add actual og:image
        width: 1200,
        height: 630,
        alt: 'Before and after removing image background',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bgremover', // optional
    title: 'Free Background Remover | AI-Powered Tool',
    description:
      'Remove backgrounds from your images instantly and for free. No login, no watermark. Try now!',
    images: ['https://bg-remove-ruddy.vercel.app//og-image.jpg'], // add actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bg-remove-ruddy.vercel.app/" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
