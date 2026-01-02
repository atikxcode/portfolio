import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atiqul Islam - Full Stack Software Developer',
  description: 'Full Stack Software Developer specializing in modern web applications, system architecture, and comprehensive software solutions. Expert in React.js, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, and cloud technologies.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
