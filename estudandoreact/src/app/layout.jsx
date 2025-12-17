export const metadata = {
  title: 'Meu Form',
  description: 'Form com Next.js e API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
