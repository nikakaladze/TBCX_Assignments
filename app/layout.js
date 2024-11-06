import "./globals.css";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "./Components/ThemeSwitcher";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
          <Footer />
      </ThemeProvider >
        </body>
      </UserProvider>
    </html>
  );
}
