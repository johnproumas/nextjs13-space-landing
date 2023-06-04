import './globals.css';
import { Commissioner } from '@next/font/google';

const commissioner = Commissioner({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={commissioner.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
