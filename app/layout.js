import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "VoixCore | The Sovereign Layer 1 Blockchain",
  description: "VoixCore is a high-performance, EVM-compatible blockchain built for speed, security, and scalability.",
  icons: {
    icon: '/logo_web.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
