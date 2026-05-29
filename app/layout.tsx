import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Automatizaciones F&D | Automatiza tu negocio',
  description: 'Bots inteligentes de WhatsApp, automatización de inventarios, procesos administrativos e integraciones para Pymes, oficinas y retail.',
  keywords: ['automatización', 'WhatsApp bot', 'inventarios', 'CRM', 'Pymes', 'México'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body className="noise">{children}</body>
    </html>
  );
}
