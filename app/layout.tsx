import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CIFRO - Soluciones Financieras para PyMEs",
  description:
    "Tu socio estratégico financiero. Transformamos la gestión financiera de tu empresa con orden, claridad y resultados concretos.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
