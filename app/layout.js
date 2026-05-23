import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://abson-school.vercel.app"),

  title: "Abson School",

  description:
    "English Language and Basic Computer Skills Training in Ethiopia.",

  keywords: [
    "Abson School",
    "English Training",
    "Computer Skills",
    "School Ethiopia",
    "English Course",
    "Computer Training",
    "Computer Classes",
    "English Speaking Course",
    "Abson",
  ],

  authors: [{ name: "Abson School" }],

  verification: {
    google: "h5Uty_EGbhggekctwiszmABA78N2Nz2rOyPD5PIBjXw",
  },

  icons: {
    icon: "/Abson-School-Logo.png",
  },

 openGraph: {
  title: "Abson School",
  description:
    "English Language and Basic Computer Skills Training in Ethiopia.",
  url: "https://abson-school.vercel.app",
  siteName: "Abson School",
  images: [
    {
      url: "/Abson-School-Logo.png",
      width: 1200,
      height: 630,
      alt: "Abson School",
    },
  ],
  locale: "en_US",
  type: "website",
},

twitter: {
  card: "summary_large_image",
  title: "Abson School",
  description:
    "English Language and Basic Computer Skills Training in Ethiopia.",
  images: ["/Abson-School-Logo.png"],
},
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}