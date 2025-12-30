import Header from "../components/Header";
import "./globals.css";
import { aboreto, cormorant, cormorantSC } from "./fonts";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${aboreto.className}`}>
        <Header />        {/* Header på alla sidor */}
        <main>{children}</main>
      </body>
    </html>
  );
}