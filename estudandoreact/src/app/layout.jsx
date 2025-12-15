export const metadata = {
  title: 'Minha App',
  description: 'App com Next.js e API',
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
