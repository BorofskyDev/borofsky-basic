import { lato, openSans } from './fonts'
import '../styles/globals.scss'

const header = lato
const body = openSans

export const metadata = {
  title: 'Enter Title Here',
  description: 'SEO Description Here',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${header.variable} ${body.variable}`}>{children}</body>
    </html>
  )
}
