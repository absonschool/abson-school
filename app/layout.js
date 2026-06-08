import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
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
      url: "/og-image.jpg",
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
  images: ["/og-image.jpg"],
},
alternates: {
  canonical: "https://abson-school.vercel.app",
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
  className={`${geistSans.variable} ${geistMono.variable}`}
>
  <GoogleAnalytics />
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Abson School",
      url: "https://abson-school.vercel.app",
      logo: "https://abson-school.vercel.app/Abson-School-Logo.png",
      email: "absonschool@gmail.com",
      telephone: "+251911558921",
      description:
        "English Language and Basic Computer Skills Training in Ethiopia",
    }),
  }}
/>
  {children}

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-DJW4BZEC8H"
    strategy="afterInteractive"
  />
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Abson School",
      url: "https://abson-school.vercel.app",
      logo: "https://abson-school.vercel.app/Abson-School-Logo.png",
      description:
        "English Language and Basic Computer Skills Training in Ethiopia"
    }),
  }}
/>
  <Script
    id="google-analytics"
    strategy="afterInteractive"
  >
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-DJW4BZEC8H');
    `}
  </Script>
  <Script
  id="microsoft-clarity"
  strategy="afterInteractive"
>
  {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);
      t.async=1;
      t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "x3qt0eepqe");
  `}
</Script>
</body>
    </html>
  );
}