import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Anupama Nepal",
  description: "Just me and myself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
