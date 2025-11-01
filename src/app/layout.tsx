import '../index.css'
import '../App.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Bore\'sOver - Bring AI to Life | AI Systems & Automation Solutions',
  description: 'Bore\'sOver - Bring AI to Life. Unlock automation and intelligence for your business with tailored AI system implementation and automation solutions.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

