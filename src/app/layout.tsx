import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import NavBar from "@/components/NavBar";
import theme from "@/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunny Ughareja - Software Engineer",
  description: "The portfolio of Sunny Ughareja, a software engineer.",
  openGraph: {
    type: "website",
    url: "https://iamsunnyu.com",
    title: "Sunny Ughareja - Software Engineer",
    description: "The portfolio of Sunny Ughareja, a software engineer.",
    siteName: "Sunny Ughareja",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline to kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <html lang="en">
        <GoogleAnalytics />
        <body
        // TODO add colorful animated gradient
        // style={{
        //   background: "linear-gradient(to top, #C0C0C0, #FFFFFF)",
        //   minHeight: "200vh",
        // }}
        >
          <NavBar />
          {children}
          <Footer />
          <VercelAnalytics />
        </body>
      </html>
    </ThemeProvider>
  );
}
