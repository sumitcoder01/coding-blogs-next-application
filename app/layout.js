import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'coding blogs',
  description: 'coding blogs is next  application which helps developer to solve coding bugs,error and provide latest news that helps developer to learn new concepts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
