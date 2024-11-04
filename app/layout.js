import "./globals.css";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
