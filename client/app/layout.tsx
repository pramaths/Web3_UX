import type { Metadata } from 'next';
import { cn } from './_lib/utils';
import { Inter, Marcellus, Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from './_components';

const inter = Inter({ subsets: ['latin'] });
const marcellus = Marcellus({ weight: ['400'], subsets: ['latin'] });
const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'UniFi',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cn(
          'antialiased',
          montserrat.className
        )} font-light bg-[#f1f1f1]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
