import "./globals.css";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <UserProvider>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}

