import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata = {
  title: "Surya Tennis & Pickleball Academy | 10 Years of Excellence in Indore",
  description:
    "Surya Tennis Academy (STA) — Indore's premier tennis, pickleball & table tennis academy. 10+ years of producing state, national & international players under Director Suryansh Yadav. Book your free trial today.",
  keywords:
    "tennis academy Indore, pickleball Indore, Surya Tennis Academy, STA, Suryansh Yadav, tennis coaching, pickleball training, table tennis Indore",
  openGraph: {
    title: "Surya Tennis & Pickleball Academy | Indore",
    description:
      "10 Years of Excellence. Train with the best coaches in Indore. Tennis, Pickleball & Table Tennis.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "Surya Tennis & Pickleball Academy",
              alternateName: "STA",
              description:
                "Premier tennis, pickleball & table tennis academy in Indore with 10+ years of excellence",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1427, Kanadia Main Road, Alok Nagar",
                addressLocality: "Indore",
                addressRegion: "Madhya Pradesh",
                postalCode: "452001",
                addressCountry: "IN",
              },
              telephone: "+919754544265",
              email: "info@sta.ind.in",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "06:00",
                  closes: "10:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "16:00",
                  closes: "22:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
