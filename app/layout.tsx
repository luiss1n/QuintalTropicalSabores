import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Quintal Tropical Sabores | Sorveteria e sabores em Lambari",
  description: "Sorvetes, açaís, lanches e pequenos momentos para saborear no centro de Lambari, MG.",
  openGraph: { title: "Quintal Tropical Sabores", description: "Sabores para deixar seu dia mais gostoso.", locale: "pt_BR", type: "website" },
  icons: { icon: "/icon.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
