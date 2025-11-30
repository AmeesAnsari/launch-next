import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import DashboardWrapper from './dashboardWrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Project Management App',
  description: 'Modern project management application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-50 text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-50`}
      >
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
