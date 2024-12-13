import "./globals.css";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
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
