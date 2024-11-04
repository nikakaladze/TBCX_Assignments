import "./globals.css";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
