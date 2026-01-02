import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './provider'
import { CommandBar } from '@/components/ui/CommandBar'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { PerformanceWidget } from '@/components/ui/PerformanceWidget'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

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
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
          <CommandBar />
          <CustomCursor />
          <PerformanceWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
