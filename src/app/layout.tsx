import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"> 
        
        <Header />

        {children}

        <Footer />
        
        </body>
    </html>
  );
}
