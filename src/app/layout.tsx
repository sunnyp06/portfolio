import Footer from "@/components/Footer";
import theme from "@/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
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
        <body
        // TODO add colorful animated gradient
        // style={{
        //   background: "linear-gradient(to top, #C0C0C0, #FFFFFF)",
        //   minHeight: "200vh",
        // }}
        >
          {/* TODO add back navbar once About page is finished */}
          {/* <NavBar /> */}
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
