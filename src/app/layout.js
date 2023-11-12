
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '@kawsar firoz@',
  description: 'Generated by kawsar firoz',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
