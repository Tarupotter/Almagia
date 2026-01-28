import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { playfair } from "./fonts";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${playfair.className}`}>
        <Header />  
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}