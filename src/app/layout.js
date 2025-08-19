import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Plus from "@/components/Plus";

export const metadata = {
  title: "Anupama Nepal",
  description: "Just me and myself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Plus />
        <Footer />
      </body>
    </html>
  );
}
