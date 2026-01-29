import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { playfair, overlock } from "./fonts";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${overlock.className}`}>
        <Header />  
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}