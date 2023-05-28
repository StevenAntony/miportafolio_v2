import './globals.css'
import { firaSans } from '@/utilities/fonts'


export const metadata = {
  title: 'Steven Developer',
  applicationName: 'Programador FullStack',
  description: 'Programador FullStack en Perú, Steven Antony Castillo Flores',
  keywords: ['PHP','Laravel','Mysql','Programador','FullStack','Backend','Frontend', 'Desarrollador Web','Next.js', 'React', 'JavaScript','Node.js'],
  creator: 'Steven Antony Castillo Flores',
  icon:'logo.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={firaSans.className}>{children}</body>
    </html>
  )
}
