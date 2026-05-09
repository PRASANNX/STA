export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sta-website.vercel.app/sitemap.xml",
  };
}
