import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import 'app/globals.css';

const IBM_Plex = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Charts',
  description: 'Test task charts NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={IBM_Plex.className}>{children}</body>
    </html>
  );
}
