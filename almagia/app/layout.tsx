import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { cormorant, } from "./fonts";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${cormorant.className}`}>
        <Header />  
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}