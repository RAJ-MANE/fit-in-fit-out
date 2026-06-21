import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Dt. Poonam Kalia | Best Clinical Dietitian in Thakur Village, Kandivali East, Mumbai",
  description:
    "Personalized, evidence-based nutrition plans for weight management, diabetes care, clinical nutrition, women's health, and pediatric care by Dt. Poonam Kalia, Clinical Dietitian at INHS Asvini Hospital. Book a consultation at Vasant Sagar, Thakur Village.",
  keywords:
    "dietitian in thakur village, clinical dietitian kandivali east, poonam kaila nutritionist, weight management mumbai, best dietitian kandivali mumbai, inhs asvini dietitian, diabetes care dietitian, female nutritionist mumbai",
  authors: [{ name: "Dt. Poonam Kalia" }],
  openGraph: {
    type: "website",
    url: "https://fitinfitout.com/",
    title: "Dt. Poonam Kalia | Clinical Dietitian & Nutritionist Mumbai",
    description:
      "Sustainable, science-backed health transformations through personalized nutrition and lifestyle coaching at Thakur Village, Kandivali East, Mumbai.",
    images: [{ url: "/hero_nutrition.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dt. Poonam Kalia | Clinical Dietitian",
    description:
      "Sustainable, science-backed health transformations through personalized nutrition and lifestyle coaching.",
    images: ["/hero_nutrition.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dt. Poonam Kalia | Fit In Fit Out",
    "image": "logo.png",
    "priceRange": "$$",
    "telephone": "+919920659600",
    "email": "contact@fitinfitout.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Krishna B Wing, Vasant Sagar, Thakur Village",
      "addressLocality": "Kandivali East, Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400101",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.211756,
      "longitude": 72.872412,
    },
    "url": "https://fitinfitout.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday", "Friday"],
        "opens": "18:00",
        "closes": "20:00",
      },
    ],
    "sameAs": [
      "https://www.instagram.com/fit_in_fitout_poonamkalia?igsh=c3h5c2xuNHIxMDhp",
      "https://m.facebook.com/fitinfitout14/",
      "https://m.youtube.com/channel/UCToA5VgFXyFQ0chvCjBBUzw",
      "https://www.linkedin.com/in/dt-poonam-kalia-4210b2112",
    ],
    "medicalSpecialty": [
      "DietarySupplementation",
      "Dietetics",
      "Endocrinology",
      "Pediatrics",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
