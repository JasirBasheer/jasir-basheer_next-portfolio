import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "../../components/navbar";
import ThemeProvider from "../../providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Jasir Basheer",
  description: "Jasir Basheer's portfolio",
  keywords: [
    "Jasir",
    "Jasir Basheer",
    "developer",
    "entrepreneur",
    "coding",
    "portfolio",
    "Mern stack developer",
    "Mern stack developer in kerala",
    "web development",
    "Next.js",
    "developer tutorials",
    "community",
  ],
  publisher: "Jasir Basheer",
  openGraph: {
    title: "Jasir Basheer | Developer & Entrepreneur Portfolio",
    description:
      "Discover Jasir Basheer's portfolio, featuring coding projects, developer tutorials, and entrepreneurial insights. Join my growing developer community!",
    type: "website",
    url: "https://www.jasirbasheer.dev",
    siteName: "Jasir Basheer Portfolio",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@itsjasirhere",
    title: "Jasir Basheer | Developer & Entrepreneur Portfolio",
    description:
      "Explore Jasir Basheer's portfolio, featuring coding projects, tutorials, and entrepreneurial insights.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/jasirbasheer.jpg",
    apple: "/jasirbasheer.jpg",
  },
  alternates: {
    canonical: "https://www.yourwebsite.com",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider>
          <div className="flex w-full min-h-screen">
            <Navbar />
            <main className="flex-1 h-screen overflow-y-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
