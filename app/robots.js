export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://abson-school.vercel.app/sitemap.xml",
  };
}