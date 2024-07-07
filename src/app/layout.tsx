import NavBar from "@/components/NavBar";
import theme from "@/theme";
import { Container, CssBaseline } from "@mui/material";
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
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <NavBar />
          <Container
            maxWidth="lg"
            sx={{
              mt: 20,
            }}
          >
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
