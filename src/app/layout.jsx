import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navigation Bar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'SaintAnimeList',
  description: 'Track and share your anime journey with SaintAnimeList.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className +" bg-cyberpunk-primary"}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
