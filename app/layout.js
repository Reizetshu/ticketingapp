import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ticketing App',
  description: 'Simple ticketing app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col h-screen max-h-screen'>
          <NavBar />
          <div className='flex-grow overflow-y-auto bg-page text-default-text'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
