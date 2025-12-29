import Header from "../components/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <Header />        {/* Header på alla sidor */}
        <main>{children}</main>
      </body>
    </html>
  );
}