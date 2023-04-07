import Link from 'next/link'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav className='nav-bar'>
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/about">About</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
