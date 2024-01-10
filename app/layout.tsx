import '@radix-ui/themes/styles.css';
import './theme-config.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar'
import { Theme } from '@radix-ui/themes';

const inter = Inter({ 
  subsets: ['latin'],
  variable:'--font-inter',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='winter'>
      <body className={inter.className}>
      <Theme appearance="light" accentColor="violet" grayColor="olive" radius="large">
      <NavBar/>
      <main>{children}</main>
      </Theme>
        </body>
    </html>
  )
}
